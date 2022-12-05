import React from "react";
import "../styles/FormAppointment.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newAppointment } from "../redux/appointments/appointments.actions";

const FormAppointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newAppointments = (data) => {
    dispatch(newAppointment(data, navigate));
  };

  return (
    <div className="formAppointment__box">
      <div className="formAppointment">
      <form
        className="formAppointment__form"
        onSubmit={handleSubmit(newAppointments)}
      >
        <h2>Pedir Cita</h2>
        <div className="inputForm">
          <label>
            <p>Especialidad:</p>
          </label>
          <select 
          name="select" 
          id="specialty"
          {...register("specialty", {
            required: true,
          })}>
            <option disabled selected value> -- selecciona una opción -- </option>
            <option id="specialty">Cardiología</option>
            <option id="specialty">Traumatología</option>
            <option id="specialty">Dermatología</option>
            <option id="specialty">Psiquiatría</option>
            <option id="specialty">Gastroenterología</option>
            <option id="specialty">Ginecología</option>
          </select>
        </div>

        <div className="inputForm">
          <label>
          <p>Modalidad:</p>
          </label>
          <select 
          name="select" 
          id="modality" 
          {...register("modality", {
              required: true,
            })}>
            <option disabled selected value>
              {" "}
              -- selecciona una opción --{" "}
            </option>
            <option id="modality">Presencial</option>
            <option id="modality">Telefónica</option>
            <option id="modality">Videollamada</option>
          </select>

        </div>

        <label htmlFor="day">
          <p>Dia</p>
        </label>
        <div className="inputForm">
          <input
            id="day-fns"
            type="date"
            {...register("day", {
              required: true,
            })}
          />
        </div>
        <label htmlFor="hour">
          <p>Hora</p>
        </label>
        <div className="inputForm">
          <input
            id="hour"
            type="time"
            min="09:00" max="20:30"
            {...register("hour", {
              required: true,
            })}
          />
        </div>
        <label htmlFor="file" className="primary_button">
          <p className="fakeButton">Adjunte un documento si es necesario</p>
        </label>
        <div>
          <input
            id="file"
            type="file"
            accept=".pdf, .png, .jpg, .jpeg, .doc, .docx"
            placeholder="pulsa aqui"
          />
        </div>
        <button className="primary_button" type="submit" disabled={!isValid}>
          Enviar
        </button>
      </form>
      </div>
    </div>
  );
};

export default FormAppointment;
