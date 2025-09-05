import { Schema, model } from 'mongoose';


const certificationSchema = new Schema({
name: String,
issuer: String,
date: Date,
credentialUrl: String
}, { timestamps: true });


export default model('Certification', certificationSchema);