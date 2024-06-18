import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    number:{type: String},
    name: {type: String},
    startDate: Date,
    endDate: Date,
    department: String,
    credits: String,
    description: String,
    image: String
  },
  { collection: "courses" }
);
export default courseSchema;