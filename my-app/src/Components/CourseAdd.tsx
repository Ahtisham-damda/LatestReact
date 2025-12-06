import { useState } from "react";
// import { Navigate } from "react-router-dom";

const CourseAdd = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [error, setError] = useState<string | null>("");
  const [success, setSuccess] = useState<string | null>("");

  // const Navigate = useNavigate();

  const Api_Url = "https://68349d43cd78db2058beccee.mockapi.io/course";

  const addCourse = async () => {
    const course = {
      title,
      description,
    };
    if (title.length === 0) {
      setError("Title is required");
      return;
    }
    if (description.length === 0) {
      setError("Description is required");
      return;
    }
    if (description.length < 10) {
      setError("Description should be at least 10 characters long");
      return;
    }
    setSuccess("Added Course Successfully!");

    await fetch(Api_Url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
    // Navigate()
  };

  let errorMessage = null;
  if (error) {
    errorMessage = <div className="alert alert-danger">{error}</div>;
  }
  let successMessage = null;
  if (success) {
    successMessage = <div className="alert alert-success">{success}</div>;
  }

  return (
    <div className="container">
      <h2 className="text-primary my-4">Add Course</h2>
      {errorMessage}
      {successMessage}
      <div className="border border-1 rounded shadow p-4" id="addCourseForm">
        <div className="mb-4">
          <label htmlFor="titleTextBox" className="form-label fw-bold">
            Course Title
          </label>
          <input
            type="text"
            id="titleTextBox"
            className="form-control"
            placeholder="Enter Course Title Like Java , Python , React , etc"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
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
            placeholder="Enter Descriptions About Courses.."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="mt-5">
          <button className="btn btn-primary w-100" onClick={() => addCourse()}>
            Add Course
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseAdd;
