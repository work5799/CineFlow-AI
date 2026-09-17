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
    productName = 'Hero Product'
  } = req.body || {};

  if (!storyboardBase64) {
    return res.status(400).json({
      success: false,
      error: 'Missing storyboard image. Please upload your generated storyboard first.'
    });
  }

  const rawStoryboard = cleanBase64(storyboardBase64);
  const rawProduct = productBase64 ? cleanBase64(productBase64) : null;

  const systemInstruction = `You are CineFlow AI, an elite Commercial Film Director and AI Video Commercial Architect specializing in Google Flow, Google Veo, and cinematic video synthesis.
Your mission is to take an uploaded multi-panel commercial storyboard (and hero product reference) and craft the final, unified 10.0-second television commercial production prompt.

The output must be a single, cohesive, copy-ready prompt formatted for Google Flow and Google Veo with second-by-second timeline precision, camera moves, lighting, Bengali voiceover script, and sound design.`;

  const userPrompt = `Analyze the uploaded commercial storyboard for "${productName}".
Identify the sequential panels, camera trajectories, lighting, and pacing.

Now, construct the UNIFIED 10-SECOND MASTER COMMERCIAL PROMPT FOR GOOGLE FLOW / GOOGLE VEO.

Follow this standard production format:

# 🎥 CINEFLOW AI — UNIFIED 10.0s MASTER COMMERCIAL PROMPT (GOOGLE FLOW & VEO)
**Campaign Title:** [High-Impact TVC Title]
**Product:** ${productName}
**Duration:** Exactly 10.0 Seconds (Broadcast Television & Digital Ad Standard)
**Aspect Ratio:** 16:9 Cinema Scope / 4K UHD
**Render Engine:** Google Veo 2 / Google Flow Cinematic Engine

---

### 📋 COPY DIRECTLY INTO GOOGLE FLOW / VEO:

[SCENE DIRECTIVE: 10.0-SECOND CONTINUOUS TELEVISION COMMERCIAL]
Cinematic television commercial for "${productName}". Hyper-realistic 8K broadcast quality, shot on Arri Alexa 65 with 35mm anamorphic lens, f/1.8 shallow depth of field, photorealistic reflections, natural motion blur.

[TIMELINE BREAKDOWN]:

⏱️ 0.0s - 2.5s — THE CINEMATIC HOOK
- Visual & Motion: Macro extreme close-up of ${productName}. Dramatic lighting sweeps across the packaging, highlighting the texture and brand identity. Slow cinematic dolly-in with rising atmospheric particles.
- Camera: Low-angle tracking push-in at 60fps.
- Voiceover (বাংলা): "[Persuasive Bengali hook line introducing freshness/quality - e.g. এক নতুন সজীবতার ছোঁয়া...]"
- Sound Design: Deep sub-bass riser, subtle atmospheric shimmer, crisp macro acoustic textures.

⏱️ 2.5s - 5.0s — DYNAMIC ACTION & INGREDIENT DYNAMICS
- Visual & Motion: Rapid, seamless camera transition into dynamic product motion. Ingredients or refreshing droplets surge around the hero container in high-speed 120fps slow-motion capture.
- Camera: 45-degree whip-pan transition into smooth rotational orbit.
- Voiceover (বাংলা): "[Sensory product benefit line - e.g. প্রতিটি মুহূর্তে অনুভব করুন খাঁটি বিশুদ্ধতা ও আভিজাত্য...]"
- Sound Design: Dynamic whoosh sweep, crisp liquid splash / acoustic hit, upbeat rhythmic commercial pulse.

⏱️ 5.0s - 7.5s — HERO SPOTLIGHT & SENSORY REVELATION
- Visual & Motion: ${productName} commands the center stage, bathed in warm cinematic rim light and studio softbox illumination. Flawless condensation and metallic/matte sheen on the label.
- Camera: Slow-motion gliding pan, tracking across the surface geometry with organic camera breathing.
- Voiceover (বাংলা): "[Emotional payoff line - e.g. যা আপনার প্রতিদিনকে করে তোলে অনন্য ও সতেজ...]"
- Sound Design: Uplifting harmonic brass swell, warm resonant chords, satisfying acoustic click.

⏱️ 7.5s - 10.0s — THE BROADCAST PAYOFF & LOGO RESOLUTION
- Visual & Motion: Majestic hero lock-off shot on pristine obsidian pedestal. Radiant soft neon aura framing the product. Crisp broadcast logo resolution with tagline.
- Camera: Gentle pull-back to wide commercial composition, rock-steady hold.
- Voiceover (বাংলা): "[Memorable brand tagline - e.g. ${productName} — আপনার পছন্দের নির্ভরযোগ্য সঙ্গী।] "
- Sound Design: Signature 3-note broadcast brand mnemonic chime, gentle acoustic fade-out.

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
