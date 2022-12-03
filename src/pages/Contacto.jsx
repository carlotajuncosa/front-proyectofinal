import React from 'react'
import FormContact from '../componentes/FormContact';
import Map from '../componentes/Map';
import "../styles/Contacto.scss";

const Contacto = () => {
  return (
    <div className='contact'>
    <FormContact/>
    <div className='contact'>
    <ul className="contact__ul">
        <li className="contact__ul--li">
          Tel: 900 302 013 / info@healthalgorithm.es
        </li>
      </ul>
    </div>
    <Map />
    </div>
  )
}

export default Contacto