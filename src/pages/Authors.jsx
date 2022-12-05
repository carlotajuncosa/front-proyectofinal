import React from "react";
import "../styles/Authors.scss";

const Authors = () => {
  return (
    <div className="authors">
      <h2 className="authors__title title">Creators</h2>
      <p className="authors__p p">
        Health Algorithm is a project made by Neftalí de la Cruz, Javi Azagra,
        Adolfo Gómez and Carlota Juncosa with React JS.
      </p>
      {/* CONTAINER TARGETAS ROW */}
      <div className="authors__container">
        {/* TARGETA  */}
        <div className="authors__card">
        <div className="authors__container--img">
          <img
            className="authors__img"
            src="/assets/creators/neftali.jpeg"
            alt="authorimage"
          ></img>
          </div>
          <div className="authors__info">
            <h4>Neftalí De La Cruz </h4>
            <p className="authors__p">
              <a href="https://github.com/NeftaliCruzSosa" rel="noreferrer" target="_blank">GitHub</a> |{" "}
              <a href="https://www.linkedin.com/in/neftali-de-la-cruz-sosa-7bb40b21a/" rel="noreferrer" target="_blank">
                Linkedin
              </a>
            </p>
          </div>
        </div>
        {/* TARGETA  */}
        <div className="authors__card">
        <div className="authors__container--img">

          <img
            className="authors__img"
            src="/assets/creators/javi.jpg"
            alt="authorimage"
          ></img>
          </div>
          <div className="authors__info">
            <h4>Javier Azagra</h4>
            <p className="authors__p">
              <a rel="noreferrer" target="_blank" href="https://github.com/JaviiAzagra">GitHub</a> |{" "}
              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/javier-azagra-garc%C3%ADa/">
                Linkedin
              </a>
            </p>
          </div>
        </div>
        {/* TARGETA  */}
        <div className="authors__card">
        <div className="authors__container--img">

          <img
            className="authors__img"
            src="/assets/creators/adolf.jpg"
            alt="authorimage"
          ></img>
          </div>
          <div className="authors__info">
            <h4>Adolfo Gómez</h4>
            <p className="authors__p">
              <a rel="noreferrer" target="_blank" href="https://github.com/DarkoGL">GitHub</a> |{" "}
              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/adolfo-g%C3%B3mez-ligero-bb01b3244/">
                Linkedin
              </a>
            </p>
          </div>
        </div>
        {/* TARGETA  */}
        <div className="authors__card">
        <div className="authors__container--img">

          <img
            className="authors__img"
            src="/assets/creators/carlota.jpg"
            alt="authorImage"
          ></img>
          </div>
          <div className="authors__info">
            <h4>Carlota Juncosa</h4>
            <p className="authors__p">
              <a rel="noreferrer" target="_blank" href="https://github.com/carlotajuncosa">GitHub</a> |{" "}
              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/carlota-juncosa-b33604119/">Linkedin</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
