import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

interface Customer {
  id: string;
  name: string;
  email: string;
  age: number;
}
const API_URL = "https://68349d43cd78db2058beccee.mockapi.io/customers";

const CustomerEdit: React.FC = () => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const params = useParams();
  const navigate = useNavigate();

  const fetchCustomer = async () => {
    if (!params.id) return;
    try {
      const response = await fetch(`${API_URL}/${params.id}`);
      const data = await response.json();
      setCustomer(data);
    } catch (err) {
      console.error("Failed to fetch customer", err);
    }
  };

  const updateCustomer = async () => {
    if (!params.id) return;
    try {
      await fetch(`${API_URL}/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
      navigate("/customer-list");
    } catch (err) {
      console.error("Failed to update customer", err);
    }
  };

  useEffect(() => {
    fetchCustomer();
  }, [params.id]);

  if (!customer) {
    return <div className="text-primary">Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="text-primary my-4">Edit Customer</h2>

      <div className="border border-1 rounded shadow p-4" id="addCustomerForm">
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="nameTextBox" className="form-label fw-bold">
            Customer Name
          </label>
          <input
            type="text"
            id="nameTextBox"
            className="form-control"
            placeholder="Enter Customer Name..."
            value={customer.name}
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="emailTextBox" className="form-label fw-bold">
            Customer Email
          </label>
          <input
            type="email"
            id="emailTextBox"
            className="form-control"
            placeholder="Enter Customer Email..."
            value={customer.email}
            onChange={(e) =>
              setCustomer({ ...customer, email: e.target.value })
            }
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label htmlFor="ageTextBox" className="form-label fw-bold">
            Customer Age
          </label>
          <input
            type="number"
            id="ageTextBox"
            className="form-control"
            placeholder="Enter Customer Age..."
            value={customer.age}
            min={0}
            onChange={(e) =>
              setCustomer({ ...customer, age: Number(e.target.value) })
            }
          />
        </div>

        <div className="mb-1 mt-2">
          <button className="btn btn-primary w-100" onClick={updateCustomer}>
            Update
          </button>

          <Link to="/customer-list" className="btn btn-secondary ms-2 mt-3">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerEdit;
