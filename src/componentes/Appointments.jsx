import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AreaCliente from "../pages/AreaCliente";
import Loader from "./Loader";
import {
  deleteAppointment,
  getAppointments,
  getPatientAppointments,
} from "../redux/appointments/appointments.actions";
import "../styles/Appointments.scss";

const Appointments = () => {
  const dispatch = useDispatch();
  const { appointments, isLoading, error } = useSelector(
    (state) => state.appointments
  );

  const deleteOne = (id) => {
    dispatch(deleteAppointment(id));
  }

  useEffect(() => {
    dispatch(getPatientAppointments());
  }, []);

  return (
    <div className="container">
      <div className="appointments">
        {isLoading && (<Loader />)}
        {appointments.length <= 0 && <h4 className="noAppointments">No hay citas</h4>}
        {!error && appointments &&
          appointments.map((appointment) => {
            if (appointment !== null){
            return (
              <div className="appointments__cards" key={appointment.id}>
                {/* boton anular citas 
                      link videollamada */}
                <h3>Cita</h3>
                <div className="appointments__cards--info">
                  <p>
                    Especialidad: <span>{appointment.specialty}</span>
                  </p>
                  <p>
                    Modalidad: <span>{appointment.modality}</span>
                  </p>
                  <p>
                    Dia: <span>{appointment.day}</span>
                  </p>
                  <p>
                    Hora: <span>{appointment.hour}</span>
                  </p>
                </div>
                <div>
                  <button onClick={ () => deleteOne(appointment._id)} className="primary_button">Cancelar Cita</button>
                </div>
              </div>
            )}
          })
        }
      </div>
    </div>
  );
};

export default Appointments;
