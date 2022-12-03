import React from "react";
import FormLogin from "../componentes/FormLogin";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ButtonLogout from "../componentes/ButtonLogout";
import { useSelector } from "react-redux";
import "../styles/Schema.scss";

const AreaCliente = () => {
  const { user, token } = useSelector((state) => state.auth);

  return (
    <>
    <h2 className="title">Área Cliente</h2>
      {!user && <FormLogin type="login" />}
      {user && (
        <>
          <div className="client">
            <nav className="client__nav">
              <NavLink
                activeclassname={"active"}
                to="/user/client/{:id}/consulta-online"
                className="client__links"
              >
                Consulta online
              </NavLink>
              <NavLink
                activeclassname={"active"}
                to="/user/client/{:id}/citas"
                className="client__links"
              >
                Citas
              </NavLink>
              <NavLink
                activeclassname={"active"}
                to="/user/client/{:id}/informes"
                className="client__links"
              >
                Informes y resultados
              </NavLink>
              <ButtonLogout />
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default AreaCliente;
