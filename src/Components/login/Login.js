import React, { useState, useContext ,useEffect} from "react";
import login from "./login.css";
import imagen from "../../img/Logotipo.png";
import { Link } from "react-router-dom";
import AuthContext from "./../../context/autenticacion/AuthContext";

export const Login = (props) => {
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
  });
  const ctxAuth = useContext(AuthContext);
  const { autenticado, iniciarSesion } = ctxAuth;

  const { email, password } = formulario;


/*   useEffect(() => {

    if(autenticado){    
      props.history.push('/publicaciones');
    }
    
    return;
}, [ autenticado ]) */

  const monitoreoCambios = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value,
    });
  };



  const enviarDatos = (event) => {
    event.preventDefault();

    iniciarSesion({
      email,

      password,
    });
  };

  return (
    <>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            <img
              src={imagen}
              id="icon"
              alt="User Icon"
            />
          </div>

          <form

            onSubmit={(e) => {
              enviarDatos(e);
            }}
          >
            <input
              type="email"
              id="login"
              class="fadeIn second password"
              name="email"
              value={email}
              onChange={(e) => monitoreoCambios(e)}
              placeholder="email"
            />
            <input
              type="password"
              id="password"
              class="fadeIn third password"
              name="password"
              value={password}
              onChange={(e) => monitoreoCambios(e)}
              placeholder="password"
            />
            <input type="submit" class="fadeIn fourth mt-5" value="Log In" />
          </form>

          <div id="formFooter">

            <Link
              to={{
                pathname: "/",
                search: "registrar",
              }}
              class="underlineHov"
            >
              Registrar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
