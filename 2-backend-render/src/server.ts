// ✅ Load environment variables first
import dotenv from "dotenv";
dotenv.config();

import app from "./app.js"; // ✅ Keep `.js` extension for ESM builds
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

// 🔁 Retry logic for database connection
async function connectWithRetry(retries = 5, delay = 5000): Promise<void> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`🧩 Attempt ${attempt} to connect to database...`);
      await prisma.$connect();
      console.log("✅ Prisma connected successfully");
      return;
    } catch (error) {
      console.error(`❌ Database connection failed (attempt ${attempt}):`, error.message);
      if (attempt < retries) {
        console.log(`⏳ Retrying in ${delay / 1000} seconds...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw error;
      }
    }
  }
}

async function start() {
  try {
    await connectWithRetry();

    const server = app.listen(PORT, () => {
      console.log(`🚀 AfyaLink backend is running on port ${PORT}`);
    });

    // 🧹 Graceful shutdown for Render
    const shutdown = async (signal: string) => {
      console.log(`\n⚠️ Received ${signal}. Closing gracefully...`);
      await prisma.$disconnect();
      server.close(() => {
        console.log("🧹 Server closed. Goodbye!");
        process.exit(0);
      });
    };

    process.on("SIGTERM", () => shutdown("SIGTERM"));
    process.on("SIGINT", () => shutdown("SIGINT"));
  } catch (error) {
    console.error("❌ Fatal error starting server:", error);
    process.exit(1);
  }
}

start();
