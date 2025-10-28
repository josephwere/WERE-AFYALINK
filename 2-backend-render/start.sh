#!/usr/bin/env bash
set -e

echo "🚀 Starting AfyaLink Backend..."

# Load environment variables
if [ -f .env ]; then
  echo "✅ Loaded environment variables from .env"
else
  echo "⚠️ No .env file found, using Render environment variables"
fi

# Run Prisma migrations
echo "🔄 Running Prisma migrations..."
npx prisma migrate deploy

# Wait for database connection
echo "🧩 Checking database connection..."
npx prisma db pull >/dev/null 2>&1 && echo "✅ Database is reachable" || {
  echo "❌ Database connection failed!"
  echo "Please verify DATABASE_URL or network connectivity."
  exit 1
}

# Generate Prisma client
echo "⚙️ Generating Prisma client..."
npx prisma generate

# Start the Node server
echo "🚀 Launching Node.js server..."
node dist/server.js
