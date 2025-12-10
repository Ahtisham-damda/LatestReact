import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Customer {
  id: number;
  name: string;
  email: string;
  age: number;
}

const CustomerList = () => {
  const API_URL: string =
    "https://68349d43cd78db2058beccee.mockapi.io/customers";

  const [customers, setCustomers] = useState<Customer[]>([]);

  const fetchCustomers = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setCustomers(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="container">
      <h1 className="text-danger">Customer List</h1>
      <Link to={"/CustomersAdd"} className="btn btn-primary my-3">
        {/* <i className="bi-plus-circle me-2"></i> */} Add Customer
      </Link>
      <table className="table table-striped table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr>
              <th scope="row">{customer.id}</th>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.age}</td>
              <td>
                <Link
                  to={`/Customeredit/${customer.id}`}
                  className="btn btn-warning me-3"
                >
                  Edit
                </Link>
                <Link
                  to={`/Customerdelete/${customer.id}`}
                  className="btn btn-danger"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CustomerList;
