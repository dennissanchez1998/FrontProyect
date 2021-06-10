import React, { useEffect, useContext } from "react";
import { Login } from "../login/Login";
import { Registrar } from "../registrar/Registrar";
import  "./home.css";
import AuthContext from "./../../context/autenticacion/AuthContext";

export const Home = (props) => {
  console.log(props.location.search);

  const token = localStorage.getItem("token");
  const authContext = useContext(AuthContext);
  const { autenticado } = authContext;

  useEffect(() => {
    console.log(autenticado);
    if (autenticado || token) {
      props.history.push("/publicaciones");
    }

    return;
  }, [autenticado, token]);

  return (
    <>
      <div class="sidenav">
        <div class="login-main-text"></div>
      </div>
      <div class="main">
        {props.location.search === "" || props.location.search === "?login" ? (
          <Login />
        ) : (
          <Registrar />
        )}
      </div>
    </>
  );
};
