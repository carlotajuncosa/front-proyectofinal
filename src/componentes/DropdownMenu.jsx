import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/DropdownMenu.scss";

const DropdownMenu = ({ toggleMenu }) => {
  return (
    <div className="dropdownMenu">
      <NavLink onClick={toggleMenu} activeclassname={"active"} to="/" className="dropdownMenu__logo">
        <img
          className="dropdownMenu__img"
          src="../../assets/logo/logo_header.svg"
          alt="logo"
        />
      </NavLink>
      <nav
        className="dropdownMenu__nav" /* className={`navbar ${menu ? 'isActive' : ''}`} */
      >
        <button className="dropdownMenu__button" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="dropdownMenu__svg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
        <NavLink
          onClick={toggleMenu}
          activeclassname={"active"}
          to="/centro"
          className="dropdownMenu__links"
        >
          Centro
        </NavLink>
        <NavLink
          onClick={toggleMenu}
          activeclassname={"active"}
          to="/especialidades"
          className="dropdownMenu__links"
        >
          Especialidades
        </NavLink>
        <NavLink
          onClick={toggleMenu}
          activeclassname={"active"}
          to="/cuadro-medico"
          className="dropdownMenu__links"
        >
          Cuadro médico
        </NavLink>
        <NavLink
          onClick={toggleMenu}
          activeclassname={"active"}
          to="/area-diagnostica"
          className="dropdownMenu__links"
        >
          Área diagnostica
        </NavLink>
        <NavLink
          onClick={toggleMenu}
          activeclassname={"active"}
          to="/area-cliente"
          className="dropdownMenu__links"
        >
          Área Cliente
        </NavLink>
        <NavLink
          onClick={toggleMenu}
          activeclassname={"active"}
          to="/pedir-cita"
          className="dropdownMenu__links"
        >
          Pedir Cita
        </NavLink>
        <NavLink
          onClick={toggleMenu}
          activeclassname={"active"}
          to="/contacto"
          className="dropdownMenu__links"
        >
          Contacto
        </NavLink>
      </nav>
    </div>
  );
};

export default DropdownMenu;
