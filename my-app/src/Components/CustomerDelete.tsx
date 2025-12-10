import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

interface Customer {
  id: string;
  name: string;
  email: string;
  age: number;
}

const API_URL = "https://68349d43cd78db2058beccee.mockapi.io/customers";

const CustomerDelete: React.FC = () => {
  const [customer, setCustomer] = useState<Customer | null>(null);

  const params = useParams();
  const navigate = useNavigate();

  // Fetch customer data before deleting (for confirmation)
  const fetchCustomer = async () => {
    const response = await fetch(`${API_URL}/${params.id}`);
    const data = await response.json();
    setCustomer(data);
  };

  // Delete customer
  const deleteCustomer = async () => {
    await fetch(`${API_URL}/${params.id}`, {
      method: "DELETE",
    });
    navigate("/customer-list");
  };

  useEffect(() => {
    fetchCustomer();
  }, [params.id]);

  if (!customer) {
    return <div className="text-primary">Loading customer data...</div>;
  }

  return (
    <div className="container">
      <h2 className="text-danger my-4">Delete Customer</h2>

      <div className="border border-1 rounded shadow p-4">
        <h4>Are you sure you want to delete this customer?</h4>

        <div className="mt-3">
          <p>
            <strong>Name:</strong> {customer.name}
          </p>
          <p>
            <strong>Email:</strong> {customer.email}
          </p>
          <p>
            <strong>Age:</strong> {customer.age}
          </p>
        </div>

        <div className="mt-4">
          <button className="btn btn-danger w-100" onClick={deleteCustomer}>
            Delete
          </button>

          <Link to="/customer-list" className="btn btn-secondary w-100 mt-2">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerDelete;
