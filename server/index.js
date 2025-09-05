import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";

import projectsRouter from "./routes/projects.js";
import contactRouter from "./routes/contact.js";
import experienceRouter from "./routes/experience.js";
import certificationsRouter from "./routes/certifications.js";
import servicesRouter from "./routes/services.js";

const app = express();

// Seguridad y middlewares
app.use(helmet());
app.use(mongoSanitize());
app.use(express.json({ limit: "200kb" }));
app.use(morgan("tiny"));

const allowed = (process.env.FRONTEND_ORIGIN || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
app.use(
  cors({
    origin: allowed.length ? allowed : "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: false,
  })
);

// Rate limit general básico
app.use(rateLimit({ windowMs: 60_000, max: 120 }));

// Rutas API
app.use("/api/projects", projectsRouter);
app.use("/api/experience", experienceRouter);
app.use("/api/certifications", certificationsRouter);
app.use("/api/services", servicesRouter);
app.use("/api/contact", contactRouter);

// Healthcheck
app.get("/api/health", (_req, res) => res.json({ ok: true }));

// Arranque
const PORT = process.env.PORT || 4000;
(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(PORT, () => console.log(`API listening on ${PORT}`));
})();
