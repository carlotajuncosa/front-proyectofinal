import React from 'react'
import "../styles/Especialidades.scss";
import FormContact from "../componentes/FormContact";
const Especialidades = () => {
  return (
    <div className="especialidades">
      <h1 className='especialidades__title'>Especialidades</h1>
      <div className="especialidades__container">

        <div className="especialidades__box">
        <div className='especialidades__box__text'>
          <p>La Cardiología es la especialidad que se encarga del estudio y tratamiento de las enfermedades cardiovasculares.</p>
          <p>La patología cardiovascular constituye la primera causa de mortalidad en los países occidentales a pesar de los 
            avances que se han producido, en los últimos años, en el conocimiento y control de los factores de riesgo cardiovascular. 
            Por este motivo, es fundamental un diagnóstico precoz y preciso para poder realizar un tratamiento adecuado.</p>
          </div>
          <img width="400px" src="/assets/specialties/cardiologia.jpg" alt="cardiologia"/>
        </div>

        <div className="especialidades__box">
        <div className='especialidades__box__text'>
          <p>La Cirugía Ortopédica es una rama de la cirugía que se refiere los desórdenes del aparato locomotor, es decir, de sus 
            partes musculares, óseas o articulares, lesiones agudas, crónicas, traumáticas… Tiene el campo de actuación en corregir 
            problemas musculares, esqueléticos y articulares. La traumatología se ocupa de lesiones traumáticas de columna y extremidades 
            que afectan a los huesos, ligamentos y articulaciones, músculos y tendones y heridas en la piel.</p>
          </div>
          <img width="400px" src="/assets/specialties/traumatologia.jpg" alt="traumatologia"/>
        </div>

        <div className="especialidades__box">
          <div className='especialidades__box__text'>
          <p>La Dermatología es la especialidad médica encargada del estudio de la piel, su estructura, función y enfermedades</p>
          <p>La piel es el mayor órgano del cuerpo y, obviamente, el más visible. Aunque muchas enfermedades de este órgano se presentan 
            aisladas, algunas de ellas son exteriorizaciones de dolencias internas y por lo tanto el dermatólogo tiene conocimientos en 
            diferentes áreas de la medicina.</p>
          </div>
          <img width="400px" src="/assets/specialties/dermatologia.webp" alt="neurologia"/>
        </div>

        <div className="especialidades__box">
        <div className='especialidades__box__text'>
          <p>Esto es el texto de psiquiatria</p>
          </div>
          <img width="400px" src="/assets/specialties/psiquiatria.jpg" alt="psiquiatria"/>
        </div>

        <div className="especialidades__box">
        <div className='especialidades__box__text'>
          <p>La especialidad del aparato digestivo es la rama de la medicina que se ocupa del tubo digestivo, hígado, vías biliares y páncreas.</p>
          </div>
          <img width="400px" src="/assets/specialties/gastro.jpg" alt="gastroenterologia"/>
        </div>

        <div className="especialidades__box">
        <div className='especialidades__box__text'>
          <p>La Ginecología hace referencia a la especialidad médica y quirúrgica que trata las enfermedades del sistema reproductor femenino 
            (útero, vagina y ovarios).</p>
            <p>La Obstetricia es la parte de la medicina que se encarga de la gestación, el parto y el puerperio de la mujer (periodo desde el 
              parto hasta que la mujer regresa a su estado anterior a la gestación).</p>
          </div>
          <img width="400px" src="/assets/specialties/Gine.jpeg" alt="ginecologiaObstetricia"/>
        </div>
    
      </div>
      <FormContact />
    </div>
  )
}

export default Especialidades