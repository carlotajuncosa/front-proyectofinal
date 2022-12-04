import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import AreaCliente from '../pages/AreaCliente';
import { getAppointments } from '../redux/appointments/appointments.actions';
import "../styles/Appointments.scss";

const Appointments = () => {

    const dispatch = useDispatch();
    const { appointments, isLoading, error } = useSelector((state) => state.appointments);

    useEffect(() => {
        dispatch(getAppointments());
    }, []);

    return (
    <div className='container'>
      <AreaCliente/>
      <div className='appointments'>
      {isLoading ? (
        <h2>Cargando todas las citas...</h2>
      ) : !error ? (
        appointments.map((appointment) => {
          return (
              <div className="appointments__cards" key={appointment.id}>
                  <h3>Cita</h3>
                  <div className='appointments__cards--info'>
                    <p>Especialidad: <span>{appointment.specialty}</span></p>
                    <p>Modalidad: <span>{appointment.modality}</span></p>
                    <p>Dia: <span>{appointment.day}</span></p>
                    <p>Hora: <span>{appointment.hour}</span></p>
                  </div>
              </div>
          );
        })
      ) : (
        <div>
          <h2>{error}</h2>
        </div>
      )}
      </div>
    </div>
  )
}

export default Appointments
