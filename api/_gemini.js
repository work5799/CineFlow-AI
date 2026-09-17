/**
 * Shared Gemini REST API Helper
 * Resilient Multimodal Engine with Seamless High-Demand / Quota Auto-Failover
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
    // Rank stable vision models
    discovered.sort((a, b) => {
      const score = m => {
        let s = 0;
        const name = m.modelName.toLowerCase();
        // gemini-1.5-flash has the highest quota and capacity against 503 high-demand
        if (name === 'gemini-1.5-flash') s += 1000;
        else if (name === 'gemini-1.5-flash-latest') s += 950;
        else if (name === 'gemini-2.0-flash') s += 900;
        else if (name === 'gemini-1.5-pro') s += 800;
        else if (name === 'gemini-2.0-flash-exp') s += 750;
        else if (name.startsWith('gemini-1.5-flash')) s += 700;
        else if (name.startsWith('gemini-2.0-flash')) s += 600;
        else if (name.includes('flash')) s += 400;
        else if (name.includes('pro')) s += 300;
        if (m.apiVersion === 'v1beta') s += 5;
        return s;
      };
      return score(b) - score(a);
    });

    modelCache.set(apiKey, discovered);
    return discovered;
  }

  // Guaranteed fallback models
  const defaults = [
    { modelName: 'gemini-1.5-flash', apiVersion: 'v1beta' },
    { modelName: 'gemini-1.5-flash', apiVersion: 'v1' },
    { modelName: 'gemini-2.0-flash', apiVersion: 'v1beta' },
    { modelName: 'gemini-1.5-flash-latest', apiVersion: 'v1beta' },
    { modelName: 'gemini-1.5-pro', apiVersion: 'v1beta' },
    { modelName: 'gemini-1.5-pro', apiVersion: 'v1' }
  ];

  return defaults;
}

/**
 * Calls Gemini REST API with automatic discovery and multi-model fallback.
 * If a model experiences high demand, rate limit, or any temporary error,
 * it immediately falls over to the next candidate model seamlessly!
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
        
        // Critical: If invalid API key (400 / 401 with invalid key), do not retry all models pointlessly
        if (response.status === 400 && errorMsg.includes('API key not valid')) {
          throw new Error('Your Gemini API key is not valid. Please check your key in the header.');
        }

        // For ANY other error (503 High Demand, 429 Quota/Rate Limit, 404 Model Not Found, 400 Modality Issue, 500 Overload):
        // Automatically proceed to the NEXT candidate model!
        lastError = new Error(errorMsg);
        console.warn(`Model ${apiVersion}/${modelName} failed (${response.status}: ${errorMsg}). Falling over to next candidate...`);
        continue;
      }

      const candidate = data.candidates?.[0];
      const text = candidate?.content?.parts?.map(p => p.text).join('') || '';

      if (!text) {
        lastError = new Error('Model returned an empty response. Falling over to next candidate...');
        continue;
      }

      return { text, modelUsed: `${apiVersion}/${modelName}` };
    } catch (err) {
      if (err.message && err.message.includes('API key is not valid')) {
        throw err;
      }
      lastError = err;
      console.warn(`Network/Model error on ${apiVersion}/${modelName}: ${err.message}. Trying next candidate...`);
      continue;
    }
  }

  throw lastError || new Error('All available Gemini models are currently experiencing high traffic. Please retry in a few seconds.');
}

module.exports = {
  resolveApiKey,
  cleanBase64,
  callGemini,
  discoverAvailableModels
};
