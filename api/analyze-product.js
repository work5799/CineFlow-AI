/**
 * POST /api/analyze-product
 * Analyzes product image, locks visual branding DNA as immutable ground truth,
 * and generates a clean, pristine 10-second TV commercial prompt for ChatGPT.
 */

const { resolveApiKey, cleanBase64, callGemini } = require('./_gemini');

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
    return res.status(401).json({
      success: false,
      error: 'No Gemini API key provided. Please connect your Gemini API key in the header.'
    });
  }

  const { imageBase64, mimeType = 'image/jpeg' } = req.body || {};

  if (!imageBase64) {
    return res.status(400).json({
      success: false,
      error: 'Missing product image. Please upload a product image first.'
    });
  }

  const rawBase64 = cleanBase64(imageBase64);

  const systemInstruction = `You are CineFlow AI, an elite Television Commercial Creative Director and Principal Cinematographer.
Your job is to examine an uploaded hero product image, extract its visual DNA (packaging geometry, branding, typography, color palette, material textures) as IMMUTABLE GROUND TRUTH, and formulate a high-impact, cinematic 10.0-second television commercial campaign.

IMPORTANT FORMATTING RULE:
Do NOT output markdown header hashes (#, ##, ###) or bold asterisks (**) or horizontal dividers (---).
Output pure, clean, beautifully spaced prompt text with uppercase bracketed section titles like [HERO PRODUCT GROUND TRUTH], [PANEL 1 — THE CINEMATIC HOOK (0.0s - 2.5s)], etc.
The output must be 100% copy-ready so that a user can copy it directly into ChatGPT (DALL-E / GPT-4o) without needing to clean up any messy symbols.`;

  const userPrompt = `Analyze this hero product image with extreme precision and write the copy-ready 10-Second Commercial Master Storyboard Prompt for ChatGPT.

CRITICAL INSTRUCTIONS:
- Identify the exact Product Name and category.
- Do NOT use markdown symbols (#, ##, **, ---). Use clean bracketed headers.
- Follow this exact structure:

Create a photorealistic, 8K, cinematic commercial storyboard (4 sequential panels in a 16:9 widescreen composition) for: [Exact Product Name & Category].

[HERO PRODUCT GROUND TRUTH & BRAND DNA]:
- Packaging Geometry: [Describe bottle/container shape, cap style, ergonomics, and material textures]
- Authentic Branding: [Describe exact logo, typography, color codes, and label graphics from the reference image]
- Cinematography Style: Shot on Arri Alexa 65 with 35mm anamorphic prime lens, f/1.8 shallow depth of field, natural volumetric light, crisp commercial reflections.

[PANEL 1 — THE CINEMATIC HOOK (0.0s - 2.5s)]:
- Visual: [Dramatic macro extreme close-up, dynamic atmospheric lighting reveal, particles, mist, or liquid motion highlighting packaging texture]
- Camera: Low-angle slow cinematic push-in (dolly in) with soft bokeh

[PANEL 2 — DYNAMIC ACTION & INGREDIENT DYNAMICS (2.5s - 5.0s)]:
- Visual: [High-energy sensory payoff, splashing droplets, fresh active ingredients, dynamic vortex, or tactile interaction with the product]
- Camera: 120fps high-speed slow-motion tracking shot with crisp motion blur

[PANEL 3 — SENSORY BENEFIT & REFRESHMENT (5.0s - 7.5s)]:
- Visual: [Hero product commanding the frame in an evocative, pristine setting bathed in warm morning or studio rim lighting]
- Camera: 45-degree heroic orbit gliding pan accentuating the product contours

[PANEL 4 — BROADCAST PAYOFF & HERO PEDESTAL (7.5s - 10.0s)]:
- Visual: [Hero product perfectly centered on a glossy pedestal, subtle radiant aura, pristine commercial broadcast composition]
- Camera: Locked-off hero composition with gentle micro-pullback

[GLOBAL RENDER SPECIFICATIONS]:
Photorealistic commercial photography, 8K resolution, Unreal Engine 5 render fidelity, high-contrast broadcast commercial color grade. Absolute packaging fidelity to the reference image.`;

  try {
    const contents = [
      {
        parts: [
          { text: userPrompt },
          {
            inline_data: {
              mime_type: mimeType,
              data: rawBase64
            }
          }
        ]
      }
    ];

    const result = await callGemini({
      apiKey,
      contents,
      systemInstruction,
      temperature: 0.35
    });

    let outputText = result.text || '';

    // Extract product name if possible
    let productName = 'Hero Product';
    const match = outputText.match(/for:\s*([^\n\r.]+)/i) || 
                  outputText.match(/Hero Product:\s*([^\n\r*]+)/i) ||
                  outputText.match(/Product:\s*([^\n\r*]+)/i);
    if (match && match[1] && match[1].trim()) {
      productName = match[1].trim();
    }

    // Clean any accidental markdown hashes or asterisks from the output
    let cleanPrompt = outputText
      .replace(/^#+\s*/gm, '')     // Remove heading hashes (#, ##, ###)
      .replace(/\*\*/g, '')        // Remove bold asterisks (**)
      .replace(/^---+\s*$/gm, '')  // Remove horizontal rule lines (---)
      .replace(/\n{3,}/g, '\n\n')  // Normalize excessive blank lines
      .trim();

    return res.status(200).json({
      success: true,
      data: {
        productIdentity: {
          productName
        },
        masterCommercialPrompt: cleanPrompt
      }
    });
  } catch (err) {
    console.error('Product Analysis Error:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Failed to analyze product image.'
    });
  }
};
