import { Schema, model } from 'mongoose';


const serviceSchema = new Schema({
name: String,
category: { type: String, enum: ['fullstack','security'] },
descEs: String,
descEn: String,
bulletsEs: [String],
bulletsEn: [String]
}, { timestamps: true });


export default model('Service', serviceSchema);