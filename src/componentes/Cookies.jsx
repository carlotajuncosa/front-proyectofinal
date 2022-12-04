import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Cookies.scss";

const Cookies = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  
  const setCookies = (value) => {
    const cookiesState = localStorage.setItem("cookiesAccepted", value);
    setCookiesAccepted(value) 
  };

  useEffect(() => {
    const cookiesState = localStorage.getItem("cookiesAccepted");  
    setCookiesAccepted(cookiesState)
  }, []);

  return (
    <>
      {!cookiesAccepted && (
        <div className="cookiesBanner">
          <div className="cookiesBanner__title">
            <img src="/assets/cookies-icon.svg" alt="cookies" />
            <h3>El rollo de las Cookies</h3>
          </div>
          <div className="cookiesBanner__text">
            <p>
              Usamos cookies para mejorar su experiencia de navegación en nuestra web, para mostrarle contenidos
              personalizados y para analizar el tráfico en nuestra web.
              <NavLink to="/cookies">
                <span>Ver política de cookies</span>
              </NavLink>
            </p>
          </div>
          <div className="cookiesBanner__buttons">
            <button className="accept primary_button" onClick={() => setCookies("Yes")}>Aceptar</button>
            <button className="decline primary_button" onClick={() => setCookies("No")}>Rechazar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
