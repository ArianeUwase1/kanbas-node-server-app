import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import cors from "cors";
import UserRoutes from "./Kanbas/User/routes.js";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/Kanbas";
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json()); // Ensure all work is done after this line


UserRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
ModuleRoutes(app);
Lab5(app);

app.options('*', cors());

const PORT = process.env.PORT || 4000;
app.listen(PORT);