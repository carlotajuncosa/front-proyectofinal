import React from "react";
import ChatBot from "react-simple-chatbot";
import { NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "../styles/Chat.scss";

const Chatbot = () => {
  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#8cc9a9",
    headerFontColor: "#fff",
    headerFontSize: "16px",
    botBubbleColor: "#8cc9a9",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  const config = {
    width: "300px",
    height: "500px",
    floating: true,
    hideBotAvatar: true,
    hideUserAvatar: true,
    placeholder: "Escribe el mensaje..."
  };

  const steps = [
    {
      id: "1",
      message: "Bienvenido a Health Algorithm. Soy un bot diseñado para ayudarte, ¿Cómo puedo llamarte?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      validator: (value) => {
        if (/^[A-Za-z]{1,15}$/.test(value)) {
          return true;
        } else {
          return "Introduce un nombre";
        }
      },
      trigger: "3",
    },
    {
      id: "3",
      message: "Encantado {previousValue}, veamos en que puedo ayudarte",
      trigger: "4",
    },
    {
      id: "4",
      options: [
        { value: "c", label: "Cita medica", trigger: "5a" },
        { value: "h", label: "Horario", trigger: "5b" },
        { value: "t", label: "Telefono", trigger: "5c" },
      ],
    },
    {
      id: "5a",
      component: (
        <div>
          <NavLink to="/pedir-cita">
            Pulsa para pedir cita
          </NavLink>
        </div>
      ),
      trigger: "6",
    },
    {
      id: "5b",
      component: (
        <div>
        <h5>Nuestro horario de atención al cliente</h5>
           <p>Lunes a viernes</p>
          <p>09:00 a 21:00</p>
          <p>Sabados, domingos y festivos</p>
          <p>09:00 a 15:00</p>
        </div>
      ),
      trigger: "6",
    },
    {
        id: "5c",
        message: "Nuestro telefono es 902 02 02 02",
        trigger: "6",
      },
    {
        id: "6",
        message: "¿Podemos ayudarte con algo mas?",
        trigger: "7",
      },
      {
        id: "7",
        options: [
          { value: "s", label: "Si", trigger: "4" },
          { value: "n", label: "No", trigger: "8" },
        ],
      },
      {
        id: "8",
        message: "Gracias por contactar con nosotros",
        trigger: "9",
      },
      {
        id: "9",
        message: "Tambien puede visitar nuestra historia en el siguiente link",
        trigger: "10",
      },
      {
        id: "10",
        component: (
          <div>
            <NavLink to="/">
              Nuestra historia
            </NavLink>
          </div>
        ),
      },
  ];
  return (
    <div className="chatbot">
      <div className="chatbot__wrapper">
        <ThemeProvider theme={theme}>
          <ChatBot steps={steps} {...config} />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Chatbot;
