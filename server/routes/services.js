import { Router } from 'express';
import Service from '../models/Service.js';


const router = Router();
router.get('/', async (_req, res) => {
const data = await Service.find().sort({ createdAt: -1 });
res.json(data);
});
export default router;