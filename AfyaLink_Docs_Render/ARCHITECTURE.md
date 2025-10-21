# 🧱 Architecture — AfyaLink (Vercel + Render + PostgreSQL)

AfyaLink uses a hybrid architecture optimized for offline-first healthcare scenarios.

## Deployment Diagram
```
           ┌────────────────────────────┐
           │        Frontend (Vercel)   │
           │  Next.js + Tailwind + PWA  │
           └──────────────┬─────────────┘
                          │ HTTPS / REST
                          ▼
           ┌────────────────────────────┐
           │      Backend (Render)      │
           │ Node.js + Express + Prisma │
           │ JWT + 2FA + API Layer      │
           └──────────────┬─────────────┘
                          │ Prisma ORM
                          ▼
           ┌────────────────────────────┐
           │     PostgreSQL Database    │
           │  Local / Supabase / Neon   │
           └────────────────────────────┘
```

## Notes
- Backend runs migrations on startup (`start.sh`).
- Frontend communicates with backend via `NEXT_PUBLIC_API_URL`.


© 2025 GoldEdge Labs — All Rights Reserved
🌐 www.goldedgelabs.africa | 📧 support@goldedgelabs.com
