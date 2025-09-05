import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { celebrate, Joi, Segments } from 'celebrate';
import Message from '../models/Message.js';


const router = Router();


const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, standardHeaders: true });


router.post('/', limiter,
celebrate({
[Segments.BODY]: Joi.object({
name: Joi.string().min(2).max(80).required(),
email: Joi.string().email().required(),
subject: Joi.string().allow('').max(120),
message: Joi.string().min(10).max(2000).required()
})
}),
async (req, res) => {
await Message.create(req.body);
res.json({ ok: true });
}
);


export default router;