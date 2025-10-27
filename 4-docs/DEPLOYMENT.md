# Deployment Guide (Global Edition)

## Frontend (Vercel)
1. Import repo: https://github.com/josephwere/WERE-AFYALINK
2. Set Root Directory: `1-frontend-next`
3. Build Command: `npm run build`
4. Output Directory: (Next.js automatic)
5. Add Environment Variables: `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_AI_API_URL`
6. Deploy.

## Backend (Render)
1. Create new Web Service on Render, connect repo https://github.com/josephwere/WERE-AFYALINK.git.
2. Set Root Directory: `2-backend`.
3. Build Command: `npm install`
4. Start Command: `npm run start`
5. Add Environment Variables from `2-backend/.env.example`.
6. Deploy and verify `/health` endpoint.
