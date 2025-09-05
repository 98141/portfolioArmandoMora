import { Schema, model } from 'mongoose';


const projectSchema = new Schema({
title: { type: String, required: true },
slug: { type: String, required: true, unique: true },
summaryEs: String,
summaryEn: String,
tech: [String],
tags: [String],
images: [String],
links: { demo: String, repo: String },
securityHighlights: [String],
featured: { type: Boolean, default: false }
}, { timestamps: true });


export default model('Project', projectSchema);