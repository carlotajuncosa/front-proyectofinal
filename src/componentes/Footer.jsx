import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.scss";

const Footer = () => {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a className="dropdownMenu__a" href={`mailto:${email}${params}`}>{children}</a>;
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
      </ul>
      <ul className="footer__ul">
        <h3>Especialidades</h3>
        <NavLink to="/cardiologia" className="footer__links">
          <li className="footer__li">Cardiología</li>
        </NavLink>
        <NavLink to="/traumatologia" className="footer__links">
          <li className="footer__li">Traumatología</li>
        </NavLink>
        <NavLink to="/dermatologia" className="footer__links">
          <li className="footer__li">Dermatología</li>
        </NavLink>
        <NavLink to="/psiquiatria" className="footer__links">
          <li className="footer__li">Psiquiatría</li>
        </NavLink>
        <NavLink to="/gastroenterologia" className="footer__links">
          <li className="footer__li">Gastroenterología</li>
        </NavLink>
        <NavLink to="/ginecologia" className="footer__links">
          <li className="footer__li">Ginecología/Obstetricia</li>
        </NavLink>
      </ul>
      <ul className="footer__ul">
        <h3>Area Diagnóstica</h3>
        <NavLink to="/chequeo" className="footer__links">
          <li className="footer__li">Chequeo General</li>
        </NavLink>
        <NavLink to="/hemocardio" className="footer__links">
          <li className="footer__li">Hemodinámica/Cardiología</li>
        </NavLink>
        <NavLink to="/imagen" className="footer__links">
          <li className="footer__li">Diagnóstico por imagen</li>
        </NavLink>
        <NavLink to="/analisis" className="footer__links">
          <li className="footer__li">Analisis Clínicos</li>
        </NavLink>
        <NavLink to="/patologica" className="footer__links">
          <li className="footer__li">Anatomía Patologica</li>
        </NavLink>
        <NavLink to="/endoscopia" className="footer__links">
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
      <ul className="footer__ul">
        <li className="footer__li footer__li__p">
          <li className="footer__li footer__li__horario">
            Horario de atención al cliente
          </li>
          <p>Lunes a viernes</p>
          <p>09:00 a 21:00</p>
          <p>Sabados, domingos y festivos</p>
          <p>09:00 a 15:00</p>
          <li className="footer__li">
            <img
              className="footer__li__svg"
              src="../../assets/contact/phone.svg"
              alt="phone"
            />
            <span>
              <a href="tel:902-02-02-02"> 902 02 02 02</a>
            </span>
          </li>
          <li className="footer__li">
            <div className="footer__mail">
              <img
                className="footer__li__svg"
                src="../../assets/contact/mail.svg"
                alt="email"
              />
              {
                <Mailto
                  email="info@healthalgorithm.es"
                  subject="Contacto desde footer de la web"
                  body="Estoy interesado en recibir informacion relacionada con ..."
                >
                  Email
                </Mailto>
              }
            </div>
          </li>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
