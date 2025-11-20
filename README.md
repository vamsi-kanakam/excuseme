# Excuse Me - AI Powered Excuse Generator

[Live demo]: (https://vamsi-kanakam.github.io/excuseme/)

## Deployment

### Frontend (GitHub Pages)

1. Push `index.html`, `styles.css`, `script.js` to `main` branch
2. Enable GitHub Pages in repo settings
3. Deploy from `main` branch root

### Backend (Vercel)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project root
3. Add environment variable: `GEMINI_API_KEY` in Vercel dashboard
4. Update `script.js` line 52 with your deployed Vercel URL
5. Redeploy: `vercel --prod`

## Local Development

```bash
npm install
npm start
```

Open `http://localhost:3000`

## Environment Variables

- `GEMINI_API_KEY` - Get from https://aistudio.google.com/app/apikey
