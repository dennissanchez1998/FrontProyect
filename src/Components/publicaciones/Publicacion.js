import React, { useState, useContext, useEffect } from "react";
import AuthContext from "./../../context/autenticacion/AuthContext";
import PublicacionContext from "./../../context/publicaciones/PublicacionesContext";
import { Link } from "react-router-dom";
import css from "./publicacion.css";

export const Publicacion = (props) => {
  const token = localStorage.getItem("token");
  const ctxAuth = useContext(AuthContext);
  const { mensaje, autenticado, usuario, registrarUsuario } = ctxAuth;

  const publicacionContext = useContext(PublicacionContext);
  const { publicaciones, obtenerPublicaciones } = publicacionContext;

  console.log("estas son", publicaciones.length);

  useEffect(() => {
    
    const generarEventos = async () => {
      if (autenticado && token) {
        await obtenerPublicaciones();
        return;
      } else {
        props.history.push("/");
        return;
      }
    };

    generarEventos();
  }, []);

  return (
    <div style={{ marginTop: "10%" }} className="fadeIn">
      <div style={{ marginLeft: "5%", marginRight: "5%", marginBottom: "5%" }}>
        <div class="row">
          <div class="col-12 col-sm-3">
            <div class="card bg-light mb-3">
              <div class="card-header bg-primary text-white text-uppercase">
                <i class="fa fa-list"></i> Categorias
              </div>
              <ul class="list-group category_block">
                <li class="list-group-item">
                  <a href="category.html">Carros, Motos y Otros</a>
                </li>
                <li class="list-group-item">
                  <a href="category.html">Celulares y Teléfonos</a>
                </li>
                <li class="list-group-item">
                  <a href="category.html">Animales</a>
                </li>
                <li class="list-group-item">
                  <a href="category.html">Cámaras y Accesorios</a>
                </li>
                <li class="list-group-item">
                  <a href="category.html">Computación</a>
                </li>
                <li class="list-group-item">
                  <a href="category.html">Consolas y Videojuegos</a>
                </li>
                <li class="list-group-item">
                  <a href="category.html">Cosméticos</a>
                </li>
                <li class="list-group-item">
                  <a href="category.html">Salud y Vida</a>
                </li>
                <li class="list-group-item">
                  <a href="category.html">Libros</a>
                </li>
                <li class="list-group-item">
                  <a href="category.html">Arte</a>
                </li>
              </ul>
            </div>
            {publicaciones.length === 0 ? null : (
              <div class="card bg-light mb-3">
                <div class="card-header bg-primary text-white text-uppercase">
                  Ultimo Producto
                </div>
                <div class="card-body">
                  <img
                    class="img-fluid"
                    src="https://dummyimage.com/600x400/55595c/fff"
                  />
                  <h5 class="card-title">{publicaciones[0].titulo}</h5>
                  <p class="card-text">{publicaciones[0].descripcion}</p>
                  <p class="bloc_left_price"> {publicaciones[0].precio} $</p>
                </div>
              </div>
            )}
          </div>
          <div class="col">
            <div class="row">
              {publicaciones.length === 0
                ? null
                : publicaciones.map((e) => (
                    <div class="col-12 col-md-6 col-lg-4">
                      <div class="card">
                        <img
                          class="card-img-top"
                          src="https://dummyimage.com/600x400/55595c/fff"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <h4 class="card-title">
                            <Link
                              to={{
                                pathname: `/publicaciones/${e._id}`,
                              }}
                 
                            >
                              {e.titulo}
                            </Link>
                          </h4>
                          <p class="card-text">{e.descripcion}</p>
                          <p class="card-text">{e.estado}</p>
                          <div class="row">
                            <div class="col">
                              <p class="btn btn-primary btn-block">
                                {e.precio} $
                              </p>
                            </div>
                            <div class="col">
                              <Link
                                to={{
                                  pathname: `/publicaciones/${e._id}`,
                                }}
                                class="btn btn-success btn-block"
                              >
                                Visualizar
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
