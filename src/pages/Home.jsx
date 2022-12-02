import React from "react";
import Map from "../componentes/Map";
import "../styles/Home.scss";

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
      <svg id="Capa_6" data-name="Capa 6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380.37 432.01">
  <circle class="cls-1" cx="190" cy="190" r="190" transform="translate(-2.2 377.78) rotate(-89.33)"/>
  <path class="cls-2" d="M213.32,90.37c11.51-10.55,25.89-17.43,41.63-17.98,17.01-.6,32.73,6.37,44.18,18.87,14.66,15.99,19.38,36.95,19.11,58.08-.44,31.96-11.28,67.61-31.41,95.61-20.61,28.65-50.89,49.46-89.77,50.82-35.59,1.25-53.11-11.69-73.15-38.96-4.24-5.74-7.92-10.77-11.42-13.06-1.32-.85-3.03,.05-3.09,1.6-.11,2.97,.35,6.68,.68,8.89,1.63,10.41,5.66,22.58,9,30.98,5.4,13.6-11.56,20.08-21.99,21.42-10.52,1.35-21.53-1.25-25.02-11.17-9.66-27.41-12.22-49.21-8.93-65.23,6.4-31.04,32.62-38.65,60.45-32.91,15.49,3.19,28.28,.08,38.13-6.24,11.77-7.56,20.73-20.66,23.56-34.36,1.44-7.07,1.08-13.27-1.33-17-6.38-9.93-12.45-19.78-16.95-30.87-4.65-11.45-7.53-23.99-7.21-38.8,.17-6.98,4.96-11.36,11.85-13.42,5.36-1.6,12.32-1.74,17.8-.67,8.04,1.59,14.59,5.98,15.58,13.76,1.09,8.67,2.71,17.67,5.44,22.39,.17,.27,.33,.26,.72,0,.43-.3,1.14-.81,2.15-1.74h0Zm13.54,14.7c-15.31,14.03-25.88,9.9-33.34-2.38-4.25-7.01-6.49-17.26-7.89-27.08-1.95-.42-3.86-.41-5.84-.26,.39,9.64,2.52,18.11,5.73,26.01,3.89,9.59,9.4,18.53,15.23,27.59,5.26,8.2,6.52,19.73,4.04,31.77-3.89,18.87-16.09,36.74-32.31,47.16-13.86,8.91-31.65,13.35-52.87,8.98-16.23-3.35-33.31-2.05-36.94,17.36-2.35,12.58-.61,28.79,7.53,52.63,2.75,.42,5.22,.03,7.88-.73-3.09-8.67-6.19-19.27-7.7-28.84-1.08-6.93-1.32-13.48-.17-18.82,2.26-10.54,9.57-16.77,20.32-15.93,13.69,1.07,20.86,10.82,29.45,22.48,15.58,21.19,28.69,31.81,56.44,30.84,31.87-1.11,56.96-18.54,74.22-42.54,17.72-24.66,27.27-56.06,27.65-84.2,.22-15.88-2.77-32.32-13.86-44.41-7.48-8.16-17.75-12.78-28.87-12.39-9.64,.34-19.67,4.48-28.71,12.76Z"/>
  <path class="cls-2" d="M199.09,205.95c-5.26,5.9-11.28,11.11-17.96,15.39-9.4,6.05-19.52,9.94-30,11.84,13.24,17.71,20.71,27.52,44.73,26.68,26.1-.91,46.91-15.2,61.79-35.9,3.9-5.42,7.41-11.3,10.47-17.47-18-3.59-50.19-3.61-69.03-.54Z"/>
</svg>
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
