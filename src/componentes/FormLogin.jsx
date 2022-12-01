import React from "react";
import "../styles/FormLogin.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const FormLogin = ({ type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const [form, setform] = useState(type);
  return (
    <div className="formlogin">
      <form>
        <h2>Acceder</h2>
        {/* <form onSubmit={handleSubmit(login)}> */}
        <label htmlFor="email">Dirección de correo electrónico</label>
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
            {errors.email.type === "required" && <p>{errors.email.message}</p>}
            {errors.email.type === "minLength" && <p>{errors.email.message}</p>}
            {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
          </>
        ) : null}
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          {...register("password", {
            required: "Introduce tu contraseña",
          })}
        />
        {errors.password ? <p>Contraseña incorrecta</p> : null}
        <button type="submit" disabled={!isValid}>
          Login
        </button>
      </form>
      <p>¿Aún no eres paciente? <span>Crea tu cuenta</span></p>
    </div>
  
  /* FORMULARIO DE REGISTRO - LO DEJAMOS COMENTADO PARA HACER EL FORMULARIO REGISTER CON NEFTA
  SINO SIEMPRE HAY LA OPCIÓN DE HACER DOS COMPONENTES DISTINTOS */ 
  
//   {form === "regist" && (
//     <>
//       <div className="login--form">
//         <h2>Registrarse</h2>
//         <form onSubmit={handleSubmit(regist)}>
//           <label htmlFor="email">
//             <p>Dirección de correo electrónico</p>
//           </label>
//           <div className="inputForm">
//             <input
//              id="email"
//               type="text"
//             {...register("email", {
//               required: true,
//               pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
//             })}
//           />
//           {errors.email?.type === "required" && <p>El campo Email es requerido</p>}
//           {errors.email?.type === "pattern" && <p>El formato del Email es incorrecto</p>}
//         </div>
//         <label htmlFor="password">
//           <p>Contraseña</p>
//         </label>
//         <div className="inputForm">
//           <input
//             id="password"
//             type="password"
//             onInput={(event) => handlePassword(event)}
//             {...register("password", {
//               required: true,
//               minLength: {
//                 value: 8,
//                 message: "Introduce mínimo 8 caracteres",
//               },
//             })}
//           />
//           {errors.password?.type === "required" && <p>El campo Password es requerido</p>}
//           {errors.password && <p>{errors.password.message}</p>}
//         </div>
//         <label htmlFor="password_repeat">
//           <p>Repite la contraseña</p>
//         </label>
//         <div className="inputForm">
//           <input
//             id="password_repeat"
//             type="password"
//             {...register("password_repeat", {
//               required: true,
//               validate: (value) => value === password || "Los password no coinciden",
//               })}
//           />
//           {errors.password_repeat?.type === "required" && <p>El campo Repetir Password es requerido</p>}
//           {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
//         </div>

//         <input type="submit" value="Registrarse" />
//       </form>
//       <p onClick={() => setform("login")}>
//         ¿Ya tienes cuenta de usuario? <span>Click aqui para entrar</span>
//       </p>
//     </div>
//   </>
// )}
 )}

export default FormLogin;

      // {form === "login" && (
      //   <>
      //     <div className="login--form">
      //       <h2>Login</h2>
      //       <form onSubmit={handleSubmit(login)}>
      //         <div className="inputForm">
      //           <label htmlFor="email">
      //             <p>Cuenta de correo electrónico</p>
      //           </label>
      //           <input
      //             id="email"
      //             type="text"
      //             {...register("email", {
      //               required: true,
      //               pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
      //             })}
      //           />
      //           {errors.email?.type === "required" && <p>El campo email es requerido</p>}
      //           {errors.email?.type === "pattern" && <p>El formato del email es incorrecto</p>}
      //         </div>
      //         <div className="inputForm">
      //           <label htmlFor="password">
      //             <p>Contraseña</p>
      //           </label>
      //           <input
      //             type="password"
      //             {...register("password", {
      //               required: true,
      //             })}
      //           />
      //           {errors.password?.type === "required" && <p>El campo password es requerido</p>}
      //         </div>

      //         <input type="submit" value="Enviar" />
      //         <p className="login--p" onClick={() => setform("regist")}>
      //           ¿Aún no tienes cuenta? <span>Registrate aquí</span>
      //         </p>
      //       </form>
      //     </div>
      //   </>
      // )}

      // {form === "regist" && (
      //   <>
      //     <div className="login--form">
      //       <h2>Registrarse</h2>
      //       <form onSubmit={handleSubmit(regist)}>
      //         <label htmlFor="email">
      //           <p>E-mail</p>
      //         </label>
      //         <div className="inputForm">
      //           <input
      //             id="email"
      //             type="text"
      //             {...register("email", {
      //               required: true,
      //               pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
      //             })}
      //           />
      //           {errors.email?.type === "required" && <p>El campo Email es requerido</p>}
      //           {errors.email?.type === "pattern" && <p>El formato del Email es incorrecto</p>}
      //         </div>
      //         <label htmlFor="password">
      //           <p>Contrasenya</p>
      //         </label>
      //         <div className="inputForm">
      //           <input
      //             id="password"
      //             type="password"
      //             onInput={(event) => handlePassword(event)}
      //             {...register("password", {
      //               required: true,
      //               minLength: {
      //                 value: 8,
      //                 message: "Introduce mínimo 8 caracteres",
      //               },
      //             })}
      //           />
      //           {errors.password?.type === "required" && <p>El campo Password es requerido</p>}
      //           {errors.password && <p>{errors.password.message}</p>}
      //         </div>
      //         <label htmlFor="password_repeat">
      //           <p>Repite la contraseña</p>
      //         </label>
      //         <div className="inputForm">
      //           <input
      //             id="password_repeat"
      //             type="password"
      //             {...register("password_repeat", {
      //               required: true,
      //               validate: (value) => value === password || "Los password no coinciden",
      //             })}
      //           />
      //           {errors.password_repeat?.type === "required" && <p>El campo Repetir Password es requerido</p>}
      //           {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
      //         </div>

      //         <input type="submit" value="Registrarse" />
      //       </form>
      //       <p onClick={() => setform("login")}>
      //         ¿Ya tienes cuenta de usuario? <span>Click aqui para entrar</span>
      //       </p>
      //     </div>
      //   </>
      // )}