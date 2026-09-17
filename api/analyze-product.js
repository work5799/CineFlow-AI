/**
 * POST /api/analyze-product
 * Analyzes product image, locks visual branding DNA as immutable ground truth,
 * and generates a copy-ready Television Commercial Master Prompt matching the requested
 * duration (10s, 20s, 30s, or custom) and language (Bangla, English, Hindi).
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

  // Helper to build dynamic timeline breakdown
  function buildTimeline(dur, scnCount) {
    if (dur === 10) {
      return '00-02s: Protagonist facing greasy dirty dishes. 02-04s: Product squeeze and thick pouring action. 04-06s: Macro bubbles actively cutting through grease. 06-08s: Sparkling clean plate reveal and protagonist smile. 08-10s: Brand hero packshot with tagline.';
    }
    if (dur === 20) {
      return '00-03s: Frustrated protagonist facing tough greasy dishes. 03-06s: Product intro with thick pouring action onto sponge. 06-09s: Macro bubbles breaking down stubborn grease. 09-12s: Effortless single-swipe cleaning action. 12-15s: Water rinse revealing mirror-like sparkling plate. 15-18s: Protagonist smiling, delighted with kitchen freshness. 18-20s: Final hero packshot with brand payoff.';
    }
    if (dur === 30) {
      return '00-05s: Frustrated protagonist in a messy kitchen. 05-10s: Product intro with thick pouring action. 10-15s: Macro bubbles fighting grease. 15-21s: Sparkling plate reveal. 21-26s: Protagonist smiling, content. 26-30s: Brand packshot with tagline.';
    }
    // Custom dynamic timeline
    const step = dur / scnCount;
    const intervals = [];
    for (let i = 0; i < scnCount; i++) {
      const start = Math.round(i * step);
      const end = i === scnCount - 1 ? dur : Math.round((i + 1) * step);
      const sStr = String(start).padStart(2, '0');
      const eStr = String(end).padStart(2, '0');
      if (i === 0) intervals.push(`${sStr}-${eStr}s: Frustrated protagonist facing everyday dilemma.`);
      else if (i === 1) intervals.push(`${sStr}-${eStr}s: Product intro with sensory pouring/application.`);
      else if (i === 2) intervals.push(`${sStr}-${eStr}s: Macro active formula fighting grease/challenge.`);
      else if (i === scnCount - 3) intervals.push(`${sStr}-${eStr}s: Sparkling surface reveal in pristine light.`);
      else if (i === scnCount - 2) intervals.push(`${sStr}-${eStr}s: Protagonist smiling, satisfied and confident.`);
      else if (i === scnCount - 1) intervals.push(`${sStr}-${eStr}s: Brand packshot with tagline.`);
      else intervals.push(`${sStr}-${eStr}s: Active performance and visible cleaning action.`);
    }
    return intervals.join(' ');
  }

  // Helper to build scenes guide
  function buildScenesGuide(dur, scnCount) {
    if (dur === 30 && scnCount === 9) {
      return `SCENE 01: Medium shot, protagonist looking at dirty dishes.
SCENE 02: Macro, pouring [Product Name].
SCENE 03: Close-up of sponge cleaning plate with bubbly foam.
SCENE 04: Extreme close-up of water rinsing a plate to reveal sparkle.
SCENE 05: Medium, protagonist holding up a clean plate.
SCENE 06: Static hero packshot, product with lemon and water.
SCENE 07: Product detail focus on logo and packaging geometry.
SCENE 08: Bright lighting adjustment for brand impact.
SCENE 09: Final brand logo fade-out.`;
    }
    if (dur === 20 && scnCount === 7) {
      return `SCENE 01: Medium shot, protagonist looking at dirty dishes in messy kitchen.
SCENE 02: Macro, pouring [Product Name] onto sponge with thick viscosity.
SCENE 03: Close-up of sponge cleaning plate with active bubbly foam.
SCENE 04: Extreme close-up of water rinsing a plate to reveal sparkle.
SCENE 05: Medium shot, protagonist holding up a clean plate, smiling, content.
SCENE 06: Static hero packshot, product with lemon and water splash.
SCENE 07: Final brand logo fade-out with tagline.`;
    }
    if (dur === 10 && scnCount === 5) {
      return `SCENE 01: Medium shot, protagonist looking at dirty dishes.
SCENE 02: Macro, pouring [Product Name] onto sponge.
SCENE 03: Close-up of sponge cleaning plate with bubbly foam cutting grease.
SCENE 04: Extreme close-up of water rinsing a plate to reveal sparkle.
SCENE 05: Static hero packshot, product with lemon and brand logo fade-out.`;
    }
    // Dynamic custom scenes
    const lines = [];
    for (let i = 1; i <= scnCount; i++) {
      const pad = String(i).padStart(2, '0');
      if (i === 1) lines.push(`SCENE ${pad}: Medium shot, protagonist looking at everyday problem or dirty items.`);
      else if (i === 2) lines.push(`SCENE ${pad}: Macro, pouring/applying [Product Name] with rich texture.`);
      else if (i === 3) lines.push(`SCENE ${pad}: Close-up of active cleaning / performance with bubbly foam.`);
      else if (i === scnCount - 2) lines.push(`SCENE ${pad}: Extreme close-up of surface rinse to reveal sparkling shine.`);
      else if (i === scnCount - 1) lines.push(`SCENE ${pad}: Medium shot, protagonist holding up clean result, smiling.`);
      else if (i === scnCount) lines.push(`SCENE ${pad}: Static hero packshot, product with fresh elements and final brand logo fade-out.`);
      else lines.push(`SCENE ${pad}: Dynamic demonstration of product efficacy and formula action.`);
    }
    return lines.join('\n');
  }

  // Voiceover scripts by language & duration
  const langConfig = {
    bangla: {
      header: 'BANGLA VOICEOVER',
      script: numDuration <= 12
        ? "'বাসি প্লেটের তেল আর চিটচিটে ভাব নিয়ে চিন্তিত? নিয়ে আসুন নতুন [Product Name]। এর শক্তিশালী লেমন ফর্মুলা নিমিষেই কাটবে জেদি তেল। প্লেট হবে আয়নার মতো পরিষ্কার! [Product Name], পরিচ্ছন্নতার নতুন ছোঁয়া।'"
        : numDuration <= 22
        ? "'বাসি প্লেটের তেল আর চিটচিটে ভাব নিয়ে চিন্তিত? সব সমস্যার সমাধান এখন আপনার হাতে! নিয়ে আসুন নতুন [Product Name]। এর শক্তিশালী লেমন ফর্মুলা নিমিষেই কাটবে যেকোনো জেদি তেল আর চিটচিটে ভাব। প্লেট হবে আয়নার মতো পরিষ্কার, আর সুবাসে ভরবে রান্নাঘর। [Product Name]—পরিচ্ছন্নতার সেরা ছোঁয়া!'"
        : "'বাসি প্লেটের তেল আর চিটচিটে ভাব নিয়ে চিন্তিত? সব সমস্যার সমাধান এখন আপনার হাতে! নিয়ে আসুন নতুন [Product Name]। এর শক্তিশালী লেমন ফর্মুলা নিমিষেই কাটবে যেকোনো জেদি তেল আর চিটচিটে ভাব। প্লেট হবে আয়নার মতো পরিষ্কার, আর সুবাসে ভরবে রান্নাঘর। [Product Name], পরিচ্ছন্নতার নতুন ছোঁয়া।'"
    },
    english: {
      header: 'ENGLISH VOICEOVER',
      script: numDuration <= 12
        ? "'Tired of stubborn grease and messy dishes? Discover new [Product Name]. Its ultra-powerful formula cuts tough oil in seconds for mirror-clean sparkle. [Product Name], the touch of pure brilliance.'"
        : numDuration <= 22
        ? "'Struggling with tough grease and dirty dishes? The complete solution is now in your hands! Bring home new [Product Name]. Its high-potency lemon formula dissolves stubborn grease instantly. Plates emerge sparkling like mirrors while fresh citrus aroma fills your kitchen. [Product Name], the gold standard in clean.'"
        : "'Tired of stubborn grease and messy kitchen challenges? The complete solution is now in your hands! Introducing all-new [Product Name]. Its high-potency lemon formula cuts through stubborn grease and sticky grime in seconds. Plates emerge sparkling clean like mirrors, while refreshing fragrance fills the kitchen. [Product Name], the new touch of pure brilliance.'"
    },
    hindi: {
      header: 'HINDI VOICEOVER',
      script: numDuration <= 12
        ? "'क्या बर्तनों की जिद्दी चिकनाई से परेशान हैं? ले आएं नया [Product Name]। इसका ताकतवर लेमन फॉर्मूला सेकंडों में काटे जिद्दी तेल और दे बेदाग चमक। [Product Name], चमक ऐसी जो दिल जीत ले।'"
        : numDuration <= 22
        ? "'बासी बर्तनों का जिद्दी तेल और चिकनाई छीन रही है सुकून? अब समाधान आपके हाथ में है! अपनाएं नया [Product Name]। इसका असरदार लेमन फॉर्मूला पल भर में काटे सख्त चिकनाई। बर्तन चमकें आईने जैसे साफ, और किचन महके ताजगी से। [Product Name]—सफाई का नया एहसास!'"
        : "'क्या बासी बर्तनों का जिद्दी तेल और चिकनाई आपको परेशान कर रही है? अब हर समस्या का समाधान आपके हाथ में है! लेकर आएं नया [Product Name]। इसका शक्तिशाली लेमन फॉर्मूला सेकंडों में काटे किसी भी जिद्दी तेल और चिकनाहट को। बर्तन होंगे आईने जैसे साफ, और ताजगी से महकेगा आपका किचन। [Product Name], स्वच्छता का नया स्पर्श।'"
    }
  }[chosenLanguage];

  const timelineGuide = buildTimeline(numDuration, numScenes);
  const scenesGuide = buildScenesGuide(numDuration, numScenes);

  const systemInstruction = `You are CineFlow AI, an elite Television Commercial Creative Director and Commercial Storyboard Architect.
Your task is to examine an uploaded hero product image, detect the exact product name, branding, and packaging details, and formulate a copy-ready Television Commercial Master Prompt.

CRITICAL INSTRUCTION:
Do NOT output a simple static 3D product render prompt.
You MUST craft a complete, narrative-driven commercial transformation prompt that guides AI tools (ChatGPT, Midjourney, Google Veo, Runway, Sora) to create a full multi-scene television commercial storyboard.
The commercial MUST feature the story arc:
1. Relatable problem / protagonist facing dilemma.
2. Product introduction with sensory pouring/application.
3. Macro formula performance & bubbles/active foam cutting through challenge.
4. Sparkling surface rinse & mirror-like transformation reveal.
5. Protagonist smiling, delighted and content.
6. Hero packshot on pedestal with fresh thematic elements (lemons/water/nature) and final brand logo fade-out.

FORMATTING REQUIREMENTS:
1. STRICTLY DO NOT output markdown header symbols (#, ##, ###), bold asterisks (**), bullet points (-), or horizontal dividers (---).
2. Output clean, copy-ready plain text.
3. Every single section MUST start with an UPPERCASE label followed immediately by a colon (:) on its own line.
4. Replace [Product Name] with the exact detected product name from the image.
5. In ${langConfig.header}, use the provided voiceover script, inserting the exact product name.`;

  const userPrompt = `Analyze this hero product image with extreme precision and write the copy-ready ${numDuration}-Second Commercial Master Prompt with ${numScenes} scenes.

Follow this EXACT structure:

MASTER COMMERCIAL CONCEPT: Create a ${numDuration}-second premium commercial for '[Product Name]'. The goal is to show the transformation of a messy kitchen into a sparkling clean space using the product.
${numDuration}-SECOND TIMELINE: ${timelineGuide}
${scenesGuide}
CAMERA & CINEMATOGRAPHY: Use professional cinema camera settings, shallow depth of field for product shots, tracking shots for cleaning action.
LIGHTING & COLOR: Transition from neutral, low-contrast kitchen lighting to high-contrast, bright, saturated, refreshing clean kitchen lighting.
PRODUCT PRESERVATION: Maintain exact bottle shape, logo placement, and liquid viscosity. No morphing.
${langConfig.header}: ${langConfig.script}
MUSIC: Upbeat, rhythmic, fresh acoustic pop.
SOUND DESIGN: Clean, crisp, and high-fidelity SFX (pouring, bubbling, water rinse, chime).
FINAL BRAND PAYOFF: Hero shot with bright lemons and water splash.
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
      temperature: 0.35
    });

    let outputText = result.text || '';

    // Extract product name if possible
    let productName = 'Hero Product';
    const match = outputText.match(/commercial for '([^']+)'/i) ||
                  outputText.match(/commercial for "([^"]+)"/i) ||
                  outputText.match(/showcasing [^.]*? of\s*([^\n\r.]+)/i) ||
                  outputText.match(/preservation of\s*([^\n\r,]+)/i) ||
                  outputText.match(/CONCEPT:\s*[^.]*?for\s*([^\n\r.]+)/i) ||
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
