import React from 'react';
import "../styles/FormContact.scss";
import { useForm } from "react-hook-form";

const FormContact = () => {
  const {
    register, 
    handleSubmit, 
    formState: {errors, isValid},
  } = useForm();
  return (
    <div className="formContact">
    <form>
      <h2>Hola, ¿cómo podemos ayudarte?</h2>
      <h3>Estamos aquí para ayudarte y te responderemos dentro de las siguientes 24 horas.</h3>
      {/* <form onSubmit={handleSubmit(login)}> */}
      {/* NOMBRE */}
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        name="name"
        id="name"
        {...register("name", {
          required: "Introduce tu nombre, por favor",
          minLength: {
            value: 3,
            message: "Introduce un nombre válido",
          },
          pattern: {
            value: "^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$",
            message: "Introduce un nombre con formato válido",
          },
        })}
      />
      {errors.name ? (
        <>
          {errors.name.type === "required" && <p>{errors.name.message}</p>}
          {errors.name.type === "minLength" && <p>{errors.name.message}</p>}
          {errors.name.type === "pattern" && <p>{errors.name.message}</p>}
        </>
      ) : null}
      {/* TELEFONO */}
      <label htmlFor="phone">Teléfono</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        {...register("phone", {
          required: "Introduce tu número de telefono, por favor",
          minLength: {
            value: 9,
            message: "Introduce un número de telefono valido",
          },
          pattern: {
            value: "[0-9]{12}",
            message: "Introduce un número de telfono con formato válido",
          },
        })}
      />
      {errors.email ? (
        <>
          {errors.email.type === "required" && <p>{errors.email.message}</p>}
          {errors.email.type === "minLength" && <p>{errors.email.message}</p>}
          {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
        </>
      ) : null}
      {/* EMAIL */}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        {...register("email", {
          required: "Introduce tu email, por favor",
          minLength: {
            value: 3,
            message: "Introduce un email válido"
          },
          pattern: {
            value: "/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i",
            message: "Introduce un email con formato válido"
          },
        })}
      />
      {errors.email ? (
        <>
          {errors.email.type === "required" && <p>{errors.email.message}</p>}
          {errors.email.type === "minLength" && <p>{errors.email.message}</p>}
          {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
        </>
      ) : null}
      {/* TEXT AREA CONSULTA */}
      <label htmlFor="textarea">Cuéntanos lo que necesitas</label>
      <textarea
        rows="5" cols="20"
        type="textarea"
        name="textarea"
        id="textarea"
        {...register("textarea", {
          required: "Introduce tu consulta, por favor",
          minLength: {
            value: 3,
            message: "Introduce una consulta válida",
          },
          pattern: {
            message: "Introduce una consulta con formato válido",
          },
        })}
      ></textarea>
      {errors.textarea ? (
        <>
          {errors.textarea.type === "required" && <p>{errors.textarea.message}</p>}
          {errors.textarea.type === "minLength" && <p>{errors.textarea.message}</p>}
          {errors.textarea.type === "pattern" && <p>{errors.textarea.message}</p>}
        </>
      ) : null}
      
      <button type="submit" disabled={!isValid}>
        Enviar
      </button>
    </form>
  </div>
  )
};

export default FormContact;