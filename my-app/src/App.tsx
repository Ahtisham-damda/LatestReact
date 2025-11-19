import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import UserList2 from "./Components/UserList2";
import UserDetails from "./Components/UserDetails";
import PostList from "./Components/PostList";
import EmployeeList from "./Components/EmployeeList";
import UserList from "./Components/UserList";
import ProductList from "./Components/ProductList";
function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand bg-dark p-3">
        <Link to="/" className="btn btn-outline-light m-1">
          Home
        </Link>
        <Link to="/about" className="btn btn-outline-light m-1">
          About
        </Link>
        <Link to="/contact" className="btn btn-outline-light m-1">
          Contact Us
        </Link>
        <Link to="/users" className="btn btn-outline-light m-1">
          Users
        </Link>
        <Link to="/post" className="btn btn-outline-light m-1">
          PostList
        </Link>
        <Link to="/employee" className="btn btn-outline-light m-1">
          EmployeeList
        </Link>
        <Link to="/user" className="btn btn-outline-light m-1">
          UserList
        </Link>
         <Link to="/product" className="btn btn-outline-light m-1">
          ProductList
        </Link>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/post" element={<PostList />} />
          <Route path="/employee" element={<EmployeeList />} />
          <Route path="/users" element={<UserList2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
