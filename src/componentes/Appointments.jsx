import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getAppointments } from '../redux/appointments/appointments.actions';

const Appointments = () => {

    const dispatch = useDispatch();
    const { appointments, isLoading, error } = useSelector((state) => state.appointments);

    useEffect(() => {
        dispatch(getAppointments());
    }, []);

    return (
    <div>
      {isLoading ? (
        <h2>Cargando todas las citas...</h2>
      ) : !error ? (
        appointments.map((appointment) => {
          return (
            <div className="character" key={appointment.id}>
                <h3>Citas</h3>
                <p>{appointment.specialty}</p>
                <p>{appointment.modality}</p>
                <p>{appointment.day}</p>
                <p>{appointment.hour}</p>
            </div>
          );
        })
      ) : (
        <div>
          <h2>{error}</h2>
        </div>
      )}
    </div>
  )
}

export default Appointments
