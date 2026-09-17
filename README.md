# CineFlow AI — AI Commercial Director 🎬

Turn one product image into a cinematic 10-second television commercial campaign for **ChatGPT**, **Google Flow**, and **Google Veo**.

---

## 🚀 Features

- **8-Stage AI Commercial Pipeline:**
  1. Upload Product Image (Locks packaging geometry & branding DNA as immutable ground truth)
  2. Gemini Multimodal Analysis & ChatGPT Master Storyboard Prompt Formulation
  3. Generate 4-Panel Sequential Storyboard in ChatGPT
  4. Upload Storyboard Image Reference
  5. Multi-panel trajectory & timing analysis (0.0s - 10.0s timeline breakdown)
  6. Final unified production prompt for Google Flow & Google Veo with camera movements, sound design, and **Bengali Voiceover (বাংলা ভয়েসওভার)**.
- **Dual API Key Hierarchy:**
  - **Server Key:** Set `GEMINI_API_KEY` in Vercel Environment Variables to provide automatic AI access for all users.
  - **Client Key Fallback:** If no server key exists (or quota runs out), users can click **"Connect API"** in the header to use their own free Google Gemini API key.
- **Vercel & GitHub Ready:** Native Serverless Functions (`/api/*`) with zero build steps or heavy dependencies.

---

## 💻 Local Development

1. **Clone or open the project folder:**
   ```bash
   cd "New folder (2)"
   ```

2. **(Optional) Configure environment variables:**
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   Add your Gemini API key:
   ```env
   GEMINI_API_KEY=AIzaSy...
   ```

3. **Start the local server:**
   ```bash
   npm start
   # or
   node server.js
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser!

---

## 🌐 Deploy to Vercel (Step-by-Step)

### Step 1: Push to GitHub
In your project directory:
```bash
git init
git add .
git commit -m "Initial commit - CineFlow AI Studio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Import into Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
2. Select your GitHub repository.
3. Keep default settings (Framework Preset: **Other**, Root Directory: `./`).
4. **Environment Variables (Optional):**
   - Key: `GEMINI_API_KEY`
   - Value: `your_gemini_api_key`
5. Click **"Deploy"**!
6. Your app is live with global CDN speed and serverless API endpoints!

---

## 📡 API Endpoints

- `GET  /api/health` — Checks service health & server key status (`{ hasServerKey: boolean }`).
- `POST /api/test-key` — Validates user's Gemini API key (`{ success: true }`).
- `POST /api/analyze-product` — Analyzes product image and returns Master Commercial Storyboard Prompt.
- `POST /api/analyze-storyboard` — Analyzes storyboard panels and returns 10s Google Flow / Veo commercial prompt.

---

## 🛡️ Tech Stack
- **Frontend:** React 18, Tailwind CSS, Lucide Icons, Cyber Neon Matrix Theme.
- **Backend:** Node.js Vercel Serverless Functions (`/api/*`), native Gemini REST API.
- **AI Models:** Google Gemini 2.5 Flash / 2.0 Flash / 1.5 Flash (with auto-fallback).
