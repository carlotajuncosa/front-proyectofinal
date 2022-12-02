import React from "react";
import FormLogin from "../componentes/FormLogin";
import FormAppointment from "../componentes/FormAppointment";

const PedirCita = () => {
  const user = localStorage.user;
  return (
    <> 
      {!user && (
        <>
          <h3>¿Aún no eres cliente?</h3>
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
          <FormLogin type="login" />
        </>
      )}
      {user && <FormAppointment />}
    </>
  );
};

export default PedirCita;
