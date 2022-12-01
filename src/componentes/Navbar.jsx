import React from "react";
import "./Navbar.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink activeclassname={"active"} to = "/">Home</NavLink>
      <NavLink activeclassname={"active"} to = "/centro">Centro</NavLink>
      <NavLink activeclassname={"active"} to = "/especialidades">Especialidades</NavLink>
      <NavLink activeclassname={"active"} to = "/cuadro-medico">Cuadro médico</NavLink>
      <NavLink activeclassname={"active"} to = "/area-diagnostica">Área diagnostica</NavLink>
      <NavLink activeclassname={"active"} to = "/area-cliente">Área Cliente</NavLink>
      <NavLink activeclassname={"active"} to = "/pedir-cita">Pedir Cita</NavLink>
      <NavLink activeclassname={"active"} to = "/contacto">Contacto</NavLink>
    </nav>
  )
}

export default Navbar