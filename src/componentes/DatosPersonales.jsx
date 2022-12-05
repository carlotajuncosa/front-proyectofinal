import React, { useEffect } from "react";
import "../styles/DatosPersonales.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getPatients, newPatient} from "../redux/patients/patients.actions";
import Loader from "./Loader";

const DatosPersonales = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { patients, isLoading, error } = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(getPatients());
  }, []);


  const createNewPatient = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("phone", data.phone);
    formData.append("genre", data.genre);
    formData.append("img", data.img[0]);
    formData.append("nif", data.nif);
    formData.append("birth_date", data.birth_date);
    dispatch(newPatient(formData));
  };

  return (
    <div>
      {/* {!patients && ( */}
        <>
          <form className="personalData__form" onSubmit={handleSubmit(createNewPatient)}>
            <h3>Introduzca sus datos personales</h3>
            <label>
              Foto de perfil
              <input type="file" name="photo" id="img" {...register("img")}></input>
            </label>

            <label>
              Nombre
              <input type="name" name="name" id="name" {...register("name")}/>
            </label>

            <label>
              Apellidos
              <input type="text" name="surname" id="surname" {...register("surname")}/>
            </label>

            <label>
              Teléfono:
              <input type="number" name="phone" id="phone" {...register("phone")}/>
            </label> 

            <label>
              Género:
              <input type="text" name="genre" id="genre" {...register("genre")}/>
            </label>

            <label>
              DNI:
              <input type="text" name="nif" id="nif" {...register("nif")}/>
            </label>

            <label>
              Fecha de nacimiento:
              <input type="text" name="birth_date" id="birth_date" {...register("birth_date")}/>
            </label>

            <button className="primary_button" type="submit">
              Enviar
            </button>
          </form>
        </>
      {patients && (
        <>
          {patients.map((patient) => {
            return (
              <div>
              <h1>DATOS</h1>
                <p>{patient.name}</p>
                <p>{patient.surname}</p>
                <p>{patient.genre}</p>
                <p>{patient.phone}</p>
                <p>{patient.nif}</p>
                <p>{patient.birth_date}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
export default DatosPersonales;
