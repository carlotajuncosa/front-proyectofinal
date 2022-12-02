import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";
import Navbar from "./Navbar";

const Header = () => {
  const [ menu, setMenu ] = useState(false);
  const toggleMenu = () => {
    setMenu (!menu)
  }

  return (
    <div className="header">
      <button 
      onClick={ toggleMenu }
      className="header__button">
        <svg
          className="header__svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
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
