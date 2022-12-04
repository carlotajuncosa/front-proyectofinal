import React from "react";
import "../styles/Especialidades.scss";
import { NavLink } from "react-router-dom";
import FormContact from "../componentes/FormContact";
const Especialidades = () => {
  return (
    <div className="especialidades">
      <h2 className="title">Especialidades</h2>
      <div className="especialidades__container">
        <div className="especialidades__box">
          <div className="especialidades__box--text">
          <NavLink to="/cardiologia" className="footer__links">
            <h3>Cardiología</h3>
          </NavLink> 
            <p>
              La Cardiología es la especialidad que se encarga del estudio y
              tratamiento de las enfermedades cardiovasculares.
            </p>
            <p>
              La patología cardiovascular constituye la primera causa de
              mortalidad en los países occidentales a pesar de los avances que
              se han producido, en los últimos años, en el conocimiento y
              control de los factores de riesgo cardiovascular. 
            </p>
          </div>
          <div className="especialidades__box--img">
            <img
              className="especialidades__img"
              width="400px"
              src="/assets/specialties/cardiologia.jpg"
              alt="cardiologia"
            />
          </div>
        </div>

        <div className="especialidades__box especialidades__box--reverse">
          <div className="especialidades__box--img">
            <img
              className="especialidades__img"
              width="400px"
              src="/assets/specialties/traumatologia.jpg"
              alt="traumatologia"
            />
          </div>
          <div className="especialidades__box--text">
          <NavLink to="/traumatologia" className="footer__links">
            <h3>Traumatología</h3>
          </NavLink> 
            <p>
              La Cirugía Ortopédica es una rama de la cirugía que se refiere los
              desórdenes del aparato locomotor, es decir, de sus partes
              musculares, óseas o articulares, lesiones agudas, crónicas,
              traumáticas… Tiene el campo de actuación en corregir problemas
              musculares, esqueléticos y articulares. 
            </p>
          </div>
        </div>

        <div className="especialidades__box">
          <div className="especialidades__box--text">
          <NavLink to="/dermatologia" className="footer__links">
            <h3>Dermatología</h3>
          </NavLink> 
            <p>
              La Dermatología es la especialidad médica encargada del estudio de
              la piel, su estructura, función y enfermedades
            </p>
            <p>
              La piel es el mayor órgano del cuerpo y, obviamente, el más
              visible. Aunque muchas enfermedades de este órgano se presentan
              aisladas, algunas de ellas son exteriorizaciones de dolencias
              internas y por lo tanto el dermatólogo tiene conocimientos en
              diferentes áreas de la medicina.
            </p>
          </div>
          <div className="especialidades__box--img">
            <img
              className="especialidades__img"
              width="400px"
              src="/assets/specialties/dermatologia.webp"
              alt="neurologia"
            />
          </div>
        </div>

        <div className="especialidades__box especialidades__box--reverse">
          <div className="especialidades__box--img">
            <img
              className="especialidades__img"
              width="400px"
              src="/assets/specialties/psiquiatria.jpg"
              alt="psiquiatria"
            />
          </div>
          <div className="especialidades__box--text">
          <NavLink to="/psiquiatria" className="footer__links">
            <h3>Psiquiatría</h3>
          </NavLink> 
            <p>La psiquiatría es la rama de la medicina dedicada al estudio de 
              los trastornos mentales con el objetivo de prevenir, evaluar, diagnosticar, 
              tratar y rehabilitar a las personas con trastornos mentales y asegurar la autonomía 
              y la adaptación del individuo a las condiciones de su existencia</p>
          </div>
        </div>

        <div className="especialidades__box">
          <div className="especialidades__box--text">
          <NavLink to="/gastroenterologia" className="footer__links">
            <h3>Gastroenterología</h3>
          </NavLink> 
            <p>
              La especialidad del aparato digestivo es la rama de la medicina
              que se ocupa del tubo digestivo, hígado, vías biliares y páncreas.
            </p>
          </div>
          <div className="especialidades__box--img">
            <img
              className="especialidades__img"
              width="400px"
              src="/assets/specialties/gastro.jpg"
              alt="gastroenterologia"
            />
          </div>
        </div>

        <div className="especialidades__box especialidades__box--reverse">
          <div className="especialidades__box--img">
            <img
              className="especialidades__img"
              width="400px"
              src="/assets/specialties/Gine.jpeg"
              alt="ginecologiaObstetricia"
            />
          </div>
          <div className="especialidades__box--text">
          <NavLink to="/ginecologia" className="footer__links">
            <h3>Ginecología</h3>
          </NavLink> 
            <p>
              La Ginecología hace referencia a la especialidad médica y
              quirúrgica que trata las enfermedades del sistema reproductor
              femenino (útero, vagina y ovarios).
            </p>
            <p>
              La Obstetricia es la parte de la medicina que se encarga de la
              gestación, el parto y el puerperio de la mujer (periodo desde el
              parto hasta que la mujer regresa a su estado anterior a la
              gestación).
            </p>
          </div>
        </div>
      </div>
      <FormContact />
    </div>
  );
};

export default Especialidades;
