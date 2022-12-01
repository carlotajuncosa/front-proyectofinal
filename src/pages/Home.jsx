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
      {/* no funciona el video */}
      <video className="home_video" loop autoPlay muted>
        <source src="/assets/video.mp4" type="video/mp4" />
      </video>
        <button>Pide cita</button>

      <div>
      <img src="" alt=""></img>
      <img src="" alt=""></img>
      <img src="" alt=""></img>
      <img src="" alt=""></img>
      <img src="" alt=""></img>
      <img src="" alt=""></img>
      </div>

      <div>Destacado videoconsulta
      <button>Pide cita</button>
      </div>

      <Map/>
    </div>
  );
};

export default Home;
