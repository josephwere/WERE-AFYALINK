#!/usr/bin/env bash
set -e

echo "Running database migrations..."
if command -v npx >/dev/null 2>&1; then
  npx prisma migrate deploy || true
fi

echo "Seeding database (if seed script exists)..."
if [ -f prisma/seed.ts ]; then
  # Try to run seed with ts-node; fallback to node if compiled
  if command -v npx >/dev/null 2>&1; then
    npx ts-node prisma/seed.ts || true
  fi
fi

echo "Starting server..."
# Start the compiled server if available, otherwise run dev start
if [ -f dist/server.js ]; then
  node dist/server.js
else
  npm run start
fi
