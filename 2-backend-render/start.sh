#!/usr/bin/env bash
echo "🚀 Starting AfyaLink Backend..."
# Ensure Prisma client is generated and run migrations (safe for production)
npx prisma migrate deploy --preview-feature || true
node dist/server.js
