# DEPLOYMENT_OVERVIEW — Quick Summary

## Frontend (Vercel)
- Path: `1_Frontend`
- Framework: Next.js
- Important env: `NEXT_PUBLIC_API_URL`
- Deploy via Vercel import or GitHub integration.

## Backend (Render)
- Path: `2_Backend`
- Runtime: Node.js, Docker optional
- Important envs: `DATABASE_URL`, `JWT_SECRET`, `SMTP_EMAIL`
- Uses `start.sh` to run migrations + seed before starting.

## Database
- Local: Docker Compose (see `1_Database/docker-compose.yml`)
- Cloud: Neon / Supabase — update `DATABASE_URL` with `?sslmode=require`

## Quick Checklist
- [ ] Configure envs on Vercel & Render
- [ ] Ensure Prisma migrations have run
- [ ] Seed admin user (email: josephogwe8@gmail.com)


© 2025 GoldEdge Labs — All Rights Reserved
🌐 www.goldedgelabs.africa | 📧 support@goldedgelabs.com
