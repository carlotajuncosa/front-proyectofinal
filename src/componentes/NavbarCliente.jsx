import React from 'react'
import ButtonLogout from './ButtonLogout'
import "../styles/NavbarCliente.scss";


const NavbarCliente = ({ changeOption }) => {
  return (
    <>
          <div className="client">
            <nav className="client__nav">
              <p className="client__links" onClick={() => changeOption("PedirCita")}>Pedir Cita</p>
              <p className="client__links" onClick={() => changeOption("DatosPersonales")}>Datos personales</p>
              <p className="client__links" onClick={() => changeOption("Citas")}>Citas</p>
              <div className="client__logout">
                <ButtonLogout />
              </div>
            </nav>
          </div>
        </>
  )
}

export default NavbarCliente