import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to='home'/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
};

export default Router;
