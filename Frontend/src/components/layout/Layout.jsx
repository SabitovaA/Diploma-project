import React from "react";
import Header from "../headerComponents/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footerComponents/Footer";

function Layout() {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
