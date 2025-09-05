require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');

const app = express();

// Seguridad básica
app.use(helmet());
app.use(mongoSanitize());
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN?.split(',') || 'http://localhost:5173',
  credentials: false,
  methods: ['GET','POST'],
}));
app.use(express.json({ limit: '200kb' }));
app.use(morgan('tiny'));

// Rate limit especial para contacto
const contactLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, standardHeaders: true });

/* ====== Schemas mínimos ====== */
const { Schema, model } = mongoose;
const projectSchema = new Schema({
  title: String, slug: { type: String, unique: true },
  summaryEs: String, summaryEn: String,
  tech: [String], tags: [String],
  images: [String],
  links: { demo: String, repo: String },
  securityHighlights: [String],
  featured: { type: Boolean, default: false },
}, { timestamps: true });

const messageSchema = new Schema({
  name: String, email: String, subject: String, message: String,
}, { timestamps: true });

const Project = model('Project', projectSchema);
const Message = model('Message', messageSchema);

/* ====== Rutas ====== */
app.get('/api/projects', async (req, res) => {
  const q = {};
  if (req.query.featured === 'true') q.featured = true;
  const data = await Project.find(q).sort({ createdAt: -1 });
  res.json(data);
});

app.get('/api/projects/:slug', async (req, res) => {
  const p = await Project.findOne({ slug: req.params.slug });
  if (!p) return res.status(404).json({ error: 'Not found' });
  res.json(p);
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: 'Invalid payload' });
  await Message.create({ name, email, subject, message });
  res.json({ ok: true });
});

/* ====== Arranque ====== */
(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const port = process.env.PORT || 4000;
  app.listen(port, () => console.log(`API listening on ${port}`));
})();
