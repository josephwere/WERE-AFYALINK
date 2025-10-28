import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

// ✅ Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || "*",
  credentials: true,
}));
app.use(express.json());

// ✅ Health Check (includes DB ping)
app.get("/health", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1;`; // Quick ping to DB
    res.status(200).json({
      status: "ok",
      message: "AfyaLink backend & database are healthy 💚",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("❌ Health check DB error:", error);
    res.status(500).json({
      status: "error",
      message: "Database unreachable ❌",
      error: error instanceof Error ? error.message : error,
    });
  }
});

// ✅ Example Base Route
app.get("/", (req, res) => {
  res.send("🚀 AfyaLink Backend API is running!");
});

// 🧩 Import and register your routes here
// import userRoutes from "./routes/user";
// app.use("/api/users", userRoutes);

// ✅ Export for server.ts
export default app;
