/**
 * POST /api/analyze-product
 * Analyzes product image, locks visual branding DNA as immutable ground truth,
 * and generates the complete 10-second TV commercial campaign & ChatGPT Master Storyboard Prompt.
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

  const systemInstruction = `You are CineFlow AI, an elite Cannes Lions-winning Television Commercial Creative Director and Principal Cinematographer.
Your job is to examine an uploaded hero product image, extract its visual DNA (packaging geometry, branding, typography, color palette, material textures) as IMMUTABLE GROUND TRUTH, and formulate a high-impact, cinematic 10.0-second television commercial campaign.

You must output a comprehensive, structured prompt that the user will copy and paste into ChatGPT (GPT-4o / DALL-E) to generate a high-definition 4-panel sequential commercial storyboard.`;

  const userPrompt = `Analyze this hero product image with extreme precision and generate the complete 10-Second Commercial Master Storyboard Prompt for ChatGPT.

CRITICAL INSTRUCTIONS:
1. Identify the exact Product Name, brand typography, container shape, label colors, and key visual highlights.
2. Structure the output clearly in the following standard format:

# 🎬 CINEFLOW AI — MASTER COMMERCIAL STORYBOARD PROMPT
**Hero Product:** [Identify exact product name & category]
**Visual DNA Ground Truth:** [Container geometry, materials, label color codes, exact branding elements]
**Commercial Concept:** [10-Second High-Impact TV Commercial Narrative Hook & Core Message]

---

### 📋 COPY & PASTE INTO CHATGPT:

Create a photorealistic, 8K, cinematic commercial storyboard sheet (4 sequential panels, 16:9 horizontal layout) for the hero product: "[Identified Product Name]".

[IMMUTABLE GROUND TRUTH]:
- Preserve the exact packaging shape, label artwork, logo, typography, and container material from the reference image.
- High-end cinematic lighting, Arri Alexa 65 aesthetic, shallow depth of field, anamorphic lens flares.

[PANEL 1: 0.0s - 2.5s — THE CINEMATIC HOOK]
- Visual: [Dramatic macro opening, dynamic lighting reveal, atmospheric environment, particles or dynamic liquid/fog, establishing the luxury feel].
- Camera: Extreme close-up (ECU), slow cinematic push-in (dolly in), f/1.8 bokeh.

[PANEL 2: 2.5s - 5.0s — THE DYNAMIC ACTION / INGREDIENT REVEAL]
- Visual: [Dynamic movement, product interaction, sensory payoff, splashing drops, fresh ingredients, or high-tech sensory energy].
- Camera: Low-angle tracking shot, high-speed 120fps slow-motion capture, crisp motion blur.

[PANEL 3: 5.0s - 7.5s — THE EMOTIONAL PEAK / REFRESHMENT]
- Visual: [Hero product commanding the frame, illuminated by soft golden hour or studio rim lighting, tactile condensation or pristine surface reflection].
- Camera: Orbit pan shot, 45-degree heroic angle, warm cinematic backlight.

[PANEL 4: 7.5s - 10.0s — THE BRAND PAYOFF & CALL TO ACTION]
- Visual: [Pristine hero pedestal display, subtle brand logo illuminated, radiant glow, clean broadcast payoff].
- Camera: Locked-off hero shot with subtle slow pull-back, commercial typography space.

Styling: Photorealistic commercial photography, Masterpiece 8K, Unreal Engine 5 render style, cinematic color grade, broadcast commercial standard.

Produce this 4-panel storyboard image now.`;

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

    const outputText = result.text;

    // Extract product name if possible
    let productName = 'Hero Product';
    const match = outputText.match(/\*\*Hero Product:\*\*\s*([^\n\r*]+)/i) || 
                  outputText.match(/Hero Product:\s*([^\n\r]+)/i);
    if (match && match[1] && match[1].trim()) {
      productName = match[1].trim();
    }

    return res.status(200).json({
      success: true,
      data: {
        productIdentity: {
          productName
        },
        masterCommercialPrompt: outputText
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
