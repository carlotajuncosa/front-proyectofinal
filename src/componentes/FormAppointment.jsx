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
          <select name="select">
            <option disabled selected value> -- selecciona una opción -- </option>
            <option>Cardiología</option>
            <option>Traumatología</option>
            <option>Neurología</option>
            <option>Psiquiatría</option>
            <option>Gastroenterología</option>
            <option>Ginecología</option>
          </select>
        </div>
        <div className="inputForm">
          <p>Modalidad:</p>
          <select name="select">
            <option disabled selected value>
              {" "}
              -- selecciona una opción --{" "}
            </option>
            <option>Presencial</option>
            <option>Telefónica</option>
            <option>Videollamada</option>
          </select>
        </div>
        <label htmlFor="day">
          <p>Dia</p>
        </label>
        <div className="inputForm">
          <input
            id="day"
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
        <label htmlFor="file">
          <p>Adjunte un documento si es necesario:</p>
        </label>
        <div className="inputForm">
          <input
            id="file"
            type="file"
            accept=".pdf, .png, .jpg, .jpeg, .doc, .docx"
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
