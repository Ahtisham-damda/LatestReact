import { useState } from "react";

function CardItem() {
  const [quantity, setQuantity] = useState<number>(1);

  const IncreaseQuantity = () => setQuantity(quantity + 1);
  const DecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mt-4 text-center">
      <h4> 🛒 Product : Iphone 15 Pro</h4>
      <p>Price : $1000</p>

      <div className="d-flex justify-content-center align-items-center gap-3">
        <button
          className="btn btn-outline-secondary"
          onClick={DecreaseQuantity}
        >
          ➖
        </button>

        <span className="fw-bold">{quantity}</span>

        <button
          className="btn btn-outline-secondary"
          onClick={IncreaseQuantity}
        >
          ➕
        </button>
      </div>

      <p className="mt-3">
        Total : <strong>${1000 * quantity}</strong>
      </p>
    </div>
  );
}
export default CardItem;
