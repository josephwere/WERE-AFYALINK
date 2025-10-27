# AfyaLink Frontend — Vercel-ready (TypeScript, Next.js 14)

This package is a Vercel-ready Next.js 14 frontend configured with:
- TypeScript (includes @types/react & @types/node)
- Tailwind CSS (configs included)
- Mock API endpoints at `/api/ai` and `/api/patients`
- NeuroEdge AI mock chat UI
- Login/Register pages that store session locally (demo)

## Quick start

```bash
npm install
npm run dev
# build
npm run build
```

Set environment variables (optional):
- `NEXT_PUBLIC_API_URL` — your backend base URL
- `NEXT_PUBLIC_AI_API_URL` — AI service base URL
