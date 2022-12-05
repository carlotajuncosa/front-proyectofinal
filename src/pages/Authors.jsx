import React from "react";
import "../styles/Authors.scss";

const Authors = () => {
  return (
    <div className="authors">
      <h2 className="authors__title title">Creators</h2>
      <p className="authors__p p">
        Health Algorithm is a project made by Neftalí de la Cruz, Javi Azagra,
        Adolfo Tardón and Carlota Juncosa with React JS.
      </p>
      {/* CONTAINER TARGETAS ROW */}
      <div className="authors__container">
        {/* TARGETA  */}
        <div className="authors__card">
        <div className="authors__container--img">
          <img
            className="authors__img"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-7-8-beards-3-1594226995.jpg?crop=0.413xw:0.827xh;0.0481xw,0.0160xh&resize=640:*"
            alt="authorimage"
          ></img>
          </div>
          <div className="authors__info">
            <h4>Neftalí De La Cruz </h4>
            <p className="authors__p">
              <a href="https://github.com/NeftaliCruzSosa">GitHub</a> |{" "}
              <a href="https://www.linkedin.com/in/neftali-de-la-cruz-sosa-7bb40b21a/">
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
            src="https://media-exp1.licdn.com/dms/image/D4D03AQG_pMBSmplaGQ/profile-displayphoto-shrink_400_400/0/1667228751218?e=1675900800&v=beta&t=zcHk_6GpVRCQZ1CPQTp4PDFnv2hz116XxeAEiBYR4Ho"
            alt="authorimage"
          ></img>
          </div>
          <div className="authors__info">
            <h4>Javier Azagra</h4>
            <p className="authors__p">
              <a href="https://github.com/JaviiAzagra">GitHub</a> |{" "}
              <a href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADcOll8BJRj7yXxTHS11VU10uL94Jq6UGe8&keywords=javier%20azagra%20garc%C3%ADa&origin=RICH_QUERY_SUGGESTION&position=0&searchId=97292c35-65b2-43eb-b43f-38a72fe3b4df&sid=2Hp">
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
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHPbgfQF3ESoA/profile-displayphoto-shrink_400_400/0/1656870151689?e=1675900800&v=beta&t=HMERX4zGo-iF7GLaR_3X2s4Q77YZ6CfrXychR0x4sNc"
            alt="authorimage"
          ></img>
          </div>
          <div className="authors__info">
            <h4>Adolfo Gómez</h4>
            <p className="authors__p">
              <a href="https://github.com/DarkoGL">GitHub</a> |{" "}
              <a href="https://www.linkedin.com/in/adolfo-g%C3%B3mez-ligero-bb01b3244/">
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
            src="https://media-exp1.licdn.com/dms/image/D4D03AQFphj7M1GmBug/profile-displayphoto-shrink_400_400/0/1667234346809?e=1675900800&v=beta&t=e4ULNJ0d_pNBSRQq4-ICtt8ArBfi9FVS59h9SvMEEM0"
            alt="authorImage"
          ></img>
          </div>
          <div className="authors__info">
            <h4>Carlota Juncosa</h4>
            <p className="authors__p">
              <a href="https://github.com/carlotajuncosa">GitHub</a> |{" "}
              <a href="/">Linkedin</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
