import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

interface Course {
  id: string;
  title: string;
  description: string;
}

const API_URL = "https://68349d43cd78db2058beccee.mockapi.io/course";

const CourseEdit: React.FC = () => {
  const [course, setCourse] = useState<Course | null>(null);

  const params = useParams();

  const navigate = useNavigate();

  const fetchCourse = async () => {
    const response = await fetch(`${API_URL}/${params.id}`);
    const data = await response.json();
    setCourse(data);
  };

  const updateCourse = async () => {
    await fetch(`${API_URL}/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
    navigate("/course-list");
  };

  useEffect(() => {
    fetchCourse();
  }, [params.id]);

  if (!course) {
    <div className="text-primary">Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="text-primary my-4">Edit Course</h2>

      <div className="border border-1 rounded shadow p-4" id="addCourseForm">
        <div className="mb-4">
          <label htmlFor="titleTextBox" className="form-label fw-bold">
            Course Title
          </label>
          <input
            type="text"
            id="titleTextBox"
            className="form-control"
            placeholder="Enter Course Title You D Like to Change.."
            value={course?.title}
            onChange={(e) => setCourse({ ...course!, title: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="descriptionTextBox" className="form-label fw-bold">
            Course Title
          </label>
          <input
            type="text"
            id="descriptionTextBox"
            className="form-control"
            placeholder="Enter Descriptions You D Like to Change.."
            value={course?.description}
            onChange={(e) =>
              setCourse({ ...course!, description: e.target.value })
            }
          />
        </div>
        <div className="mt-5">
          <button className="btn btn-primary w-100" onClick={updateCourse}>
            Update
          </button>

          <Link to="/courses" className="btn btn-secondary ms-2 mt-3">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CourseEdit;
