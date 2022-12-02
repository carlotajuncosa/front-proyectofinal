import React from 'react';
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
      <img
        src="../../assets/logo/logo_responsive2.svg"
        alt="logo"
      />
      </div>
      <ul className="footer__ul">
      <h3>Centro</h3>
      <li className="footer__li">
        Historia
      </li> 
      <li className="footer__li">
        Localización
      </li> 
      <li className="footer__li">
        Horario de atención al cliente
      </li> 
      <li className="footer__li">
        */BOTON CONTACTO/*
      </li> 
      </ul>
      <ul className="footer__ul">
      <h3>Especialidades</h3>  
      <li className="footer__li">
        Cardiología
      </li>
      <li className="footer__li">
        Traumatología
      </li> 
      <li className="footer__li">
        Neurología
      </li> 
      <li className="footer__li">
        Psiquiatría
      </li> 
      <li className="footer__li">
        Gastroenterología
      </li> 
      <li className="footer__li">
        Ginecología/Obstetricia
      </li>
      </ul>
      <ul className="footer__ul">
        <h3>Area Diagnóstica</h3>
        <li className="footer__li">
          Chequeo General
        </li>
        <li className="footer__li">
          Hemodinámica/Cardiología
        </li>
        <li className="footer__li">
          Diagnóstico por imagen
        </li>
        <li className="footer__li">
          Analisis Clínicos
        </li>
        <li className="footer__li">
          Anatomía Patologica
        </li>
        <li className="footer__li">
          Endoscopia
        </li>
      </ul>
      <ul className="footer__ul">
        <h3>Area Cliente</h3>
        <li className="footer__li">
        Comunicación Directa
        </li>
        <li className="footer__li">
        Citas Pendientes
        </li>
        <li className="footer__li">
        Historial Médico
        </li>
        <li className="footer__li">
        Login/Registro
        </li>
      </ul>
      <ul className="footer__contact">
        <p>Link al formulario</p>
        <p>Telefono</p>
        <p>Mail</p>
        <p>Mapa</p>
      </ul>
    </div>
  )
};

export default Footer;