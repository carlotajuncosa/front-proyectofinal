import React from "react";
import "../styles/Header.scss";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <img
      className="header__logo"
        src="https://i.pinimg.com/736x/25/c2/fb/25c2fb35ebfd413edd0a61d12e33b9b6.jpg"
        alt="logo-athena"
      />
      <Navbar />
      
    </div>
  );
};

export default Header;
