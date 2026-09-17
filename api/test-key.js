/**
 * POST /api/test-key
 * Validates whether the provided Gemini API key is active and authorized.
 */

const { resolveApiKey } = require('./_gemini');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,x-gemini-key');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = resolveApiKey(req);

  if (!apiKey) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a valid Gemini API key.'
    });
  }

  try {
    // Perform a lightweight probe to verify key validity
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(apiKey)}`;
    
    const testResponse = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: 'Hello' }] }],
        generationConfig: { maxOutputTokens: 5 }
      })
    });

    const data = await testResponse.json();

    if (!testResponse.ok) {
      // Try fallback to gemini-1.5-flash if 2.0 returns 404
      const fallbackUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;
      const fallbackRes = await fetch(fallbackUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Hello' }] }],
          generationConfig: { maxOutputTokens: 5 }
        })
      });

      const fallbackData = await fallbackRes.json();

      if (!fallbackRes.ok) {
        return res.status(200).json({
          success: false,
          error: fallbackData.error?.message || data.error?.message || 'Invalid Gemini API key.'
        });
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Gemini API key verified successfully!'
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      error: err.message || 'Failed to connect to Google Gemini API.'
    });
  }
};
