import express from "express";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";

import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // Ensure all work is done after this line


CourseRoutes(app);
AssignmentRoutes(app);
ModuleRoutes(app);
Lab5(app);

app.options('*', cors());

const PORT = process.env.PORT || 4000;
app.listen(PORT);
