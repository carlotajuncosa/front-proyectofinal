import React from "react";
import Map from "../componentes/Map";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <ul className="home__ul">
        <li className="home__ul--li">Pruebas Covid-19</li>
        <li className="home__ul--li">
          Teléfono de atención al usuario:  <span>900 302 013</span>
        </li>
      </ul>
      <div className="home__video">
      <video className="home__video--src" loop autoPlay muted>
        <source src="/assets/video_loalamos.mp4" type="video/mp4" />
      </video>
      <button className="home__video--button">Pide cita</button>
    </div>
      <h3>Especialidades</h3>
      <div className="home__specs">
        <img src="../../assets/iconsSpecialities/cardiologia.svg" alt="cardiologia" className="home__specs--img"></img>
        <img src="../../assets/iconsSpecialities/dermatologia.svg" alt="dermatologia" className="home__specs--img"></img>
        <img src="../../assets/iconsSpecialities/gastro.svg" alt="gastro" className="home__specs--img"></img>
        <img src="../../assets/iconsSpecialities/ginecologia.svg" alt="ginecologia" className="home__specs--img"></img>
        <img src="../../assets/iconsSpecialities/psiquiatria.svg" alt="psiquiatria" className="home__specs--img"></img>
        <img src="../../assets/iconsSpecialities/traumatologia.svg" alt="traumotologia" className="home__specs--img"></img>
      </div>

      <div className="home__remote">
        <img src="https://via.placeholder.com/400" alt="videoconsulta" className="home__remote--img"></img>
        <h2>¿No puedes acudir al centro? Tenemos video consulta</h2>
        <button className="home__remote--btn">Pide cita</button>
      </div>

      <Map />
    </div>
  );
};

export default Home;
