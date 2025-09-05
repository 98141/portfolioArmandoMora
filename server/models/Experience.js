import { Schema, model } from 'mongoose';


const experienceSchema = new Schema({
role: String,
company: String,
start: Date,
end: Date,
achievementsEs: [String],
achievementsEn: [String]
}, { timestamps: true });


export default model('Experience', experienceSchema);