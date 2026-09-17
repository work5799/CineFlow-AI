/**
 * GET /api/health
 * Informs frontend whether a server-side Gemini key is configured.
 */

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,x-gemini-key');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const hasServerKey = !!(
    process.env.GEMINI_API_KEY && 
    process.env.GEMINI_API_KEY.trim().length > 10
  );

  return res.status(200).json({
    hasServerKey,
    service: 'CineFlow AI Commercial Director',
    status: 'online'
  });
};
