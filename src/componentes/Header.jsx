import React from "react";
import "../styles/Header.scss";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <img
      className="header__logo"
        src="../../assets/logo/logo_header.svg"
        alt="logo"
      />
      <Navbar />
      
    </div>
  );
};

export default Header;
