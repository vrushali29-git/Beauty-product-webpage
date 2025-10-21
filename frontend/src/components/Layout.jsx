import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideFooterPaths = ["/ShoppingBag"]; // Add any paths where footer shouldn't show

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

export default Layout;
