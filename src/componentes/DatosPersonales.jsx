import React, { useEffect } from "react";
import "../styles/DatosPersonales.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getPatients } from "../redux/patients/patients.actions";
import Loader from "./Loader";

const DatosPersonales = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { patients, isLoading, error } = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(getPatients());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const newPatient = (data) => {
    dispatch(newPatient(data));
  };

  return (
    <div>
      {!patients && (
        <>
          <form className="personalData__form" onSubmit={handleSubmit()}>
            <h3>Introduzca sus datos personales</h3>
            <label>
              Foto de perfil
              <input type="file" name="photo" id="photo"></input>
            </label>

            <label>
              Nombre
              <input type="name" name="name" id="name" />
            </label>

            <label>
              Apellidos
              <input type="text" name="surname" id="surname" />
            </label>

            <label>
              Teléfono:
              <input type="tel" name="phone" id="phone" />
            </label>

            <label>
              Género:
              <input type="text" name="genre" id="genre" />
            </label>

            <label>
              DNI:
              <input type="text" name="nif" id="nif" />
            </label>

            <label>
              Fecha de nacimiento:
              <input type="text" name="birth_date" id="birth_date" />
            </label>

            <button className="primary_button">Área Cliente</button>
          </form>
        </>
      )}
      {patients && (
        <>
        {patients.map((patient) => {
          return (
            <div>
              <p>{patient.name}</p> 
              <p>{patient.surname}</p>
              <p>{patient.genre}</p>
              <p>{patient.phone}</p>
              <p>{patient.nif}</p>
              <p>{patient.birth_date}</p>  
            </div>
          )
        })} 
          
        </>
      )}
    </div>
  );
};
export default DatosPersonales;
