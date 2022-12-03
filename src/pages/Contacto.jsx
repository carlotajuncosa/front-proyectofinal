import React from "react";
import FormContact from "../componentes/FormContact";
import Map from "../componentes/Map";
import "../styles/Contacto.scss";

const Contacto = () => {
  return (
    <div className="contact">
      <h2 className="contact__title">Dudas y Consultas</h2>
      <div className="contact">
        <ul className="contact__ul">
          <li className="contact__ul--li">
            Tel: 900 302 013 / info@healthalgorithm.es
          </li>
        </ul>
      </div>
      <FormContact />
      <Map />
    </div>
  );
};

export default Contacto;
