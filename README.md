# Kanova

**Kanova** is a prompt-generation website for:
- Text prompts (creators / developers / interview / business)
- AI photo prompts (Instagram/YT/branding etc.)

## Setup

1) Install dependencies
```bash
npm install
```

2) Create env file
```bash
cp .env.example .env.local
```
Edit `.env.local` and set `OPENAI_API_KEY`.

3) Run locally
```bash
npm run dev
```
Open http://localhost:3000

## Deploy (Vercel)

- Push to GitHub
- Import in Vercel
- Add env vars in Vercel project settings:
  - `OPENAI_API_KEY`
  - `OPENAI_MODEL` (optional)
  - `OPENAI_MAX_OUTPUT_TOKENS` (optional)

## Notes

- Your API key is used ONLY server-side (Next.js route handler).
- Saved prompts are stored in the browser (localStorage) for now.
