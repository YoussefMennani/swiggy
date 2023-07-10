import React from "react";
import Footer from "../common/Footer/Footer";
import NavBar from "../common/Header/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="h-full">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
