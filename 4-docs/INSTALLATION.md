# ⚙️ AfyaLink Installation Guide

## Prerequisites
- Node.js v18+
- PostgreSQL 16+
- Docker & Docker Compose
- Git CLI
- Optional: Redis

---

## Local Setup (recommended for development)

1. Clone the repository
```bash
git clone https://github.com/GoldEdgeLabs/AfyaLink.git
cd AfyaLink
```

2. Start the database
```bash
cd 1_Database
docker-compose up -d
```

3. Backend
```bash
cd ../2_Backend
npm install
npx prisma migrate dev --name init
npm run seed
npm run dev
```

4. Frontend
```bash
cd ../1_Frontend
npm install
cp .env.example .env.local
npm run dev
```

Access the app at: http://localhost:3000


© 2025 GoldEdge Labs — All Rights Reserved
🌐 www.goldedgelabs.africa | 📧 support@goldedgelabs.com
