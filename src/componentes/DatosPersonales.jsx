import React, { useEffect } from "react";
import "../styles/DatosPersonales.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getPatients } from "../redux/patients/patients.actions";
import Loader from "./Loader";

const DatosPersonales = () => {
  const dispatch = useDispatch();
  const { patients, isLoading, error } = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(getPatients());
    console.log('PATIENT', patients)
  }, []);

  return (
    <div className="container">
      <div className="personalData">
        {isLoading ? (
          <Loader />
        ) : (
          !error &&
          patients.map((patient) => {
            
            return (
              <form>
                <h3>Datos personales</h3>
                <div className="personalData__box--img">
                  <p>Foto de perfil</p>
                  <img
                    className="patient__img"
                    referrerPolicy="no-referrer"
                    src={patient.img}
                    alt={patient.marca}
                  />
                </div>
                <div className="patient__info">
                  <p>
                    Nombre:{" "}
                    {patient.name ? (
                      patient.name
                    ) : (
                      <input type="name" name="name" id="name" />
                    )}
                  </p>

                  <p>
                    Apellido:{" "}
                    {patient.surname ? (
                      patient.surname
                    ) : (
                      <input type="text" name="surname" id="surname" />
                    )}
                  </p>

                  <p>
                    Teléfono:{" "}
                    {patient.phone ? (
                      patient.phone
                    ) : (
                      <input type="tel" name="phone" id="phone" />
                    )}
                  </p>

                  <p>Género: {patient.genre ? (
                    patient.genre
                  ) : (
                    <input type="text" name="genre" id="genre" />
                  )}</p>

                  <p>
                    DNI:{" "}
                    {patient.nif ? (
                      patient.nif
                    ) : (
                      <input type="text" name="nif" id="nif" />
                    )}
                  </p>

                  <p>
                    Fecha de nacimiento:{" "}
                    {patient.birth_date ? (
                    patient.birth_date 
                    ) : (
                        <input type="text" name="birth_date" id="birth_date" />
                    )}
                    </p>
                    <button className="primary_button">Área Cliente</button>
                </div>
                    </form>
            );
          })
        )}

        {/*  {/* Botton update --> form 
        <form onSubmit={handleSubmit(contact)} className="personalData__form">
          <h2 className="personalData__h2">Datos Personales</h2>
          {/*  modelo patient 
        </form> */}
      </div>
    </div>
  );
};

export default DatosPersonales;
