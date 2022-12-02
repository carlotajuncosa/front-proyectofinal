import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src="../../assets/logo/logo_no_text.svg" alt="logo" />
        <p>Health</p>
        <p>Algorithm</p>
      </div>
      <ul className="footer__ul">
        <h3>Centro</h3>
        <li className="footer__li">Historia</li>
        <li className="footer__li">Localización</li>
        <li className="footer__li footer__li__horario">Horario de atención al cliente</li>
        <li className="footer__li footer__li__p">
          <p>Lunes a viernes</p>
          <p>09:00 a 21:00</p>
          <p>Sabados, domingos y festivos</p>
          <p>09:00 a 15:00</p>
        </li>
      </ul>
      <ul className="footer__ul">
        <h3>Especialidades</h3>
        <li className="footer__li">Cardiología</li>
        <li className="footer__li">Traumatología</li>
        <li className="footer__li">Neurología</li>
        <li className="footer__li">Psiquiatría</li>
        <li className="footer__li">Gastroenterología</li>
        <li className="footer__li">Ginecología/Obstetricia</li>
      </ul>
      <ul className="footer__ul">
        <h3>Area Diagnóstica</h3>
        <li className="footer__li">Chequeo General</li>
        <li className="footer__li">Hemodinámica/Cardiología</li>
        <li className="footer__li">Diagnóstico por imagen</li>
        <li className="footer__li">Analisis Clínicos</li>
        <li className="footer__li">Anatomía Patologica</li>
        <li className="footer__li">Endoscopia</li>
      </ul>
      <ul className="footer__ul">
        <h3>Area Cliente</h3>
        <li className="footer__li">Comunicación Directa</li>
        <li className="footer__li">Citas Pendientes</li>
        <li className="footer__li">Historial Médico</li>
        <li className="footer__li">Login/Registro</li>
      </ul>
      <ul className="footer__contact">
        <p>Telefono:</p>
        <span>902 02 02 02</span>
        <p>E-mail:</p>
        <span>info@healthalgorithm.es</span>
      </ul>
    </div>
  );
};

export default Footer;
