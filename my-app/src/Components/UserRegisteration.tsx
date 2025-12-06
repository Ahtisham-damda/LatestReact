import { useState } from "react";

const RegisteredUser = () => {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [error, setError] = useState<string | null>("");
  const [success, setSuccess] = useState<string | null>("");

  const handleonClick = () => {
    console.log("Register button clicked");
    setError(null);

    if (fullname.length == 0) {
      setError("Fullname is required");
      return;
    }
    if (email.length == 0) {
      setEmail("Email is required");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password and Confirm Password do not match");
      return;
    }
    setSuccess("User registered successfully!");
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
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">Register User</h2>

      {errorMessage}
      {successMessage}

      <div className="border p-4 rounded shadow ">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            className="form-control"
            value={fullname}
            placeholder="Enter Your Full Name"
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>

        <div className="mb-3 ">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            placeholder="Enter Your Valid Email.."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            placeholder="Enter Password.."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary w-100"
          onClick={() => handleonClick()}
        >
          Register now
        </button>
      </div>
    </div>
  );
};

export default RegisteredUser;
