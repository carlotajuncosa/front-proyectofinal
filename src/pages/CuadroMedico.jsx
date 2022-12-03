import React from 'react'
import FormContact from '../componentes/FormContact';
import Map from '../componentes/Map';
import "../styles/CuadroMedico.scss";

const CuadroMedico = () => {
  return (
    <div className='medicalChart'>
      <h2 className='title'>Cuadro Medico</h2>
      <div className='medicalChart__search'>
      <input type="search" name="medicalsearch" placeholder="Buscar Doctor" />
      </div>
        <FormContact />
        <Map />
    </div>
  )
}

export default CuadroMedico