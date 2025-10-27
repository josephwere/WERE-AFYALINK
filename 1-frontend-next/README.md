# AfyaLink Frontend (Next.js) — Global Edition

This Next.js app is a drop-in replacement for the previous Vite frontend and is optimized for deployment on Vercel.

## Features
- App Router (Next.js) structure
- NeuroEdge AI placeholder (mock mode)
- Login / Register UI (local-only, stores user in localStorage)
- Dashboard with demo data and rotating cards
- Tailwind CSS setup

## Local dev
```bash
cd 1-frontend-next
npm install
npm run dev
```

Set environment variables in `.env.local`:
```
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
NEXT_PUBLIC_AI_API_URL=https://your-backend.onrender.com
```
