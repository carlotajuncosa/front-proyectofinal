import React from 'react'
import "../styles/DoctorsCard.scss";

const DoctorsCard = ({doctor}) => {


  return (
      <div className="doctors">
        <div className="doctors__img">
            <img
                referrerPolicy="no-referrer"
                src={doctor.img}
                alt={doctor.marca}
            />
        </div>

      <div className="doctors__info">
        <h4>{doctor.name} {doctor.surname}</h4>
        <p>Especialidad: {doctor.specialty}</p>
      </div>

    </div>
  )
}

export default DoctorsCard