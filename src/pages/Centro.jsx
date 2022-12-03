import React from 'react';
import "../styles/Centro.scss";
import FormContact from '../componentes/FormContact';
import Map from '../componentes/Map';

const Centro = () => {
  return (
    <div className="centro">
      <h2 className="title">Historia</h2>
      <div className="centro__content">
        <img src="https://www.vitafertilidad.com/wp-content/uploads/2016/10/salud-1.jpg" alt="clínica"></img>
        <p className="centro__content--info">     
          En Health Algorithm, nos preocupamos por su salud y la de su familia, 
          por ello y para dar cobertura a todas las necesidades de nuestros clientes, 
          contamos con un completo equipo médico de reconocido prestigio y amplia experiencia profesional.
        </p>
        <p className="centro__content--info">     
        Estamos comprometidos con la mejora continua, lo que nos permite ofrecer la asistencia sanitaria 
        de mayor calidad. Nuestro proyecto se basa en el convencimiento de que la apuesta por una 
        asistencia de excelencia va unida al compromiso de inversión permanente en nuestros profesionales.
        </p>
        <p className="centro__content--info">     
        Tecnología diagnóstica más avanzada y trabajo multidisciplinar para facilitar el diagnóstico 
        en las primeras 24-48h y el tratamiento dentro de las primeras 72h.
        </p>
      </div>
      <div className="centro__horario">
        <h3 className="centro__horario--title">Horario de atención al cliente</h3>
        <p className="centro__horario--info">Lunes a viernes: 09:00 a 21:00</p>
        <p className="centro__horario--info">Sabados, domingos y festivos 09:00 a 15:00</p>
      </div>
    <FormContact />
    <Map />
    </div>
  )
}

export default Centro