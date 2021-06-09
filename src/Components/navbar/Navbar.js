import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./../../context/autenticacion/AuthContext";

import navbar from "./navbar.css";
import imagen from "../../img/Logotipo.png";

export const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { autenticado, iniciarSesion, usuario, cerrarSesion } = authContext;

  const clickLogout = () => {
    cerrarSesion();
  };

  return (
    <div>
      <nav class="mb-4 navbar navbar-expand-lg navbar-light unique-color-light bg-gradient-dark top">
        <a class="navbar-brand" href="#">
          <img src={imagen} height="70" width="120" alt="" className="imagen" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-4"
          aria-controls="navbarSupportedContent-4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
          <ul class="navbar-nav ml-auto">
            {autenticado ? (
              <li class="nav-item dropdown ">
                <a
                  class="nav-link dropdown-toggle mouse letra"
                  id="navbarDropdownMenuLink-4"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hola {usuario.nombre}
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right dropdown-cyan"
                  aria-labelledby="navbarDropdownMenuLink-4"
                >
                  <a class="dropdown-item mouse" href="#">
                    Ver Perfil
                  </a>
                  <a class="dropdown-item mouse" href="#">
                    Editar Perfil
                  </a>
                  <li class="dropdown-item mouse" onClick={clickLogout}>
                    Cerrar Sesion
                  </li>
                </div>
              </li>
            ) : (
              <>
                <li class="nav-item letra">
                  <Link
                    to={{
                      pathname: "/",
                      search: "login",
                    }}
                    class="nav-link"
                  >
                    Login
                  </Link>
                </li>
                <li class="nav-item letra">
                  <Link
                    to={{
                      pathname: "/",
                      search: "registrar",
                    }}
                    class="nav-link"
                  >
                    Registrar
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
