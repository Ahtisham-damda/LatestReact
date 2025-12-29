import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";

import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import AddressForm from "./Components/AddressForm";
import OrderPlaced from "./Components/OrderPlaced";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<AddressForm />} />
        <Route path="/order" element={<OrderPlaced />} />
      </Routes>
    </CartProvider>
  );
}

export default App;