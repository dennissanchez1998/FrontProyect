import React, { useEffect,useContext } from "react";
import { Login } from "../login/Login";
import { Registrar } from "../registrar/Registrar";
import home from "./home.css";
import AuthContext from './../../context/autenticacion/AuthContext'

export const Home = (props) => {
  console.log(props.location.search);

  
  const authContext = useContext(AuthContext)
  const { autenticado, iniciarSesion } = authContext

  useEffect(() => {

    if(autenticado){    
        props.history.push('/publicaciones')
    }
    
    return;
}, [ autenticado ])

  return (
    <>
      <div class="sidenav">
        <div class="login-main-text">
          
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
