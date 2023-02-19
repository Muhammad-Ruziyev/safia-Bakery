import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// import components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";

// import redux
import { getAllProducts, getanlyProducts } from "./Redux/Features/productSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";

// import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Restaurants from "./pages/Restaurants";
import Contacts from "./pages/Contacts";
import Search from "./pages/Search";
import Details from "./pages/Details";
import Login from "./pages/Login/Login";
import Register from "./pages/Registrations/Register";

// import admin layout
import AdminLayout from "./admin/page/Admin";
import AdminProducts from "./admin/components/AdminProducts";

// import scss
import "./Main.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="shopping-Cart">
        <Cart />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route
          path="/admin/users"
          element={<AdminLayout>users page</AdminLayout>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
