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
npx prisma migrate deploy || true

# 🕒 Wait for database to wake up
MAX_RETRIES=5
RETRY_DELAY=10

for ((i=1; i<=MAX_RETRIES; i++)); do
  echo "🧩 Checking database connection... (Attempt $i of $MAX_RETRIES)"
  if npx prisma db pull >/dev/null 2>&1; then
    echo "✅ Database is reachable!"
    break
  else
    echo "⚠️ Database not reachable yet. Retrying in ${RETRY_DELAY}s..."
    sleep $RETRY_DELAY
  fi
  if [ "$i" -eq "$MAX_RETRIES" ]; then
    echo "❌ Database connection failed after ${MAX_RETRIES} attempts!"
    exit 1
  fi
done

# Generate Prisma client
echo "⚙️ Generating Prisma client..."
npx prisma generate

# Start the Node server
echo "🚀 Launching Node.js server..."
node dist/server.js
