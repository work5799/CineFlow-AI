/**
 * POST /api/analyze-product
 * Analyzes product image, locks visual branding DNA as immutable ground truth,
 * and generates a clean, pristine television commercial prompt matching the requested
 * duration (10s, 25s, 30s) and language (Bangla, English, Hindi).
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
    language = 'bangla'
  } = req.body || {};

  if (!imageBase64) {
    return res.status(400).json({
      success: false,
      error: 'Missing product image. Please upload a product image first.'
    });
  }

  const rawBase64 = cleanBase64(imageBase64);

  // Normalize duration: 10, 25, 30 (default 10)
  const validDurations = [10, 25, 30];
  const chosenDuration = validDurations.includes(Number(duration)) ? Number(duration) : 10;

  // Normalize language: 'bangla', 'english', 'hindi' (default 'bangla')
  const validLanguages = ['bangla', 'english', 'hindi'];
  const chosenLanguage = validLanguages.includes(String(language).toLowerCase())
    ? String(language).toLowerCase()
    : 'bangla';

  const durationConfig = {
    10: {
      label: '10-SECOND',
      scenesCount: '5 Scenes (SCENE 01 to SCENE 05)',
      timelineGuide: '00-02: Problem/Greasy dishes. 02-04: Product squeeze/Action. 04-06: Bubble magic/Transformation. 06-08: Peak cleaning performance. 08-10: Hero product shot.',
      scenesGuide: `SCENE 01: Close-up of everyday challenge or problem, protagonist looking frustrated.
SCENE 02: Hand grips [Product Name], squeezes/pours/applies rich product texture with signature packaging details.
SCENE 03: Macro shot of active formula blooming and cutting through challenge.
SCENE 04: Protagonist wipes surface clean with a radiant, confident smile.
SCENE 05: Hero packshot of [Product Name] on clean glossy pedestal with brand logo.`
    },
    25: {
      label: '25-SECOND',
      scenesCount: '8 Scenes (SCENE 01 to SCENE 08)',
      timelineGuide: '00-03: Relatable problem. 03-06: Protagonist dilemma. 06-09: Hero product revelation. 09-12: Sensory product action. 12-16: Active formula science. 16-19: Emotional breakthrough. 19-22: Aspirational lifestyle. 22-25: Grand hero packshot.',
      scenesGuide: `SCENE 01: Cinematic hook establishing relatable everyday challenge.
SCENE 02: Protagonist facing dilemma with ordinary ineffective products.
SCENE 03: Hero [Product Name] revelation bathed in pristine commercial illumination.
SCENE 04: Dynamic product application, sensory pour/texture in high-speed motion.
SCENE 05: Microscopic science, active ingredient efficacy cutting through challenge.
SCENE 06: Emotional breakthrough and visible radiant transformation.
SCENE 07: Protagonist confidence and lifestyle celebration in bright luxury setting.
SCENE 08: Grand hero pedestal packshot of [Product Name] with final brand call-to-action.`
    },
    30: {
      label: '30-SECOND',
      scenesCount: '9 Scenes (SCENE 01 to SCENE 09)',
      timelineGuide: '00-03: Cinematic atmospheric hook. 03-06: Everyday challenge. 06-09: Hero revelation in light. 09-13: Macro sensory action. 13-17: Active technology efficacy. 17-21: Visible transformation. 21-24: Lifestyle celebration. 24-27: Packaging spotlight. 27-30: Grand broadcast hero packshot.',
      scenesGuide: `SCENE 01: Cinematic atmospheric hook establishing relatable context.
SCENE 02: Protagonist facing everyday dilemma with expressive empathy.
SCENE 03: Hero [Product Name] revelation bathed in cinematic illumination and volumetric glow.
SCENE 04: Sensory macro interaction, texture, pour, or unboxing in motion.
SCENE 05: Advanced visual demonstration of formula technology in high-speed slow motion.
SCENE 06: Instant visible transformation and radiant protagonist satisfaction.
SCENE 07: Aspirational lifestyle celebration, family joy and confidence.
SCENE 08: Secondary product feature or ergonomic packaging spotlight.
SCENE 09: Grand broadcast hero pedestal packshot of [Product Name] with sonic brand payoff.`
    }
  }[chosenDuration];

  const langConfig = {
    bangla: {
      header: 'BANGLA VOICEOVER',
      exampleLines: chosenDuration === 10
        ? "(0-3s) 'বাসি প্লেটের তেল আর চিটচিটে ভাব নিয়ে চিন্তিত?' (3-7s) 'নিয়ে আসুন [Product Name]। নিমেষেই পরিষ্কার!' (7-10s) '[Product Name] - পরিচ্ছন্নতার নতুন ছোঁয়া।'"
        : chosenDuration === 25
        ? "(0-6s) 'প্রতিদিনের জেদি দাগ আর মলিনতা নিয়ে ভাবছেন?' (6-16s) 'নিয়ে আসুন [Product Name]—উন্নত ফর্মুলা যা সহজে আনে নিখুঁত সমাধান।' (16-25s) '[Product Name] - সেরা মানের নতুন চমক!'"
        : "(0-6s) 'কঠিন দাগ আর ক্লান্তি কি আপনাকে পিছু টানছে?' (6-17s) 'এখনই বেছে নিন [Product Name]—দ্রুততম কার্যকারিতা ও নিখুঁত উজ্জ্বলতা।' (17-30s) '[Product Name] - আত্মবিশ্বাসে সেরা সুরক্ষা!'"
    },
    english: {
      header: 'ENGLISH VOICEOVER',
      exampleLines: chosenDuration === 10
        ? "(0-3s) 'Tired of stubborn grease and dull surfaces?' (3-7s) 'Discover [Product Name] for instant sparkling perfection!' (7-10s) '[Product Name] - The touch of pure brilliance.'"
        : chosenDuration === 25
        ? "(0-6s) 'Are everyday stubborn challenges slowing you down?' (6-16s) 'Step up to [Product Name], engineered to deliver instant visible perfection.' (16-25s) '[Product Name] - Redefining your standard of excellence.'"
        : "(0-6s) 'Don\'t let tough challenges compromise your signature lifestyle.' (6-17s) 'Experience [Product Name], formulated for instantaneous, uncompromising results.' (17-30s) '[Product Name] - The gold standard in precision performance.'"
    },
    hindi: {
      header: 'HINDI VOICEOVER',
      exampleLines: chosenDuration === 10
        ? "(0-3s) 'जिद्दी चिकनाई और पुराने दागों से हैं परेशान?' (3-7s) 'अपनाएं [Product Name], जो दे चुटकियों में बेदाग चमक!' (7-10s) '[Product Name] - चमक ऐसी, जो सबका दिल जीत ले।'"
        : chosenDuration === 25
        ? "(0-6s) 'क्या हर दिन के जिद्दी दाग छीन रहे हैं आपकी चमक?' (6-16s) 'पेश है [Product Name], जो गहराई में समाकर दे नया निखार और ताजगी।' (16-25s) '[Product Name] - बेहतरीन सुरक्षा, असली भरोसा!'"
        : "(0-6s) 'जिद्दी दागों से समझौता क्यों? जब आपके पास हो सबसे असरदार समाधान।' (6-17s) 'आज ही अपनाएं [Product Name]—जो दे त्वरित असर और बेहतरीन निखार।' (17-30s) '[Product Name] - हर दिन में लाएं नया आत्मविश्वास!'"
    }
  }[chosenLanguage];

  const systemInstruction = `You are CineFlow AI, an elite Television Commercial Creative Director and Commercial Storyboard Architect.
Your task is to examine an uploaded hero product image, extract its visual DNA (packaging geometry, branding, typography, color palette, material textures) as IMMUTABLE GROUND TRUTH, and formulate a copy-ready Television Commercial Master Prompt.

CRITICAL INSTRUCTION:
This prompt is designed to be copied directly by the user into ChatGPT (along with the product image attached) so that ChatGPT can generate a high-end multi-panel visual commercial storyboard image.

FORMATTING REQUIREMENTS:
1. STRICTLY DO NOT output any markdown header symbols (#, ##, ###), bold asterisks (**), bullet points (-), or horizontal dividers (---).
2. Output pure, clean, beautifully structured copy-ready plain text.
3. Every single section MUST start with an UPPERCASE label followed immediately by a colon (:) on its own line.
4. Follow the EXACT order, field names, and format specified.
5. In [Product Name], use the exact detected name from the image label.`;

  const userPrompt = `Analyze this hero product image with extreme precision and write the copy-ready ${chosenDuration}-Second Commercial Master Prompt.

Follow this EXACT structure (every line must have the uppercase label followed by a colon):

MASTER COMMERCIAL CONCEPT: A dynamic ${chosenDuration}-second TVC showcasing the [cleaning power/core benefit] of [Exact Product Name from image].
${durationConfig.label} TIMELINE: ${durationConfig.timelineGuide}
${durationConfig.scenesGuide}
CAMERA & CINEMATOGRAPHY: Macro, fluid, high-speed for [bubbles/splashes/interaction], smooth 35mm lens sweeps.
LIGHTING & COLOR: High-key luxury commercial lighting, vibrant [exact dominant colors from product packaging], bright clean whites.
PRODUCT PRESERVATION: Maintain exact [Product Name] bottle/container shape, cap details, colors, typography, and label clarity throughout.
${langConfig.header}: ${langConfig.exampleLines}
MUSIC: Upbeat, lighthearted acoustic pop.
SOUND DESIGN: Crisp liquid squish/pour, shimmering bubble/chime sounds, sonic brand payoff.
FINAL BRAND PAYOFF: Product hero shot with logo.
FINAL QUALITY: 4K, broadcast standard, photorealistic.`;

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
    const match = outputText.match(/showcasing [^.]*? of\s*([^\n\r.]+)/i) ||
                  outputText.match(/preservation of\s*([^\n\r,]+)/i) ||
                  outputText.match(/CONCEPT:\s*[^.]*?of\s*([^\n\r.]+)/i) ||
                  outputText.match(/Hero Product:\s*([^\n\r*]+)/i) ||
                  outputText.match(/Product:\s*([^\n\r*]+)/i);
    if (match && match[1] && match[1].trim()) {
      productName = match[1].trim().replace(/\.$/, '');
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
        duration: chosenDuration,
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
