// ✅ Load environment variables first
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

async function start() {
  try {
    console.log("🔄 Connecting to database...");
    await prisma.$connect();
    console.log("✅ Prisma connected successfully");

    // 🧩 Start the Express server
    const server = app.listen(PORT, () => {
      console.log(`🚀 AfyaLink backend is running on port ${PORT}`);
    });

    // 🧹 Graceful shutdown
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
    console.error("❌ Error starting server:", error);
    process.exit(1);
  }
}

start();
