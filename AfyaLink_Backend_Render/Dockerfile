# Use Node.js LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies (cache)
COPY package*.json ./
RUN npm ci --only=production

# Copy rest of the app
COPY . .

# Generate Prisma client (if prisma is present)
RUN if [ -d prisma ]; then npx prisma generate; fi

# Build TypeScript
RUN npm run build

# Expose port
EXPOSE 4000

# Start app (run migrations + seed before starting)
CMD ["sh", "./start.sh"]
