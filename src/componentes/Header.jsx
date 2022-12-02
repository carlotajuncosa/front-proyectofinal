import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";
import Navbar from "./Navbar";

const Header = () => {
  
  
  return (
    <div className="header">
      <NavLink activeclassname={"active"} to="/" className="navbar__links">
        <img
          className="header__logo"
          src="../../assets/logo/logo_header.svg"
          alt="logo"
        />
      </NavLink>

      <Navbar />
    </div>
  );
};

export default Header;
