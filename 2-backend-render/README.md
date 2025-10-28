# AfyaLink Backend (Template)
This is a fresh TypeScript + Express + Prisma backend template arranged for Render.

## How to deploy on Render
1. Push this `backend/` folder to your GitHub repo (or place this repo root as Render root).
2. Ensure `render.yaml` is at the same level as `package.json` (here it's inside `backend/` as requested).
3. On Render, create a new Web Service from this repo. Render will run the build commands in `render.yaml`.
4. Set environment variables on Render dashboard:
   - DATABASE_URL (Postgres connection string)
   - JWT_SECRET
   - NODE_ENV=production
   - PORT (optional)
5. Deploy.

## Notes
- Render runs `npm install` which will install the dependencies and devDependencies, then `prisma generate`.
- You should replace default secrets before going to production.
