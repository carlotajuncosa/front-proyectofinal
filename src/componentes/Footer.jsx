import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.scss";

const Footer = () => {

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <li className="footer__li" href={`mailto:${email}${params}`}>{children}</li>;
  };

  return (
    <div className="footer">
      <NavLink className="footer__logo">
        <img src="../../assets/logo/logo_no_text.svg" alt="logo" />
        <p>Health</p>
        <p>Algorithm</p>
      </NavLink>
      <ul className="footer__ul">
        <h3>Centro</h3>
        <NavLink to="/centro" className="footer__links">
          <li className="footer__li">Historia</li>
        </NavLink>
        <NavLink to="/" className="footer__links">
          <li className="footer__li">Localización</li>
        </NavLink>
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
        <NavLink to="/" className="footer__links">
          <li className="footer__li">Cardiología</li>
        </NavLink>
        <NavLink to="/" className="footer__links">
          <li className="footer__li">Traumatología</li>
        </NavLink>
        <NavLink to="/" className="footer__links">
          <li className="footer__li">Neurología</li>
        </NavLink>
        <NavLink to="/" className="footer__links">
          <li className="footer__li">Psiquiatría</li>
        </NavLink>
        <NavLink to="/" className="footer__links">
          <li className="footer__li">Gastroenterología</li>
        </NavLink>
        <NavLink to="/" className="footer__links">
          <li className="footer__li">Ginecología/Obstetricia</li>
        </NavLink>
      </ul>
      <ul className="footer__ul">
        <h3>Area Diagnóstica</h3>
        <NavLink to="/" className="footer__links">
          <li className="footer__li">Chequeo General</li>
        </NavLink>
        <NavLink to="/" className="footer__links">
          <li className="footer__li">Hemodinámica/Cardiología</li>
        </NavLink>
        <NavLink to="/" className="footer__links">
          <li className="footer__li">Diagnóstico por imagen</li>
        </NavLink>
        <NavLink to="/" className="footer__links">
          <li className="footer__li">Analisis Clínicos</li>
        </NavLink>
        <NavLink to="/" className="footer__links">
          <li className="footer__li">Anatomía Patologica</li>
        </NavLink>
        <NavLink to="/" className="footer__links">
          <li className="footer__li">Endoscopia</li>
        </NavLink>
      </ul>
      <ul className="footer__ul">
        <h3>Area Cliente</h3>
        <NavLink to="/" className="footer__links">
          <li className="footer__li">Comunicación Directa</li>
        </NavLink>
        <NavLink to="/" className="footer__links">
          <li className="footer__li">Citas Pendientes</li>
        </NavLink>
        <NavLink to="/" className="footer__links">
          <li className="footer__li">Historial Médico</li>
        </NavLink>
        <NavLink to="/area-cliente" className="footer__links">
          <li className="footer__li">Login/Registro</li>
        </NavLink>
      </ul>
      <ul className="footer__contact">
        <p>Telefono:</p>
        <span>902 02 02 02</span>
        <p>E-mail:</p>
        {<Mailto email="info@healthalgorithm.es" subject="Contacto desde web" body="">
    info@healthalgorithm.es
  </Mailto>}
      </ul>
    </div>
  );
};

export default Footer;
