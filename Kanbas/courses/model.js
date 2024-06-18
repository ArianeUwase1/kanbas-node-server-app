import mongoose from "mongoose";
import courseSchema from "./schema.js";

const course = mongoose.model("Course", courseSchema);
export default course;