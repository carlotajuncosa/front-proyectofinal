import React from "react";
import Map from "../componentes/Map";

const Home = () => {
  return (
    <div className="home">
      <ul className="home__ul">
        <li className="home__li">Purebas Covid-19</li>
        <li className="home__li">
          Teléfono de atención al usuario: 900 302 013
        </li>
      </ul>
      <video className="home_video" loop autoPlay muted>
        <source src="/assets/video.mp4" type="video/mp4" />
      </video>
      <button>Pide cita</button>

      <div>
        <img src="https://via.placeholder.com/200" alt=""></img>
        <img src="https://via.placeholder.com/200" alt=""></img>
        <img src="https://via.placeholder.com/200" alt=""></img>
        <img src="https://via.placeholder.com/200" alt=""></img>
        <img src="https://via.placeholder.com/200" alt=""></img>
        <img src="https://via.placeholder.com/200" alt=""></img>
      </div>

      <div>
        <img src="https://via.placeholder.com/400" alt=""></img>
        <h2>¿No puedes acudir al centro? Tenemos video consulta</h2>
        <button>Pide cita</button>
      </div>

      <Map />
    </div>
  );
};

export default Home;
