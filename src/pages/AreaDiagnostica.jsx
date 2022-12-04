import React from "react";
import "../styles/AreaDiagnostica.scss";
import { NavLink } from "react-router-dom";

const AreaDiagnostica = () => {
  return (
    <div className="diag">
      <h2 className="diag__title">Área Diagnóstica</h2>
      <div className="diag__container">
        <div className="diag__box">
          <div className="diag__box--img">
            <img
              className="diag__img"
              src="https://img.saludsavia.com/wp-content/uploads/2019/06/Chequeo-Medico-Completo.jpg"
              alt="chequeo"
            ></img>
          </div>
          <div className="diag__box--text">
            <NavLink to="/chequeo" className="footer__links">
              <h3 className="diag__box--title">Chequeo General</h3>
            </NavLink>
            <p className="diag__box--p">
              Los Chequeos Generales están orientados a evaluar tu estado de
              salud y prevenir algunas patologías asociadas a tu tipo de
              trabajo, sexo, edad, estilo de vida e historia clínica personal y
              familiar.
            </p>
          </div>
        </div>
        <div className="diag__box diag__box--reverse">
          <div className="diag__box--text">
            <NavLink to="/hemocardio" className="footer__links">
              <h3 className="diag__box--title">
                Hemodinámica <div>& Cardiología</div>
              </h3>
            </NavLink>
            <p className="diag__box--p">
              El estudio y tratamiento de la enfermedad de las arterias
              coronarias se efectúa con una técnica mínimamente invasiva.
              Además, en la Unidad Hemodinámica se realizan cateterismos
              cardíacos diagnósticos y se interviene en las arterias coronarias
              con implantación de stents o de las válvulas del corazón.
            </p>
          </div>
          <div className="diag__box--img">
            <img
              className="diag__img"
              src="https://www.clinicapremium.com/wp-content/uploads/2019/03/especialidad-de-cardiologia-en-marbella.jpg"
              alt="Hemodinámica/Cardiología"
            ></img>
          </div>
        </div>
        <div className="diag__box">
          <div className="diag__box--img">
            <img
              className="diag__img"
              src="https://www.topdoctors.mx/files/Image/large/4c6934060ae163b5675ba58855babe70.jpg"
              alt="Diagnóstico por imagen"
            ></img>
          </div>
          <div className="diag__box--text">
            <NavLink to="/imagen" className="footer__links">
              <h3 className="diag__box--title">Diagnóstico por imagen</h3>
            </NavLink>
            <p className="diag__box--p">
              El diagnóstico por imágenes permite a los profesionales de la
              salud observar el interior del cuerpo para buscar indicios de una
              afección médica. Una variedad de aparatos y técnicas pueden crear
              imágenes de las estructuras y procesos dentro de su cuerpo. El
              tipo de imagen que use el médico dependerá de sus síntomas y de la
              parte del cuerpo que debe examinarse.
            </p>
          </div>
        </div>
        <div className="diag__box diag__box--reverse">
          <div className="diag__box--text">
            <NavLink to="/analisis" className="footer__links">
              <h3 className="diag__box--title">Análisis Clínicos</h3>
            </NavLink>
            <p className="diag__box--p">
              En un primer acercamiento, podemos decir que el análisis clínico
              es un tipo de prueba exploratoria que consiste en la toma de
              muestras biológicas de un paciente y su examen en laboratorio para
              confirmar o descartar un diagnóstico, detectar anomalías u obtener
              la información necesaria para aplicar un determinado tratamiento o
              cualquier otro procedimiento terapéutico.
            </p>
          </div>
          <div className="diag__box--img">
            <img
              className="diag__img"
              src="https://www.lgs-analisis.es/wp-content/uploads/2019/09/2553-1-750x375.jpg"
              alt="Análisis Clínicos"
            ></img>
          </div>
        </div>
        <div className="diag__box">
          <div className="diag__box--img">
            <img
              className="diag__img"
              src="https://www.ceac.es/sites/default/files/2022-07/CEACBLOG-diferencia-anatomia-patologica-laboratorio-clinico-0722.jpg.webp"
              alt="Análisis Patológica"
            ></img>
          </div>
          <div className="diag__box--text">
            <NavLink to="/patologica" className="footer__links">
              <h3 className="diag__box--title">Anatomía Patológica</h3>
            </NavLink>
            <p className="diag__box--p">
              La anatomía patológica es un área de la medicina que estudia las
              bases morfológicas de la enfermedad. El origen de la anatomía
              patológica es tan antiguo como la medicina, ya que se basa en la
              observación directa del órgano enfermo.
            </p>
          </div>
        </div>
        <div className="diag__box diag__box--reverse">
          <div className="diag__box--text">
            <NavLink to="/endoscopia" className="footer__links">
              <h3 className="diag__box--title">Endoscopia</h3>
            </NavLink>
            <p className="diag__box--p">
              La endoscopia gastrointestinal es un procedimiento que hace el
              médico con un endoscopio (un tubo flexible con una cámara) para
              ver el revestimiento de la parte superior del aparato digestivo.
            </p>
          </div>
          <div className="diag__box--img">
            <img
              className="diag__img"
              src="https://www.65ymas.com/uploads/s1/14/49/33/bigstock-team-of-doctors-performing-end-253620625.jpeg"
              alt="Endoscopia"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaDiagnostica;
