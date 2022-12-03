import React from "react";
import FormLogin from "../componentes/FormLogin";
import FormAppointment from "../componentes/FormAppointment";
import { useSelector } from "react-redux";
import "../styles/PedirCita.scss";
const PedirCita = () => {
  const {user, token} = useSelector((state) => state.auth)
  return (
    <> 
      {!user && (
        <>
        <div className="pedirCita">
          <h2 className="title">¿Aún no eres cliente?</h2>
          <h4>
            Los datos introducidos en este formulario serán tratados de forma
            confidencial.
          </h4>
          <p>
            Descubre todas las ventajas que tendrias como paciente de nuestra
            clinica
          </p>
          <p>
            Rogamos, si es urgente, contacte directamente con Atención al
            Paciente en info@atenea.es
          </p>
        </div>
        <FormLogin type="login" />
        </>
      )}
      {user && (
        <>
        <h2 className="title">Solicita tu cita online</h2>
        <FormAppointment />
        </>
      )}
    </>
  );
};

export default PedirCita;
