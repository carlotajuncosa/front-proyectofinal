import React, { useEffect, useState } from "react";
import "../styles/DatosPersonales.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getPatients, newPatient, editPatient } from "../redux/patients/patients.actions";
import Loader from "./Loader";

const DatosPersonales = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  const { patients, isLoading, error } = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(getPatients());
  }, []);

  useEffect(() => {
    reset(patients[0]);
  }, [patients]);

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

  const editPatientData = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("phone", data.phone);
    formData.append("genre", data.genre);
    formData.append("img", data.img[0]);
    formData.append("nif", data.nif);
    formData.append("birth_date", data.birth_date);
    dispatch(editPatient(formData));
    setEdit(false);
  };

  return (
    <div className="personalData__box">
      {isLoading && <Loader />}
      {!isLoading && patients.length <= 0 && (
        <div className="personalData">
          <form className="personalData__form" onSubmit={handleSubmit(createNewPatient)}>
            <h3>Datos personales</h3>
            <label htmlFor="img" className="primary_button">
              <p className="fakeButton">Foto de perfil</p>
            </label>
            <input
              type="file"
              name="photo"
              id="img"
              placeholder="Imagen de perfil"
              accept=".png, .jpg, .jpeg"
              {...register("img", { required: true })}
            />

            <label>
              Nombre
              <input type="name" name="name" id="name" {...register("name")} />
            </label>

            <label>
              Apellidos
              <input type="text" name="surname" id="surname" {...register("surname")} />
            </label>

            <label>
              Teléfono:
              <input type="number" name="phone" id="phone" {...register("phone")} />
            </label>

            <label>
              Género:
              <select
                name="genre"
                id="genre"
                {...register("genre", {
                  required: true,
                })}
              >
                <option disabled selected value>
                  selecciona una opción
                </option>
                <option id="genre">female</option>
                <option id="genre">male</option>
                <option id="genre">undefined</option>
              </select>
            </label>

            <label>
              DNI:
              <input type="text" name="nif" id="nif" {...register("nif")} />
            </label>

            <label>
              Fecha de nacimiento:
              <input type="text" name="birth_date" id="birth_date" {...register("birth_date")} />
            </label>

            <button className="primary_button" type="submit">
              Enviar
            </button>
          </form>
        </div>
      )}
      {patients.length > 0 && !edit &&(
        <>
          {patients.map((patient) => {
            return (
              <div className="dataPatient" key={patient._id}>
                <h3>Datos personales</h3>
                <div className="dataPatient__card">
                  <div className="dataPatient__container--img">
                    <img className="dataPatient__img" src={patient.img} alt={patient.name} />
                  </div>
                  <p className="dataPatient__p">
                    Nombre: <span>{patient.name}</span>
                  </p>
                  <p className="dataPatient__p">
                    Apellido: <span>{patient.surname}</span>
                  </p>
                  <p className="dataPatient__p">
                    Genero: <span>{patient.genre}</span>
                  </p>
                  <p className="dataPatient__p">
                    Teléfono: <span>{patient.phone}</span>
                  </p>
                  <p className="dataPatient__p">
                    DNI: <span>{patient.nif}</span>
                  </p>
                  <p className="dataPatient__p">
                    Fecha de nacimiento: <span>{patient.birth_date}</span>
                  </p>
                  <button className="primary_button" onClick={() => setEdit(true)}>
                    Editar
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}
      {edit && (
        <div className="personalData">
          <form className="personalData__form" onSubmit={handleSubmit(editPatientData)}>
            <h3>Datos personales</h3>
            <label htmlFor="img" className="primary_button">
              <p className="fakeButton">Foto de perfil</p>
            </label>
            <input type="file" name="img" id="img" {...register("img")} />

            <label>
              Nombre
              <input type="name" name="name" id="name" {...register("name")} />
            </label>

            <label>
              Apellidos
              <input type="text" name="surname" id="surname" {...register("surname")} />
            </label>

            <label>
              Teléfono:
              <input type="number" name="phone" id="phone" {...register("phone")} />
            </label>

            <label>
              Género:
              <select
                name="genre"
                id="genre"
                {...register("genre", {
                  required: true,
                })}
              >
                <option disabled selected value>
                  selecciona una opción
                </option>
                <option id="genre">female</option>
                <option id="genre">male</option>
                <option id="genre">undefined</option>
              </select>
            </label>

            <label>
              DNI:
              <input type="text" name="nif" id="nif" {...register("nif")} />
            </label>

            <label>
              Fecha de nacimiento:
              <input type="text" name="birth_date" id="birth_date" {...register("birth_date")} />
            </label>

            <button className="primary_button" type="submit">
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default DatosPersonales;
