import React from "react";
import "../styles/FormLogin.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, newUser } from "../redux/auth/auth.actions";

const FormLogin = ({ type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setform] = useState(type);
  const [password, setpassword] = useState("");

  const handlePassword = (event) => {
    setpassword(event.target.value);
  };

  const login = (data) => {
    dispatch(loginUser(data, navigate));
  };

  const registerUser = (data) => {
    dispatch(newUser(data, navigate));
  };

  return (
    <div className="formLogin__box">
      <div className="formLogin">
        {form === "login" && (
          <>
            <form className="formLogin__form" onSubmit={handleSubmit(login)}>
              <h2>Acceder</h2>
              <div className="inputForm">
                <label htmlFor="email">
                  <p>E-mail</p>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", {
                    required: "Introduce un email, por favor",
                    minLength: {
                      value: 5,
                      message: "Introduce un email más largo",
                    },
                    pattern: {
                      message: "Introduce un email con formato válido",
                    },
                  })}
                />
                {errors.email ? (
                  <>
                    {errors.email.type === "required" && (
                      <p>{errors.email.message}</p>
                    )}
                    {errors.email.type === "minLength" && (
                      <p>{errors.email.message}</p>
                    )}
                    {errors.email.type === "pattern" && (
                      <p>{errors.email.message}</p>
                    )}
                  </>
                ) : null}
              </div>
              <div className="inputForm">
                <label htmlFor="password">
                  <p>Contraseña</p>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  {...register("password", {
                    required: "Introduce tu contraseña",
                  })}
                />
                {errors.password ? <p>Contraseña incorrecta</p> : null}
              </div>
              <button className="primary_button" type="submit" disabled={!isValid}>
                Login
              </button>
              <p className="pLink">
                ¿Aún no eres paciente?{" "}
                <span onClick={() => setform("regist")}>Crea tu cuenta</span>
              </p>
            </form>
          </>
        )}

        {/* //* FORMULARIO DE REGISTRO  */}

        {form === "regist" && (
          <>
            <form
              className="formLogin__form"
              onSubmit={handleSubmit(registerUser)}
            >
              <h2>Registrarse</h2>
              <label htmlFor="email">
                <p>E-mail</p>
              </label>
              <div className="inputForm">
                <input
                  id="email"
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  })}
                />
                {errors.email?.type === "required" && (
                  <p>El campo Email es requerido</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p>El formato del Email es incorrecto</p>
                )}
              </div>
              <label htmlFor="password">
                <p>Contraseña</p>
              </label>
              <div className="inputForm">
                <input
                  id="password"
                  type="password"
                  onInput={(event) => handlePassword(event)}
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "Introduce mínimo 8 caracteres",
                    },
                  })}
                />
                {errors.password?.type === "required" && (
                  <p>El campo Password es requerido</p>
                )}
                {errors.password && <p>{errors.password.message}</p>}
              </div>
              <label htmlFor="password_repeat">
                <p>Repite la contraseña</p>
              </label>
              <div className="inputForm">
                <input
                  id="password_repeat"
                  type="password"
                  {...register("password_repeat", {
                    required: true,
                    validate: (value) =>
                      value === password || "Los password no coinciden",
                  })}
                />
                {errors.password_repeat?.type === "required" && (
                  <p>El campo Repetir Password es requerido</p>
                )}
                {errors.password_repeat && (
                  <p>{errors.password_repeat.message}</p>
                )}
              </div>

              <button className="primary_button" type="submit" disabled={!isValid}>
                Registrarse
              </button>
              <p className="pLink">
                ¿Ya tienes cuenta de usuario?{" "}
                <span onClick={() => setform("login")}>
                  Click aqui para entrar
                </span>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
export default FormLogin;
