import { Router } from 'express';
import Experience from '../models/Experience.js';


const router = Router();
router.get('/', async (_req, res) => {
const data = await Experience.find().sort({ start: -1 });
res.json(data);
});
export default router;