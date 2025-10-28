#!/usr/bin/env bash
set -e

echo "🚀 Starting AfyaLink Backend..."

# Load environment variables
export NODE_ENV=production

# Show current Node and npm versions
echo "🧩 Node version: $(node -v)"
echo "📦 NPM version: $(npm -v)"

# Check Prisma version
npx prisma --version || echo "⚠️ Prisma not found, attempting to install..."
npm install @prisma/client prisma --save

# Show database host (safe for logs)
if [[ -n "$DATABASE_URL" ]]; then
  echo "🌐 Using database host: $(node -e "console.log(new URL(process.env.DATABASE_URL).host)")"
else
  echo "⚠️ DATABASE_URL is not set!"
fi

echo "🔄 Running Prisma generate..."
npx prisma generate

echo "🧱 Running Prisma migrations..."
npx prisma migrate deploy || echo "⚠️ Migration deploy failed, continuing anyway..."

# Small delay to ensure DB is fully ready (Render DBs can take a few seconds)
echo "⏳ Waiting for database readiness..."
sleep 5

# Finally start your compiled server
echo "🚀 Starting Node server..."
node dist/server.js
