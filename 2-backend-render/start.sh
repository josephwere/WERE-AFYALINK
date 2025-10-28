#!/usr/bin/env bash
echo "🚀 Starting AfyaLink Backend..."
echo "🔄 Running Prisma migrations..."
npx prisma migrate deploy || true

echo "🧩 Starting Node server..."
node dist/server.js
