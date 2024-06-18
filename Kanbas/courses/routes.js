import * as dao from './dao.js';

export default function CourseRoutes(app) {
  app.post("/api/courses", async (req, res) => {
    const course = await dao.createCourse(req.body);
    console.log(course);
    res.json(course);
  });
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  });
  app.put("/api/courses/:cid", async (req, res) => {
    const { cid } = req.params;
    const course = req.body;
    const status = await dao.editCourse(cid, course);
    res.json(status);
  });
  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteCourse(id);
    res.json(status);
  });
}