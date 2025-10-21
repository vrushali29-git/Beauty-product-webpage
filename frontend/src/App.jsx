import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Categories from "./components/Categories";
import Brands from "./components/Brands";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ShoppingBag from "./components/ShoppingBag.jsx";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<Layout><Hero /></Layout>} />
    <Route path="/Categories" element={<Layout><Categories /></Layout>} />
    <Route path="/Brands" element={<Layout><Brands /></Layout>} />
    <Route path="/Products" element={<Layout><Products /></Layout>} />
    <Route path="/ShoppingBag" element={<ShoppingBag />} /> 
    <Route path="/Wishlist" element={<Wishlist />} />
  </Routes>
</Router>

  );
}

export default App;
