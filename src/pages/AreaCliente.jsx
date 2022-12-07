import React, { useEffect, useState } from "react";
import FormLogin from "../componentes/FormLogin";
import ButtonLogout from "../componentes/ButtonLogout";
import { useSelector } from "react-redux";
import "../styles/AreaCliente.scss";
import Appointments from "../componentes/Appointments";
import NavbarCliente from "../componentes/NavbarCliente";
import DatosPersonales from "../componentes/DatosPersonales";
import PedirCita from "./PedirCita";

const AreaCliente = () => {
  const { user } = useSelector((state) => state.auth);
  const [option, changeOption] = useState("Citas");

  return (
    <>
      <h2 className="title">Área Cliente</h2>
      {!user && <FormLogin type="login" />}
      {user && (
        <div>
          <NavbarCliente changeOption={changeOption}/>
          {option === "Citas" && <Appointments />}
          {option === "DatosPersonales" && <DatosPersonales />}
          {option === "PedirCita" && <PedirCita hide={"true"} changeOption={changeOption}/>}

        </div>
      )}
    </>
  );
};

export default AreaCliente;
