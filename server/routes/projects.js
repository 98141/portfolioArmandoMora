import { Router } from 'express';
import Project from '../models/Project.js';


const router = Router();


router.get('/', async (req, res) => {
const q = {};
if (req.query.featured === 'true') q.featured = true;
const data = await Project.find(q).sort({ createdAt: -1 });
res.json(data);
});


router.get('/:slug', async (req, res) => {
const p = await Project.findOne({ slug: req.params.slug });
if (!p) return res.status(404).json({ error: 'Not found' });
res.json(p);
});


export default router;