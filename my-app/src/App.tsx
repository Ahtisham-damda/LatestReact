import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import ProductList from "./Components/ProductList";

// import Contact from "./Components/Contact";
// import UserList2 from "./Components/UserList2";
// import UserDetails from "./Components/UserDetails";
// import EmployeeList from "./Components/EmployeeList";
// import PostList3 from "./Components/PostList3";
// import RecipeList from "./Components/RecipeList";
// import RecipeSearch from "./Components/RecipeSearch";
// import UserList from "./Components/UserList";

import RecipeList1 from "./Components/RecipeList1";
import UserSearch from "./Components/UserSearch";
import CourseAdd from "./Components/CourseAdd";
import CourseList4 from "./Components/CourseList4";
import RegisteredUser from "./Components/UserRegisteration";
import CourseEdit from "./Components/CourseEdit";
import CustomerList from "./Components/CustomerList";
import CustomerAdd from "./Components/CustomerAdd";
import CustomerEdit from "./Components/CustomerEdit";
import CustomerDelete from "./Components/CustomerDelete";
import EmployeeCard from "./Components/EmployeeCard";
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
          EmployeeCard
        </Link>
        <Link to="/user" className="btn btn-outline-light m-1">
          User Search
        </Link>
        <Link to="/product" className="btn btn-outline-light m-1">
          ProductList
        </Link>
        <Link to="/course-list" className="btn btn-outline-light m-1">
          Course List
        </Link>
        <Link to="/customer-list" className="btn btn-outline-light m-1">
          Customer List
        </Link>
        <Link to="/Reg" className="btn btn-outline-light m-1">
          User Registration
        </Link>
      </nav>

      <div className="container mt-4">
        <Routes>
          {/* <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/post" element={<PostList3 />} />
          // <Route path="/employee" element={<Emp />} />
          <Route path="/users" element={<UserList2 />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/employee" element={<EmployeeCard name={"Ahtisham"} position={"Ceo"} department={"Sales Executive"} salary={120000} children={undefined}  />}/>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/CoursesAdd" element={<CourseAdd />} />
          <Route path="/CustomersAdd" element={<CustomerAdd />} />

          <Route path="/Courseedit/:id" element={<CourseEdit />} />
          <Route path="/Customeredit/:id" element={<CustomerEdit />} />
          <Route path="/Customerdelete/:id" element={<CustomerDelete />} />

          <Route path="/user" element={<UserSearch />} />
          <Route path="/course-list" element={<CourseList4 />} />
          <Route path="/customer-list" element={<CustomerList />} />

          <Route path="/recipe" element={<RecipeList1 />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/Reg" element={<RegisteredUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

















// import { useState } from "react";
// import { ThemeContext, type Theme } from "./Context/themeContext";
// import ThemeToggler from "./Components/themeToggler";
// import ThemedCard from "./Components/ThemedCard";
// import ThemedTable from "./Components/ThemedTable";

// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const [theme, setTheme] = useState<Theme>("light");

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div
//         className={`min-vh-100 ${
//           theme === "light" ? "bg-light" : "bg-dark"
//         }`}
//       >
//         <div className="container py-4">
//           <h1 className={theme === "light" ? "text-dark" : "text-light"}>
//             Theme Toggle App
//           </h1>

//           <ThemeToggler />
//           <ThemedCard />
//           <ThemedTable />
//         </div>
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default App;