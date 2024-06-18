import * as dao from './dao.js';

export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    try {
      const course = await dao.createCourse(req.body);
      res.status(201).json(course);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  app.post('/api/courses', createCourse);

  const findAllCourses = async (req, res) => {
    try {
      const courses = await dao.findAllCourses();
      res.json(courses);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  app.get('/api/courses', findAllCourses);

  const findCourseById = async (req, res) => {
    try {
      const { id } = req.params;
      const course = await dao.findCourseById(id);
      res.json(course);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  app.get('/api/courses/:id', findCourseById);

  const updateCourse = async (req, res) => {
    try {
      const { id } = req.params;
      const course = req.body;
      const status = await dao.updateCourse(id, course);
      res.sendStatus(204);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  app.put('/api/courses/:id', updateCourse);

  const deleteCourse = async (req, res) => {
    try {
      const { id } = req.params;
      const status = await dao.deleteCourse(id);
      res.sendStatus(204);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  app.delete('/api/courses/:id', deleteCourse);
}
