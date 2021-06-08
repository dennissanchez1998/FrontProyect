import React, { useEffect } from "react";
import { Login } from "../login/Login";
import { Registrar } from "../registrar/Registrar";
import home from "./home.css";

export const Home = (props) => {
  console.log(props.location.search);
  let tipo =""



  return (
    <>
      <div class="sidenav">
        <div class="login-main-text">
          <h2>
            Application
            <br /> Login Page
         
          </h2>
          <p>Login or register from here to access.</p>
        </div>
      </div>
      <div class="main">
   

        {
          (props.location.search ==='' || props.location.search==='?login')?<Login />:<Registrar/>
        }
      </div>
    </>
  );
};
