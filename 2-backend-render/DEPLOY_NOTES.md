
Render-Ready setup notes
------------------------
- This project includes Prisma. Ensure you set the DATABASE_URL environment variable on Render.
- Render will run `npm install` and then `npm run build` (because of postinstall prisma generate).
- After install, prisma will generate the Prisma client during postinstall.
- If you use migrations, run them manually or via a Render Deploy Hook.

Suggested environment variables on Render:
- DATABASE_URL
- NODE_ENV=production
- JWT_SECRET
- EMAIL_USER
- EMAIL_PASS
