import React from "react";

import navbar from './navbar.css'

export const Navbar = () => {
  return (
    <div>
      <nav class="mb-4 navbar navbar-expand-lg navbar-dark unique-color-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img
            src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
            height="30"
            alt=""
          />
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
            <li class="nav-item ">
              <a class="nav-link" href="#">
               Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
            Registrar
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
             Hola Dennis
              </a>
              <div
                class="dropdown-menu dropdown-menu-right dropdown-cyan"
                aria-labelledby="navbarDropdownMenuLink-4"
              >
                <a class="dropdown-item" href="#">
                  Ver Perfil
                </a>
                <a class="dropdown-item" href="#">
                  Editar Perfil
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
