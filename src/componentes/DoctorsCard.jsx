import React from 'react'
import "../styles/DoctorsCard.scss";

const DoctorsCard = ({doctor}) => {


  return (
      <div className="doctors">
        <div className="doctors__box--img">
            <img
                className="doctors__img"
                referrerPolicy="no-referrer"
                src={doctor.img}
                alt={doctor.marca}
            />
        </div>

      <div className="doctors__info">
        <h4>{doctor.name} {doctor.surname}</h4>
        <p>Especialidad: <span>{doctor.specialty}</span></p>
      </div>

    </div>
  )
}

export default DoctorsCard
