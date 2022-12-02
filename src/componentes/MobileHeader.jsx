import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/MobileHeader.scss";
import DropdownMenu from "./DropdownMenu";
const MobileHeader = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  
  return <div className="mobileHeader">
      <NavLink activeclassname={"active"} to="/" className="mobileHeader__links">
        <img
          className="mobileHeader__logo"
          src="../../assets/logo/logo_header.svg"
          alt="logo"
        />
      </NavLink>
      <button 
      onClick={ toggleMenu }
      className="mobileHeader__button">
        <svg
          className="mobileHeader__svg"
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
      {menu && <DropdownMenu toggleMenu={toggleMenu}/>}
      </div>;
};

export default MobileHeader;
