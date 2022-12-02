import React from "react";
import "../styles/Navbar.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <NavLink
        activeclassname={"active"}
        to="/centro"
        className="navbar__links"
      >
        Centro
      </NavLink>
      <NavLink
        activeclassname={"active"}
        to="/especialidades"
        className="navbar__links"
      >
        Especialidades
      </NavLink>
      <NavLink
        activeclassname={"active"}
        to="/cuadro-medico"
        className="navbar__links"
      >
        Cuadro médico
      </NavLink>
      <NavLink
        activeclassname={"active"}
        to="/area-diagnostica"
        className="navbar__links"
      >
        Área diagnostica
      </NavLink>
      <NavLink
        activeclassname={"active"}
        to="/area-cliente"
        className="navbar__links"
      >
        Área Cliente
      </NavLink>
      <NavLink
        activeclassname={"active"}
        to="/pedir-cita"
        className="navbar__links"
      >
        Pedir Cita
      </NavLink>
      <NavLink
        activeclassname={"active"}
        to="/contacto"
        className="navbar__links"
      >
        Contacto
      </NavLink>
    </nav>
  );
};

export default Navbar;
