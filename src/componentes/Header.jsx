import React from "react";
import "../styles/Header.scss";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Centro from "../pages/Centro";
import Especialidades from "../pages/Especialidades";
import CuadroMedico from "../pages/CuadroMedico";
import Areadiagnostica from "../pages/Areadiagnostica";
import AreaCliente from "../pages/AreaCliente";
import PedirCita from "../pages/PedirCita";
import Contacto from "../pages/Contacto";
import { Route, Routes } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img
      className="header__logo"
        src="https://i.pinimg.com/736x/25/c2/fb/25c2fb35ebfd413edd0a61d12e33b9b6.jpg"
        alt="logo-athena"
      />
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} className="allMovies" />
        <Route path="/centro" element={<Centro />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/cuadro-medico" element={<CuadroMedico />} />
        <Route path="/area-diagnostica" element={<Areadiagnostica />} />
        <Route path="/area-cliente" element={<AreaCliente />} />
        <Route path="/pedir-cita" element={<PedirCita />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
};

export default Header;
