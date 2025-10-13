# AI Community Hub — v2 Final (Profit-Ready Edition)

Ready-to-upload Next.js project optimized for growth, monetization, and community engagement.

## Highlights
- Next.js + Tailwind modern UI (purple & neon)
- PWA-ready (manifest + service worker)
- Matrix (Element) chat embed (semi-public strategy)
- AI blog generator supporting OPENAI_API_KEY and HF_TOKEN
- GitHub Actions workflow to auto-run blog generator weekly and push generated posts
- Welcome video placeholder on homepage

## Quick start (local)
1. Unzip and `cd` into the folder
2. `npm install`
3. `npm run dev`

## Deployment
1. Create a new GitHub repo and upload the folder contents (not the parent folder).
2. In the repo settings, enable GitHub Actions (default enabled).
3. Import the repo to Vercel to deploy (Vercel detects Next.js automatically).
4. (Optional) Set environment variables in Vercel or GitHub Actions:
   - OPENAI_API_KEY (optional, for OpenAI generation)
   - HF_TOKEN (optional, for Hugging Face fallback)
   - MATRIX_ROOM_URL (optional, your Matrix room if you want your own)
