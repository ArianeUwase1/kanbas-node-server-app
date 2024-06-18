import course from "./model.js";

export const createCousrse = (course) => {
    delete course._id
    return course.create(course);   
}
export const findAllCourses = () => course.find();
export const findCourseById = (courseId) => course.findById(courseIdId);
export const findUsersByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return course.find({
      $or: [{ name: { $regex: regex } }],
    });
  };
export const updateCourse = (courseId, course) =>  course.updateOne({ _id: courseId }, { $set: course });
export const deleteUser = (courseId) => course.deleteOne({ _id: courseId})