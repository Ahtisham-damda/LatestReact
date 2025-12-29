import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, updateCart, emptyCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0)
    return <div className="container mt-4">Cart is empty</div>;

  return (
    <div className="container mt-4">
      <h3>Your Cart</h3>

      <table className="table">
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>
                <button
                  onClick={() => updateCart(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateCart(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h5>Total: ${total}</h5>

      <Link to="/address" className="btn btn-primary me-2">
        Proceed
      </Link>
      <button className="btn btn-danger" onClick={emptyCart}>
        Clear
      </button>
    </div>
  );
};

export default Cart;