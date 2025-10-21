import React from "react";
import {useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideFooterPaths = ["/ShoppingBag","/Wishlist"]; 

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

export default Layout;
