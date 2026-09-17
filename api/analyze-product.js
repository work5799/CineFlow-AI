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
      scenesCount: '5 Scenes',
      timelineGuide: `00:00-00:02 - SCENE 01: [Close-up / hook on problem or dramatic macro product angle]
00:02-00:04 - SCENE 02: [Pouring / applying rich product texture from signature container with cap details]
00:04-00:06 - SCENE 03: [Microscopic fiber/surface transformation with energetic light bursting through challenge]
00:06-00:08 - SCENE 04: [Protagonist holding dazzlingly clean/perfect result with a confident smile]
00:08-00:10 - SCENE 05: [Hero packshot of product container on clean pedestal with brand logo and tagline]`
    },
    25: {
      label: '25-SECOND',
      scenesCount: '8 Scenes',
      timelineGuide: `00:00-00:03 - SCENE 01: [Cinematic hook / relatable everyday problem or challenge]
00:03-00:06 - SCENE 02: [Protagonist facing dilemma with ordinary ineffective products]
00:06-00:09 - SCENE 03: [Hero product revelation bathed in pristine commercial illumination]
00:09-00:12 - SCENE 04: [Dynamic product application / sensory pour / rich texture in motion]
00:12-00:16 - SCENE 05: [Microscopic science / active ingredient efficacy & rapid transformation]
00:16-00:19 - SCENE 06: [Emotional breakthrough & visible radiant transformation]
00:19-00:22 - SCENE 07: [Social confidence / family admiration in an aspirational lifestyle setting]
00:22-00:25 - SCENE 08: [Grand hero pedestal packshot & memorable closing brand call-to-action]`
    },
    30: {
      label: '30-SECOND',
      scenesCount: '9 Scenes',
      timelineGuide: `00:00-00:03 - SCENE 01: [Cinematic atmospheric opening hook establishing relatable context]
00:03-00:06 - SCENE 02: [Protagonist facing everyday dilemma with expressive empathy]
00:06-00:09 - SCENE 03: [Hero product revelation bathed in cinematic light and volumetric atmosphere]
00:09-00:13 - SCENE 04: [Sensory macro interaction / texture / pour / unboxing]
00:13-00:17 - SCENE 05: [Advanced visual demonstration of formula / active technology in high-speed 120fps]
00:17-00:21 - SCENE 06: [Instant visible transformation & radiant protagonist satisfaction]
00:21-00:24 - SCENE 07: [Aspirational lifestyle celebration / family joy and admiration]
00:24-00:27 - SCENE 08: [Secondary product feature or ergonomic packaging spotlight]
00:27-00:30 - SCENE 09: [Grand broadcast hero packshot with sonic brand lock & final tagline]`
    }
  }[chosenDuration];

  const langConfig = {
    bangla: {
      header: 'BANGLA VOICEOVER',
      instruction: 'Write authentic, natural, persuasive voiceover lines in fluent Bengali script (বাংলা লিপি) tailored for Bangladeshi broadcast television.',
      exampleLines: chosenDuration === 10
        ? `00:00-00:03: 'কাপড়ের জেদি দাগ আর মলিনতা নিয়ে চিন্তা?'\n00:03-00:07: 'ট্রাই করুন প্রটেক্ট লিকুইড ডিটারজেন্ট, যা বাড়ায় দ্বিগুণ উজ্জ্বলতা!'\n00:07-00:10: 'প্রটেক্ট – কাপড়ের উজ্জ্বলতায় সেরা সুরক্ষা!'`
        : chosenDuration === 25
        ? `00:00-00:06: 'প্রতিদিনের জেদি দাগ কি আপনার প্রিয় পোশাকের উজ্জ্বলতা কেড়ে নিচ্ছে?'\n00:06-00:16: 'এবার নিয়ে এলো বিশেষ ফর্মুলা যা গভীরে গিয়ে দাগ দূর করে ও ফাইবার রাখে সুরক্ষিত।'\n00:16-00:25: 'প্রতিটি ওয়াশে পান নতুনের মতো উজ্জ্বলতা আর নিশ্চিন্ত সেরা সুরক্ষা!'`
        : `00:00-00:06: 'কঠিন দাগ আর মলিন কাপড় কি আপনার আত্মবিশ্বাস ম্লান করে দিচ্ছে?'\n00:06-00:17: 'এখনই বেছে নিন উন্নত পাওয়ার ফর্মুলা—যা দেয় নিমিষেই নিখুঁত পরিচ্ছন্নতা ও অনন্য উজ্জ্বলতা।'\n00:17-00:30: 'আজই ট্রাই করুন – পোশাকে আনুন নতুনের চমক ও সেরা সুরক্ষা!'`,
      taglineGuidance: 'The tagline in FINAL BRAND PAYOFF must be in authentic Bengali script (e.g. \'কাপড়ের উজ্জ্বলতায় সেরা সুরক্ষা!\').'
    },
    english: {
      header: 'ENGLISH VOICEOVER',
      instruction: 'Write crisp, sleek, high-impact commercial voiceover lines in polished English suitable for international broadcast television commercials.',
      exampleLines: chosenDuration === 10
        ? `00:00-00:03: 'Tired of stubborn stains and dull fabrics?'\n00:03-00:07: 'Experience advanced active formula, engineered for instant brilliant brightness!'\n00:07-00:10: 'Ultimate brightness, uncompromising protection!'`
        : chosenDuration === 25
        ? `00:00-00:06: 'Are everyday stubborn stains and wear dimming your favorite fabrics?'\n00:06-00:16: 'Discover the advanced active formulation that penetrates deep to restore original radiance.'\n00:16-00:25: 'Pure brilliance in every drop. Elevate your everyday standard.'`
        : `00:00-00:06: 'Don\'t let tough stains compromise your signature look.'\n00:06-00:17: 'Step up to precision performance, crafted to deliver flawless, instantaneous perfection.'\n00:17-00:30: 'The ultimate gold standard in radiant brightness and fiber protection.'`,
      taglineGuidance: 'The tagline in FINAL BRAND PAYOFF must be in polished English.'
    },
    hindi: {
      header: 'HINDI VOICEOVER',
      instruction: 'Write high-energy, memorable, emotive commercial voiceover lines in authentic Hindi script (हिंदी देवनागरी लिपि) suitable for Indian television commercials.',
      exampleLines: chosenDuration === 10
        ? `00:00-00:03: 'कपड़ों के जिद्दी दाग और फीकेपन से हैं परेशान?'\n00:03-00:07: 'अपनाएं एडवांस एक्टिव फॉर्मूला, जो लाए दोगुनी चमक और नया निखार!'\n00:07-00:10: 'कपड़ों की चमक में सबसे भरोसेमंद सुरक्षा!'`
        : chosenDuration === 25
        ? `00:00-00:06: 'क्या कपड़ों के पुराने दाग और फीकापन छीन रहे हैं आपकी चमक?'\n00:06-00:16: 'अब आ गया है पॉवरफुल फॉर्मूला—जो रेशों में समाकर दे बेदाग सफाई और नया अहसास।'\n00:16-00:25: 'हर धुलाई में चमके नया सा! अपनाएं बेहतरीन सुरक्षा।'`
        : `00:00-00:06: 'जिद्दी दागों से समझौता क्यों? जब आपके पास हो सबसे असरदार समाधान।'\n00:06-00:17: 'पेश है एक्टिव फॉर्मूला—जो चुटकियों में दे असली चमक और ताजगी।'\n00:17-00:30: 'आज ही अपनाएं – चमक ऐसी, जो हर किसी का दिल जीत ले!'`,
      taglineGuidance: 'The tagline in FINAL BRAND PAYOFF must be in authentic Hindi script (हिंदी).'
    }
  }[chosenLanguage];

  const systemInstruction = `You are CineFlow AI, an elite Television Commercial Creative Director and Principal Cinematographer.
Your job is to examine an uploaded hero product image, extract its visual DNA (packaging geometry, branding, typography, color palette, material textures) as IMMUTABLE GROUND TRUTH, and formulate a high-impact television commercial campaign.

Target Specifications:
- Duration: ${chosenDuration} seconds (${durationConfig.scenesCount})
- Voiceover Language: ${chosenLanguage.toUpperCase()} (${langConfig.header})

CRITICAL FORMATTING RULES:
1. STRICTLY DO NOT output any markdown header symbols (#, ##, ###), bold asterisks (**), italics (*), or horizontal dividers (---).
2. Output pure, clean, beautifully structured plain text using UPPERCASE SECTION HEADERS exactly as specified.
3. Every scene and voiceover line must match the exact time intervals of ${chosenDuration} seconds.
4. Output must be 100% copy-ready for direct use in ChatGPT, Midjourney, Google Flow, and Google Veo without requiring any cleanup.`;

  const userPrompt = `Analyze this hero product image with extreme precision and write the copy-ready ${chosenDuration}-Second Commercial Master Prompt.

Follow this EXACT structure:

MASTER COMMERCIAL CONCEPT
[1-2 sentence high-impact concept describing duration, product category, and commercial hook]

${durationConfig.label} TIMELINE
${durationConfig.timelineGuide}

CAMERA & CINEMATOGRAPHY
High-speed macro shots, crisp focus, smooth 35mm cinema lens sweeps.

LIGHTING & COLOR
[Clean commercial lighting, exact color palette matching product colors and mood, glowing highlights]

PRODUCT PRESERVATION
Exact preservation of [Product Name] bottle/container shape, colors, cap style, logo typography, and label text from the reference image.

${langConfig.header}
${langConfig.exampleLines}

MUSIC
[Upbeat acoustic-pop build to energetic resolution, or modern cinematic swell]

SOUND DESIGN
[Liquid pour/unboxing SFX, dynamic riser, magic bloom chime, sonic brand lock]

FINAL BRAND PAYOFF
[Hero packshot details with tagline on screen: ${langConfig.taglineGuidance}]

FINAL QUALITY
Ultra-realistic 8K commercial production, cinematic broadcast quality.`;

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
    const match = outputText.match(/preservation of\s*([^\n\r,]+)/i) ||
                  outputText.match(/for:\s*([^\n\r.]+)/i) ||
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
