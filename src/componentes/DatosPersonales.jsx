import React, { useEffect, useState } from "react";
import "../styles/DatosPersonales.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getPatients, newPatient, editPatient} from "../redux/patients/patients.actions";
import Loader from "./Loader";

const DatosPersonales = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const [edit, setEdit] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { patients, isLoading, error } = useSelector((state) => state.patients);
  const [patientData, setPatientData] = useState("");
  const [newUserData, setNewUserData] = useState({});

  useEffect(() => {
    dispatch(getPatients());
  }, []);

  useEffect(() => {
    setPatientData(patients[0]);
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

  const changeForm = (ev) => {
    const { value, name } = ev.target;

    setNewUserData({ ...newUserData, [name]: value });
  };

  const submitEditForm = (ev) => {
    ev.preventDefault();
    const formData = new FormData();
    formData.append("name", newUserData.name);
    formData.append("surname", newUserData.surname);
    formData.append("phone", newUserData.phone);
    formData.append("genre", newUserData.genre);
    formData.append("img", newUserData.img);
    formData.append("nif", newUserData.nif);
    formData.append("birth_date", newUserData.birth_date);
    dispatch(editPatient(formData));
    setEdit(false);

  };

  return (
    <div className="personalData__box">
      {isLoading && <Loader />}
      {!isLoading && patients.length <= 0 && (
        <div className="personalData">
          <form
            className="personalData__form"
            onSubmit={handleSubmit(createNewPatient)}
          >
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
              <input
                type="text"
                name="surname"
                id="surname"
                {...register("surname")}
              />
            </label>

            <label>
              Teléfono:
              <input
                type="number"
                name="phone"
                id="phone"
                {...register("phone")}
              />
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
              <input
                type="text"
                name="birth_date"
                id="birth_date"
                {...register("birth_date")}
              />
            </label>

            <button className="primary_button" type="submit">
              Enviar
            </button>
          </form>
        </div>
      )}
      {patients.length > 0 && (
        <>
          {patients.map((patient) => {
            return (
              <div className="dataPatient" key={patient._id}>
                <h3>Datos personales</h3>
                <div className="dataPatient__card">
                  <div className="dataPatient__container--img">
                    <img
                      className="dataPatient__img"
                      src={patient.img}
                      alt={patient.name}
                    />
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
                  <button
                    className="primary_button"
                    onClick={() => setEdit(true)}
                  >
                    Editar
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}
      {edit && (
        <div>
          <div className="personalData">
            <form className="personalData__form" onSubmit={submitEditForm}>
              <label htmlFor="img" className="primary_button">
                <p className="fakeButton">Foto de perfil</p>
              </label>
              <input
                type="file"
                name="img"
                id="img"
                accept=".png, .jpg, .jpeg"
                value={newUserData?.img}
                onChange={changeForm}
              />

              <label>
                Nombre
                <input
                  type="name"
                  name="name"
                  id="name"
                  defaultValue={patientData?.name}
                  value={newUserData?.name}
                  onChange={changeForm}
                />
              </label>

              <label>
                Apellidos
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  defaultValue={patientData?.surname}
                  value={newUserData?.surname}
                  onChange={changeForm}
                />
              </label>

              <label>
                Teléfono:
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  defaultValue={patientData?.phone}
                  value={newUserData?.phone}
                  onChange={changeForm}
                />
              </label>

              <label>
                Género:
                <select
                  name="genre"
                  id="genre"
                  defaultValue={patientData?.genre}
                  value={newUserData?.genre}
                  onChange={changeForm}
                >
                  <option disabled selected>
                    selecciona una opción
                  </option>
                  <option id="genre" value="female">
                    female
                  </option>
                  <option id="genre" value="male">
                    male
                  </option>
                  <option id="genre" value="undefined">
                    undefined
                  </option>
                </select>
              </label>

              <label>
                DNI:
                <input
                  type="text"
                  name="nif"
                  id="nif"
                  defaultValue={patientData?.nif}
                  value={newUserData?.nif}
                  onChange={changeForm}
                />
              </label>

              <label>
                Fecha de nacimiento:
                <input
                  type="text"
                  name="birth_date"
                  id="birth_date"
                  defaultValue={patientData?.birth_date}
                  value={newUserData?.birth_date}
                  onChange={changeForm}
                />
              </label>
              <button className="primary_button" type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default DatosPersonales;
