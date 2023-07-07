import React from "react";
import Footer from "../common/Footer/Footer";
import NavBar from "../common/Header/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="px-52">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
