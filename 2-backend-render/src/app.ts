import express from "express";
const app = express();

// ✅ Health Check Endpoint
app.get("/health", async (req, res) => {
  try {
    res.status(200).json({
      status: "ok",
      message: "AfyaLink backend is healthy 💚",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Health check failed ❌",
      error: error instanceof Error ? error.message : error,
    });
  }
});
