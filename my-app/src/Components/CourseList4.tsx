import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Course {
  id: number;
  title: string;
  description: string;
}

const CourseList4 = () => {
  const API_URL: string = "https://68349d43cd78db2058beccee.mockapi.io/course";

  const [courses, setCourses] = useState<Course[]>([]);

  const fetchCourses = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setCourses(data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  //   const deleteCourse = async (id: number) => {
  //     const deleteUrl = `${API_URL}/${id}`;
  //     await fetch(deleteUrl, { method: "DELETE" });
  //     fetchCourses(); // referesh the list
  //   };

  return (
    <div id="container">
      <h1 className="text-danger">Course List</h1>
      <Link to={`/CoursesAdd`} className="btn btn-primary my-3">
        <i className="bi-plus-circle me-2"></i>
        Add Course
      </Link>
      <table className="table table-striped table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr>
              <th scope="row">{course.id}</th>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>
                <Link
                  to={`/Courseedit/${course.id}`}
                  className="btn btn-warning me-3"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  // onClick={() => deleteCourse(course.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList4;