import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Categories from "./components/Categories";
import Brands from "./components/Brands";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Brands" element={<Brands />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
