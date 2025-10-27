#!/usr/bin/env bash
echo "🚀 Starting AfyaLink Backend..."
npx prisma migrate deploy
node dist/server.js
