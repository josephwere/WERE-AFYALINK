// ✅ Load environment variables first
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

// Retry helper
async function connectWithRetry(retries = 10, delay = 5000) {
  for (let i = 1; i <= retries; i++) {
    try {
      await prisma.$connect();
      console.log("✅ Prisma connected successfully");
      return;
    } catch (err) {
      console.error(`❌ Prisma connection failed (attempt ${i}/${retries}):`, err.message);
      if (i < retries) {
        console.log(`🔁 Retrying in ${delay / 1000}s...`);
        await new Promise((res) => setTimeout(res, delay));
      } else {
        console.error("🚨 Could not connect to database after several attempts. Exiting...");
        process.exit(1);
      }
    }
  }
}

async function start() {
  await connectWithRetry();

  app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
  });
}

start();
