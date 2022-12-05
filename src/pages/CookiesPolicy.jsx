import React from "react";
import "../styles/CookiesPolicy.scss";

const CookiesPolicy = () => {
  return (
    <div className="cookiespolicy">
      <h2 className="cookiespolicy__title">Política de Cookies</h2>
      <div className="cookiespolicy__box">
        <p>
          La Clinica Health Algorithm le informa acerca del uso de las cookies
          en sus páginas web.
        </p>
        <p>
          Las cookies son archivos que se pueden descargar en su equipo a través
          de las páginas web. Son herramientas que tienen un papel esencial para
          la prestación de numerosos servicios de la sociedad de la información.
          Entre otros, permiten a una página web almacenar y recuperar
          información sobre los hábitos de navegación de un usuario o de su
          equipo y, dependiendo de la información obtenida, se pueden utilizar
          para reconocer al usuario y mejorar el servicio ofrecido.
        </p>

        <h4>TIPOS DE COOKIES</h4>
        <p>
          Según quien sea la entidad que gestione el dominio desde donde se
          envían las cookies y trate los datos que se obtengan se pueden
          distinguir:
        </p>
        <ul>
          <li>
            <strong>Cookies propias:</strong> Son aquéllas que se envían al
            equipo terminal del usuario desde un equipo o dominio gestionado por
            el propio editor y desde el que se presta el servicio solicitado por
            el usuario.
          </li>
          <li>
            <strong>Cookies de terceros:</strong> Son aquéllas que se envían al
            equipo terminal del usuario desde un equipo o dominio que no es
            gestionado por el editor, sino por otra entidad que trata los datos
            obtenidos través de las cookies.
          </li>
        </ul>

        <h4>COOKIES UTILIZADA EN LA WEB</h4>
        <p>
          A continuación se identifican las cookies que están siendo utilizadas
          en este portal así como su tipología y función:
        </p>
        <p>
          Las páginas web del Grupo Hospitalario Quirónsalud utiliza Google
          Analytics , un servicio de análisis de accesos web desarrollada por
          Google, que permite la medición y análisis de la navegación en las
          páginas web. Según la tipología anterior se trata de cookies propias,
          de sesión y de análisis. Puede encontrar más información al respecto e
          inhabilitar el uso de estas cookies{" "}
        </p>

        <h4>COMO MODIFICAR LA CONFIGURACIÓN DE LAS COOKIES</h4>
        <p>
          Usted puede restringir, bloquear o borrar las cookies de quirónsalud o
          cualquier otra página web, utilizando su navegador. En cada navegador
          la operativa es diferente, la función de 'Ayuda' le mostrará cómo
          hacerlo.
        </p>
        <ul>
          <li>
            <strong>Internet Explorer: </strong>
            en la opción de menú: Herramientas / Opciones de Internet / Privacidad / Configuración.
          </li>
          <li>
            <strong>FireFox: </strong>en la opción de menú: Herramientas / Opciones / Privacidad / Cookies.
          </li>
          <li>
            <strong>Chrome: </strong>
            en Opciones / Opciones avanzadas Privacidad / Cookies.
          </li>
          <li>
            <strong>Safari: </strong>en Ajustes / Safari / Bloquear cookies.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CookiesPolicy;
