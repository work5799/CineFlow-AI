/**
 * POST /api/analyze-product
 * Analyzes product image, locks visual branding DNA as immutable ground truth,
 * and generates a copy-ready Television Commercial Master Prompt matching the requested
 * duration (10s, 20s, 30s, or custom) and language (Bangla, English, Hindi).
 * Dynamically adapts to ANY uploaded product (Dishwash, Skincare, Haircare, Beverage, Food, Tech, Fashion, Luxury, etc.).
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

  const {
    imageBase64,
    mimeType = 'image/jpeg',
    duration = 10,
    scenes,
    language = 'bangla'
  } = req.body || {};

  if (!imageBase64) {
    return res.status(400).json({
      success: false,
      error: 'Missing product image. Please upload a product image first.'
    });
  }

  const rawBase64 = cleanBase64(imageBase64);

  // Parse duration & scenes
  const numDuration = Math.max(5, Math.min(120, Number(duration) || 10));
  let numScenes;
  if (scenes && Number(scenes) >= 3 && Number(scenes) <= 15) {
    numScenes = Number(scenes);
  } else if (numDuration === 10) {
    numScenes = 5;
  } else if (numDuration === 20) {
    numScenes = 7;
  } else if (numDuration === 30) {
    numScenes = 9;
  } else {
    numScenes = Math.max(3, Math.min(12, Math.round(numDuration / 3.3)));
  }

  // Normalize language: 'bangla', 'english', 'hindi' (default 'bangla')
  const validLanguages = ['bangla', 'english', 'hindi'];
  const chosenLanguage = validLanguages.includes(String(language).toLowerCase())
    ? String(language).toLowerCase()
    : 'bangla';

  const langConfig = {
    bangla: {
      header: 'BANGLA VOICEOVER',
      label: 'Bangla (বাংলা)',
      instruction: 'Write an authentic, highly persuasive, catchy television commercial voiceover in BANGLA (বাংলা) crafted specifically for this product and its benefits, matching the ' + numDuration + '-second duration. Put the voiceover script inside single quotes.'
    },
    english: {
      header: 'ENGLISH VOICEOVER',
      label: 'English',
      instruction: 'Write a high-end broadcast television commercial voiceover in English crafted specifically for this product and its benefits, matching the ' + numDuration + '-second duration. Put the voiceover script inside single quotes.'
    },
    hindi: {
      header: 'HINDI VOICEOVER',
      label: 'Hindi (हिंदी)',
      instruction: 'Write a catchy, emotive, broadcast-ready television commercial voiceover in HINDI (हिंदी) crafted specifically for this product and its benefits, matching the ' + numDuration + '-second duration. Put the voiceover script inside single quotes.'
    }
  }[chosenLanguage];

  const systemInstruction = `You are CineFlow AI, an elite Television Commercial Creative Director and Commercial Storyboard Architect.
Your task is to examine the uploaded product image with extreme precision and write a completely customized Television Commercial Master Prompt tailored specifically to THIS product.

STEP 1: PRODUCT DNA EXTRACTION
- Look closely at the image to detect:
  1. Exact Brand Name & Product Name on the packaging label (e.g., dishwashing liquid, skincare cream, shampoo, perfume, energy drink, snack, electronics, shoes, etc.).
  2. Product Category and the REAL everyday pain point / dilemma it solves.
  3. Packaging shape (bottle, jar, can, tube, box, device), cap style, colors, typography, and texture/viscosity.

STEP 2: STORY TRANSFORMATION ARC (NOT A STATIC 3D MODEL)
Craft a complete narrative commercial that shows:
1. Relatable everyday problem / dilemma (protagonist facing category-specific frustration).
2. Sensory product introduction (pour, lather, spray, open, apply, or interact with signature packaging texture).
3. Active formula performance / technology in action (macro bubbles, foam, splash, serum absorption, sound wave, etc.).
4. Dramatic transformation & visible reveal (sparkling clean, luminous skin, energetic revitalization, pristine result).
5. Protagonist smiling, delighted, satisfied and confident.
6. Grand hero packshot on pedestal with thematic aesthetic elements matching THIS product (e.g. lemons/water for lemon dishwash; aloe/dew for skincare; ice/effervescence for beverage; neon/metal for tech), packaging detail focus, and final brand logo fade-out.

FORMATTING REQUIREMENTS:
1. STRICTLY DO NOT output any markdown headers (#, ##, ###), bold asterisks (**), bullet points (-), or horizontal dividers (---).
2. Output clean, copy-ready plain text.
3. Every single section MUST start with an UPPERCASE label followed immediately by a colon (:) on its own line.
4. The content of every section MUST be 100% customized to the product in the image. NEVER use generic dishwashing or kitchen terms if the product is skincare, beverage, tech, fashion, or anything else!`;

  const userPrompt = `Carefully examine this uploaded product image and formulate the copy-ready ${numDuration}-Second Commercial Master Prompt with exactly ${numScenes} scenes in ${langConfig.label}.

Generate the prompt following this EXACT uppercase-labeled structure:

MASTER COMMERCIAL CONCEPT: Create a ${numDuration}-second premium commercial for '[Exact Detected Product Name]'. The goal is to show the transformation of [specific everyday problem/dilemma this product solves] into [radiant/clean/energized/delighted solution space] using the product.
${numDuration}-SECOND TIMELINE: [Divide ${numDuration} seconds into ${numScenes} proportional intervals (e.g. 00-03s: ..., 03-06s: ...). Each interval must describe the story progression for THIS product.]
SCENE 01: [Medium shot of protagonist facing the specific problem/dilemma.]
SCENE 02: [Macro or close-up of product interaction: pouring, applying, opening, or spraying with signature packaging details and texture.]
SCENE 03: [Close-up of formula action, sensory efficacy, bubbles, foam, splash, or technology solving the problem.]
[Continue sequentially with SCENE 04, SCENE 05... up to SCENE ${String(numScenes).padStart(2, '0')}]:
SCENE ${String(numScenes - 2).padStart(2, '0')}: [Extreme close-up or tracking reveal of the transformed result.]
SCENE ${String(numScenes - 1).padStart(2, '0')}: [Medium shot of protagonist smiling, completely satisfied and confident.]
SCENE ${String(numScenes).padStart(2, '0')}: [Static hero packshot of product with thematic natural/aesthetic elements matching THIS product, packaging detail focus, and final brand logo fade-out.]
CAMERA & CINEMATOGRAPHY: [Professional cinema camera settings, focal length, depth of field, and tracking motion tailored to this product.]
LIGHTING & COLOR: [Lighting transition from moody problem lighting to vibrant, high-contrast lighting highlighting the product's packaging colors.]
PRODUCT PRESERVATION: Maintain exact [describe detected packaging geometry], logo placement, colors, and [texture/viscosity/finish]. No morphing.
${langConfig.header}: [${langConfig.instruction}]
MUSIC: [Music genre and instrumentation perfectly fitting this product's personality and vibe.]
SOUND DESIGN: [Crisp foley SFX tailored specifically to this product's actions, e.g. pour, foam, fizz, spray, rinse, chime, whoosh.]
FINAL BRAND PAYOFF: Hero shot with [thematic aesthetic elements matching this product] and brand logo.
FINAL QUALITY: 4k, cinematic, high-speed, sharp focus, professional color grade.`;

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
      temperature: 0.4
    });

    let outputText = result.text || '';

    // Extract detected product name
    let productName = 'Hero Product';
    const match = outputText.match(/commercial for '([^']+)'/i) ||
                  outputText.match(/commercial for "([^"]+)"/i) ||
                  outputText.match(/commercial for ([^\r\n.]+)/i) ||
                  outputText.match(/CONCEPT:\s*[^.]*?for\s*([^\r\n.]+)/i) ||
                  outputText.match(/Product:\s*([^\r\n*]+)/i);
    if (match && match[1] && match[1].trim()) {
      productName = match[1].trim().replace(/\.$/, '').replace(/^['"]|['"]$/g, '');
    }

    // Clean any accidental markdown hashes or asterisks from the output
    let cleanPrompt = outputText
      .replace(/^#+\s*/gm, '')     // Remove heading hashes (#, ##, ###)
      .replace(/\*\*/g, '')        // Remove bold asterisks (**)
      .replace(/^---+\s*$/gm, '')  // Remove horizontal rule lines (---)
      .trim();

    return res.status(200).json({
      success: true,
      data: {
        productIdentity: {
          productName
        },
        duration: numDuration,
        scenes: numScenes,
        language: chosenLanguage,
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
