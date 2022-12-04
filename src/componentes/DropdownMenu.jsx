import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/DropdownMenu.scss";

const DropdownMenu = ({ toggleMenu, menu}) => {
 
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a className="dropdownMenu__a--mail" href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div className={menu ? "dropdownMenu active--menu": "dropdownMenu"}>
      <NavLink
        onClick={toggleMenu}
        activeclassname={"active"}
        to="/"
        className="dropdownMenu__logo"
      >
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
            className="dropdownMenu__svg--x"
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
          Cuadro Médico
        </NavLink>
        <NavLink
          onClick={toggleMenu}
          activeclassname={"active"}
          to="/area-diagnostica"
          className="dropdownMenu__links"
        >
          Área Diagnostica
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
      <ul className="dropdownMenu__ul">
        <li className="dropdownMenu__li dropdownMenu__li--horario">
          Horario de atención al cliente
        </li>
        <p className="dropdownMenu__links dropdownMenu__links--inactive">Lunes a viernes</p>
        <p className="dropdownMenu__links dropdownMenu__links--inactive">09:00 a 21:00</p>
        <p className="dropdownMenu__links dropdownMenu__links--inactive">Sábados, domingos y festivos</p>
        <p className="dropdownMenu__links dropdownMenu__links--inactive">09:00 a 15:00</p>
        <li className="dropdownMenu__links">
          <img
            className="dropdownMenu__li--svg"
            src="../../assets/contact/phone.svg"
            alt="phone"
          />
          <a href="tel:902-02-02-02">902 02 02 02</a>
        </li>
        <li className="dropdownMenu__li">
          <div className="dropdownMenu__mail">
            <img
              className="dropdownMenu__li--svg"
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
      </ul>
    </div>
  );
};

export default DropdownMenu;
