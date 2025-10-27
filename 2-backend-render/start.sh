#!/usr/bin/env bash
echo "🚀 Starting AfyaLink Backend..."

# Run pending Prisma migrations (safe for production)
npx prisma migrate deploy

# Start compiled Node.js server
node dist/server.js
