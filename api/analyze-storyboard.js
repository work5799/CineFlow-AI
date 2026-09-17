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

The output must be a single, cohesive, copy-ready prompt formatted for Google Flow and Google Veo with second-by-second timeline precision, camera moves, lighting, ${langLabel} voiceover script, and sound design.`;

  const userPrompt = `Analyze the uploaded commercial storyboard for "${productName}".
Identify the sequential panels, camera trajectories, lighting, and pacing.

Now, construct the UNIFIED ${chosenDuration}-SECOND MASTER COMMERCIAL PROMPT FOR GOOGLE FLOW / GOOGLE VEO with ${langLabel} voiceover script.

Follow this standard production format:

# 🎥 CINEFLOW AI — UNIFIED ${chosenDuration}.0s MASTER COMMERCIAL PROMPT (GOOGLE FLOW & VEO)
**Campaign Title:** [High-Impact TVC Title]
**Product:** ${productName}
**Duration:** Exactly ${chosenDuration}.0 Seconds (Broadcast Television & Digital Ad Standard)
**Aspect Ratio:** 16:9 Cinema Scope / 4K UHD
**Render Engine:** Google Veo 2 / Google Flow Cinematic Engine
**Voiceover Language:** ${langLabel}

---

### 📋 COPY DIRECTLY INTO GOOGLE FLOW / VEO:

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

    const outputText = result.text;

    // Detect panel count
    let panelsIdentified = 4;
    const panelMatches = outputText.match(/PANEL\s*\d|⏱️\s*\d+\.\d+s/gi);
    if (panelMatches && panelMatches.length >= 3) {
      panelsIdentified = Math.min(panelMatches.length, 6);
    }

    return res.status(200).json({
      success: true,
      data: {
        panelsIdentified,
        videoMasterPrompt: outputText
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
