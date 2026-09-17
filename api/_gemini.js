/**
 * Shared Gemini REST API Helper
 * Supports native fetch without external npm dependencies
 * Automatic model fallback: gemini-2.5-flash -> gemini-2.0-flash -> gemini-1.5-flash
 */

const FALLBACK_MODELS = [
  'gemini-2.5-flash',
  'gemini-2.0-flash',
  'gemini-1.5-flash'
];

/**
 * Resolves active API key from header, body, or environment variable
 */
function resolveApiKey(req) {
  // Check header first (user custom key from modal)
  const headerKey = req.headers['x-gemini-key'] || req.headers['x-api-key'];
  if (headerKey && typeof headerKey === 'string' && headerKey.trim().length > 10) {
    return headerKey.trim();
  }

  // Check body if JSON
  if (req.body && typeof req.body.apiKey === 'string' && req.body.apiKey.trim().length > 10) {
    return req.body.apiKey.trim();
  }

  // Fallback to server environment key
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
 * Calls Gemini REST API with automatic model fallback
 */
async function callGemini({ apiKey, contents, systemInstruction, temperature = 0.4 }) {
  if (!apiKey) {
    throw new Error('No Gemini API key provided. Please connect your API key.');
  }

  let lastError = null;

  for (const model of FALLBACK_MODELS) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;

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
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data.error?.message || `Gemini API error (${response.status})`;
        // If 404 model not found, try next fallback model
        if (response.status === 404 || errorMsg.includes('not found')) {
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

      return { text, modelUsed: model };
    } catch (err) {
      lastError = err;
      // If error is network or model specific, try fallback
      if (err.message && (err.message.includes('not found') || err.message.includes('404'))) {
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
  callGemini
};
