# 🚀 AfyaLink Deployment Guide (Vercel + Render)

This document explains how to deploy the frontend to **Vercel** and the backend to **Render**. It also covers connecting the PostgreSQL database (local or cloud).

## Frontend — Vercel (Next.js)
1. Go to https://vercel.com/new and import the repository `https://github.com/GoldEdgeLabs/AfyaLink`.
2. Ensure the project root path points to `1_Frontend`.
3. Set Environment Variables (in Vercel Dashboard):
   - `NEXT_PUBLIC_API_URL` = `https://<your-backend-render-url>` (or use the production variable)
4. Build & Deploy — Vercel will auto-detect Next.js and build the app.

## Backend — Render (Node.js + Prisma)
1. Create a new Web Service on Render (https://render.com).
2. Connect your repo and set the root to `2_Backend` (or upload the prepared ZIP).
3. Use the following build & start commands:
   - Build Command: `npm install && npx prisma generate && npm run build`
   - Start Command: `bash ./start.sh`
4. Add environment variables in Render Dashboard:
   - `DATABASE_URL` = `postgresql://<USER>:<PASS>@<HOST>:5432/<DB>?sslmode=require`
   - `JWT_SECRET`, `SMTP_EMAIL`, `SMTP_PASSWORD`, `PORT=4000`
5. Deploy — on first start `start.sh` will run migrations and seed the DB.

## Database (Cloud)
We recommend **Neon.tech** or **Supabase** for production Postgres. Set `DATABASE_URL` accordingly with SSL required.

## Notes
- Monitor logs on Render and Vercel dashboards.
- Use Render's secrets for sensitive envs.


© 2025 GoldEdge Labs — All Rights Reserved
🌐 www.goldedgelabs.africa | 📧 support@goldedgelabs.com
