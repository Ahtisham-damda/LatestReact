import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CoursesAdd = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const navigate = useNavigate();

  const API_URL = "https://68349d43cd78db2058beccee.mockapi.io/customers";

  const addCustomer = async () => {
    const customer = {
      name,
      email,
      age,
    };

    if (name.length === 0) {
      setError("Name is required");
      return;
    }
    if (email.length === 0) {
      setError("Email is required");
      return;
    }
    if (age.length === 0) {
      setError("Age is required");
      return;
    }
    if (Number(age) < 18) {
      setError("Age should be at least 18");
      setSuccess(null);
      return;
    }
    setSuccess("Added Customer Successfully!");

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });
    navigate("/customer-list")
  };

  let erroressage = null;
  if (error) {
    erroressage = <div className="alert alert-danger">{error}</div>;
  }

  let successMessage = null;
  if (success) {
    successMessage = <div className="alert alert-success">{success}</div>;
  }

  return (
    <div className="container">
      <h2 className="text-danger my-4 text-center">Add Customer</h2>

      {erroressage}
      {successMessage}

      <div className="border border-1 rounded shadow p-4" id="addCustomerForm">
        <div className="mb-4">
          <label htmlFor="titleTextBox" className="form-label fw-bold">
            Customer Name
          </label>
          <input
            type="text"
            id="titleTextBox"
            className="form-control"
            placeholder="Enter Customers Name You Wanted To Add.."
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="emailTextBox" className="form-label fw-bold">
            Customer Email
          </label>
          <input
            type="email"
            id="emailTextBox"
            className="form-control"
            placeholder="Enter Customers Email.."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="numberTextBox" className="form-label fw-bold">
            Customer Age
          </label>
          <input
            type="number"
            id="numberTextBox"
            className="form-control"
            placeholder="Enter Customers Age..."
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </div>

        <div className="mt-5">
          <button className="btn btn-primary w-100" onClick={addCustomer}>
            Add Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesAdd;
