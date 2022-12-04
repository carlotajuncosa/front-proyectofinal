import React, { useState } from "react";
import "../styles/Navbar.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {

  const [ menu, setMenu ] = useState(false);

  const handleMenu = () => {
      setMenu(!menu)
  }
  
  
  return (
    <nav /* className={`navbar ${menu ? 'isActive' : ''}`} */>

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
        Cuadro Médico
      </NavLink>
      <NavLink
        activeclassname={"active"}
        to="/area-diagnostica"
        className="navbar__links"
      >
        Área Diagnostica
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
