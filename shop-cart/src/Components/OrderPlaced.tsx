import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";

const OrderPlaced = () => {
  const [address, setAddress] = useState<any>(null);
  const { emptyCart } = useCart();

  useEffect(() => {
    const saved = localStorage.getItem("orderAddress");
    if (saved) setAddress(JSON.parse(saved));
    emptyCart();
  }, []);

  if (!address) return <p>No address found</p>;

  return (
    <div className="container mt-4">
      <h3>Order Confirmed ✅</h3>
      <p>{address.street}</p>
      <p>{address.city}</p>
      <button className="btn btn-success" onClick={() => window.print()}>
        Print
      </button>
    </div>
  );
};

export default OrderPlaced;