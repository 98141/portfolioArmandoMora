import { Router } from 'express';
import Certification from '../models/Certification.js';


const router = Router();
router.get('/', async (_req, res) => {
const data = await Certification.find().sort({ date: -1 });
res.json(data);
});
export default router;