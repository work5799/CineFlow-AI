/**
 * Shared Gemini REST API Helper
 * Dynamic Model Discovery + Auto-Fallback across v1 and v1beta
 * Specifically filters for vision/multimodal capable models
 */

// Cache discovered model per API key to minimize latency
const modelCache = new Map();

/**
 * Resolves active API key from header, body, or environment variable
 */
function resolveApiKey(req) {
  const headerKey = req.headers['x-gemini-key'] || req.headers['x-api-key'];
  if (headerKey && typeof headerKey === 'string' && headerKey.trim().length > 10) {
    return headerKey.trim();
  }

  if (req.body && typeof req.body.apiKey === 'string' && req.body.apiKey.trim().length > 10) {
    return req.body.apiKey.trim();
  }

  if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim().length > 10) {
    return process.env.GEMINI_API_KEY.trim();
  }

  return null;
}

/**
 * Strips data URI prefix (e.g. data:image/png;base64,) and returns pure base64
 */
function cleanBase64(str) {
  if (!str || typeof str !== 'string') return '';
  const commaIdx = str.indexOf(',');
  if (commaIdx !== -1 && str.substring(0, commaIdx).includes('base64')) {
    return str.substring(commaIdx + 1);
  }
  return str;
}

/**
 * Dynamically queries Google's ListModels to get the exact authorized models for this key
 */
async function discoverAvailableModels(apiKey) {
  if (modelCache.has(apiKey)) {
    return modelCache.get(apiKey);
  }

  const discovered = [];

  for (const apiVersion of ['v1beta', 'v1']) {
    try {
      const listUrl = `https://generativelanguage.googleapis.com/${apiVersion}/models?key=${encodeURIComponent(apiKey)}`;
      const res = await fetch(listUrl);
      if (res.ok) {
        const data = await res.json();
        const models = data.models || [];
        for (const m of models) {
          if (m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent')) {
            const cleanName = m.name.replace(/^models\//, '');
            // STRICTLY EXCLUDE non-image models (TTS, audio-only, embeddings, search)
            if (
              cleanName.includes('-tts') ||
              cleanName.includes('tts') ||
              cleanName.includes('embedding') ||
              cleanName.includes('aqa') ||
              cleanName.includes('imagen')
            ) {
              continue;
            }
            discovered.push({ modelName: cleanName, apiVersion });
          }
        }
      }
    } catch (e) {
      // Ignore network failures in discovery
    }
  }

  if (discovered.length > 0) {
    // Rank proven multimodal models highest
    discovered.sort((a, b) => {
      const score = m => {
        let s = 0;
        const name = m.modelName.toLowerCase();
        if (name === 'gemini-2.0-flash') s += 1000;
        else if (name === 'gemini-1.5-flash') s += 900;
        else if (name === 'gemini-1.5-flash-latest') s += 850;
        else if (name === 'gemini-2.0-flash-exp') s += 800;
        else if (name === 'gemini-1.5-pro') s += 700;
        else if (name === 'gemini-1.5-pro-latest') s += 650;
        else if (name.startsWith('gemini-2.0-flash')) s += 600;
        else if (name.startsWith('gemini-1.5-flash')) s += 500;
        else if (name.includes('flash')) s += 300;
        else if (name.includes('pro')) s += 200;
        if (m.apiVersion === 'v1beta') s += 5;
        return s;
      };
      return score(b) - score(a);
    });

    modelCache.set(apiKey, discovered);
    return discovered;
  }

  // Guaranteed multimodal defaults if ListModels is restricted
  const defaults = [
    { modelName: 'gemini-2.0-flash', apiVersion: 'v1beta' },
    { modelName: 'gemini-1.5-flash', apiVersion: 'v1' },
    { modelName: 'gemini-1.5-flash', apiVersion: 'v1beta' },
    { modelName: 'gemini-1.5-flash-latest', apiVersion: 'v1beta' },
    { modelName: 'gemini-2.0-flash-exp', apiVersion: 'v1beta' },
    { modelName: 'gemini-1.5-pro', apiVersion: 'v1' },
    { modelName: 'gemini-1.5-pro', apiVersion: 'v1beta' }
  ];

  return defaults;
}

/**
 * Calls Gemini REST API with automatic discovery and multi-model fallback
 */
async function callGemini({ apiKey, contents, systemInstruction, temperature = 0.4 }) {
  if (!apiKey) {
    throw new Error('No Gemini API key provided. Please connect your API key.');
  }

  const candidateModels = await discoverAvailableModels(apiKey);

  let lastError = null;

  for (const { modelName, apiVersion } of candidateModels) {
    try {
      const url = `https://generativelanguage.googleapis.com/${apiVersion}/models/${modelName}:generateContent?key=${encodeURIComponent(apiKey)}`;

      const payload = {
        contents,
        generationConfig: {
          temperature,
          maxOutputTokens: 3500
        }
      };

      if (systemInstruction) {
        payload.systemInstruction = {
          parts: [{ text: systemInstruction }]
        };
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data.error?.message || `Gemini API error (${response.status})`;
        // If model not found, unsupported, or modality not enabled (e.g. audio-only), proceed to next candidate
        if (
          response.status === 404 ||
          errorMsg.includes('not found') ||
          errorMsg.includes('not supported') ||
          errorMsg.includes('modality') ||
          errorMsg.includes('Image input')
        ) {
          lastError = new Error(errorMsg);
          continue;
        }
        throw new Error(errorMsg);
      }

      const candidate = data.candidates?.[0];
      const text = candidate?.content?.parts?.map(p => p.text).join('') || '';

      if (!text) {
        throw new Error('Gemini returned an empty response. Please try again with a clearer image.');
      }

      return { text, modelUsed: `${apiVersion}/${modelName}` };
    } catch (err) {
      lastError = err;
      if (
        err.message &&
        (err.message.includes('not found') ||
         err.message.includes('not supported') ||
         err.message.includes('modality') ||
         err.message.includes('Image input') ||
         err.message.includes('404'))
      ) {
        continue;
      }
      throw err;
    }
  }

  throw lastError || new Error('Failed to generate content with available Gemini models.');
}

module.exports = {
  resolveApiKey,
  cleanBase64,
  callGemini,
  discoverAvailableModels
};
