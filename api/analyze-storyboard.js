/**
 * POST /api/analyze-storyboard
 * Analyzes the ChatGPT-generated storyboard image alongside the original product image,
 * and generates the complete, unified 10.0-Second Video Commercial Prompt for Google Flow & Google Veo.
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
    storyboardBase64,
    storyboardMimeType = 'image/png',
    productBase64,
    productMimeType = 'image/jpeg',
    productName = 'Hero Product',
    duration = 10,
    language = 'bangla'
  } = req.body || {};

  if (!storyboardBase64) {
    return res.status(400).json({
      success: false,
      error: 'Missing storyboard image. Please upload your generated storyboard first.'
    });
  }

  const rawStoryboard = cleanBase64(storyboardBase64);
  const rawProduct = productBase64 ? cleanBase64(productBase64) : null;

  const validDurations = [10, 25, 30];
  const chosenDuration = validDurations.includes(Number(duration)) ? Number(duration) : 10;
  const chosenLanguage = ['bangla', 'english', 'hindi'].includes(String(language).toLowerCase())
    ? String(language).toLowerCase()
    : 'bangla';

  const langLabel = chosenLanguage === 'bangla' ? 'বাংলা' : chosenLanguage === 'english' ? 'English' : 'हिंदी';

  const systemInstruction = `You are CineFlow AI, an elite Commercial Film Director and AI Video Commercial Architect specializing in Google Flow, Google Veo, and cinematic video synthesis.
Your mission is to take an uploaded multi-panel commercial storyboard (and hero product reference) and craft the final, unified ${chosenDuration}.0-second television commercial production prompt.

Target Duration: Exactly ${chosenDuration}.0 Seconds
Target Language: ${langLabel}

CRITICAL FORMATTING RULES:
1. STRICTLY DO NOT output any campaign title, product metadata headers, aspect ratio, render engine specs, markdown hashes (#, ##, ###), bold asterisks (**), or horizontal dividers (---).
2. DO NOT include "COPY DIRECTLY INTO GOOGLE FLOW / VEO" or any preliminary chatter.
3. Start IMMEDIATELY with the scene directive and timeline breakdown.
4. Output must be 100% clean, copy-ready plain text for direct use in Google Flow and Google Veo.`;

  const userPrompt = `Analyze the uploaded commercial storyboard for "${productName}".
Identify the sequential panels, camera trajectories, lighting, and pacing.

Now, construct the pure, clean UNIFIED ${chosenDuration}-SECOND VIDEO COMMERCIAL PROMPT FOR GOOGLE FLOW / GOOGLE VEO with ${langLabel} voiceover script.

STRICT RULE: Do NOT include any campaign title, metadata header, or dividers. Start directly with:

[SCENE DIRECTIVE: ${chosenDuration}.0-SECOND CONTINUOUS TELEVISION COMMERCIAL]
Cinematic television commercial for "${productName}". Hyper-realistic 8K broadcast quality, shot on Arri Alexa 65 with 35mm anamorphic lens, f/1.8 shallow depth of field, photorealistic reflections, natural motion blur.

[TIMELINE BREAKDOWN]:
(Provide exact second-by-second scene breakdown covering 0.0s to ${chosenDuration}.0s, with Visual & Motion, Camera, Voiceover (${langLabel}), and Sound Design for each scene)

[GLOBAL RENDER PARAMETERS]:
Color Grade: High-contrast luxury commercial grade, vibrant saturation, deep blacks, anamorphic bokeh, broadcast TV master quality. No morphing, flawless packaging consistency with reference.`;

  try {
    const parts = [
      { text: userPrompt },
      {
        inline_data: {
          mime_type: storyboardMimeType,
          data: rawStoryboard
        }
      }
    ];

    if (rawProduct) {
      parts.push({
        inline_data: {
          mime_type: productMimeType,
          data: rawProduct
        }
      });
    }

    const contents = [{ parts }];

    const result = await callGemini({
      apiKey,
      contents,
      systemInstruction,
      temperature: 0.35
    });

    let cleanPrompt = (result.text || '')
      .replace(/^#+\s*🎥.*$/gm, '')
      .replace(/^\*\*Campaign Title:\*\*.*$/gm, '')
      .replace(/^\*\*Product:\*\*.*$/gm, '')
      .replace(/^\*\*Duration:\*\*.*$/gm, '')
      .replace(/^\*\*Aspect Ratio:\*\*.*$/gm, '')
      .replace(/^\*\*Render Engine:\*\*.*$/gm, '')
      .replace(/^\*\*Voiceover Language:\*\*.*$/gm, '')
      .replace(/^#+\s*📋\s*COPY DIRECTLY.*$/gim, '')
      .replace(/^#+\s*/gm, '')     // Remove heading hashes (#, ##, ###)
      .replace(/\*\*/g, '')        // Remove bold asterisks (**)
      .replace(/^---+\s*$/gm, '')  // Remove horizontal rule lines (---)
      .trim();

    // Detect panel count
    let panelsIdentified = 4;
    const panelMatches = cleanPrompt.match(/PANEL\s*\d|⏱️\s*\d+\.\d+s|SCENE\s*\d/gi);
    if (panelMatches && panelMatches.length >= 3) {
      panelsIdentified = Math.min(panelMatches.length, 6);
    }

    return res.status(200).json({
      success: true,
      data: {
        panelsIdentified,
        videoMasterPrompt: cleanPrompt
      }
    });
  } catch (err) {
    console.error('Storyboard Analysis Error:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Failed to analyze storyboard.'
    });
  }
};
