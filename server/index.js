
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
import certificationsRouter from "./routes/certification.js";
import servicesRouter from "./routes/services.js";

const app = express();

// CORS configurado correctamente
const allowedOrigins = (process.env.FRONTEND_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

console.log("Allowed origins:", allowedOrigins);

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Seguridad y middlewares
app.use(helmet());
app.use(express.json({ limit: "200kb" }));
app.use(morgan("tiny"));

// Sanitización manual segura
app.use((req, res, next) => {
  if (req.body) Object.assign(req.body, mongoSanitize.sanitize(req.body));
  if (req.params) Object.assign(req.params, mongoSanitize.sanitize(req.params));
  if (req.query) Object.assign(req.query, mongoSanitize.sanitize(req.query));
  next();
});

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

// Arranque del servidor
const PORT = process.env.PORT || 4000;
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`API listening on ${PORT}`));
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
})();
