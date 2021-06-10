// eslint-disable-next-line react-hooks/exhaustive-deps
import React, { useState, useContext, useEffect } from "react";
import AuthContext from "./../../context/autenticacion/AuthContext";
import PublicacionContext from "./../../context/publicaciones/PublicacionesContext";
import  "./Detalle.css";
import { Modal, ModalBody, ModalFooter } from "reactstrap";



export const Detalle = (props) => {
  const token = localStorage.getItem("token");
  const ctxAuth = useContext(AuthContext);
  const { autenticado } = ctxAuth;

  const publicacionContext = useContext(PublicacionContext);
  const {
  
    obtenerPublicacion,
    publicacion,
  } = publicacionContext;

  const { id } = props.match.params;
  console.log(id);

  useEffect(() => {
    const generarEventos = async () => {
      if (autenticado && token) {
        await obtenerPublicacion(id);
        return;
      } else {
        props.history.push("/");
        return;
      }
    };

    generarEventos();
  }, [autenticado,token,id]);

  const [modal, setmodal] = useState(false);

  console.log(publicacion);
  return (
    <div style={{ marginTop: "100px" }}>
      <div>
        <br />
        <div
          class="border-0 fadeInDown"
          style={{ marginLeft: "100px", marginRight: "100px" }}
        >
          <div class="row">
            <aside class="col-sm-4">
              <article class="gallery-wrap">
                <div class="img-big-wrap">
                  <div>
                    <p>
                      <img src="https://via.placeholder.com/450x450" alt="prueba" />
                    </p>
                  </div>
                </div>
                <div class="img-small-wrap">
                  <div class="item-gallery">
                    <img src="https://via.placeholder.com/100x100" alt="prueba" />
                  </div>
                  <div class="item-gallery">
                    <img src="https://via.placeholder.com/100x100" alt="prueba" />
                  </div>
                  <div class="item-gallery">
                    <img src="https://via.placeholder.com/100x100" alt="prueba" />
                  </div>
                  <div class="item-gallery">
                    <img src="https://via.placeholder.com/100x100" alt="prueba" />
                  </div>
                </div>
              </article>
            </aside>
            <aside class="col-sm-5">
              <article class="card-body m-0 pt-0 pl-5">
                <h3 class="title text-uppercase">{publicacion.titulo}</h3>
                <div class="rating">
                  <div class="stars">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </div>
                <div class="mb-3 mt-3">
                  <span class="h7 text-success">{publicacion.estado}</span>
                </div>
                <div class="mb-3 mt-3">
                  <span class="price-title">Precio :</span>
                  <span class="price color-price-waanbii">
                    {publicacion.precio}
                    <sup>$</sup>
                  </span>
                </div>
                <dl class="item-property">
                  <dt>Descripción</dt>
                  <dd>
                    <p>{publicacion.descripcion}</p>
                  </dd>
                </dl>
                <dl class="param param-feature">
                  <dt>Categoría</dt>
                  <dd>{publicacion.categoria}</dd>
                </dl>
              </article>
            </aside>
            <aside class="col-sm-3">
              <div class="row"></div>

              <div class="row mb-4 mt-4 App ">
                <button
                  class="btn btn-lg btn-success text-center"
                  style={{ width: "100%" }}
                  type="button"
                  onClick={() => setmodal(!modal)}
                >
                  <i class="fa fa-heart fa-beat"> Comprar</i>
                </button>
              </div>
              <hr class="m-0 p-0" />
            </aside>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modal}
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "500px",
          height:'500px'
        }}
      >
        <ModalBody style={{ width: "100%" }}>
          {publicacion.usuario ? (
            <>
              <div class="col-md-4" style={{width:'500px',height:'500px'}}>
                <div class="card user-card" style={{width:'440px',height:'500px'}}>
                  <div class="card-header">
                    <h5>Perfil</h5>
                  </div>
                  <div class="card-block">
                    <div class="user-image">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        class="img-radius"
                        alt="prueba"
                      />
                    </div>
                    <h6 class="f-w-600 m-t-25 m-b-10">{publicacion.usuario.nombre} {publicacion.usuario.apellido}</h6>
                    <p class="text-muted">{publicacion.usuario.email} | {publicacion.usuario.telefono}</p>
                    <hr />
                    <p class="text-muted m-t-15">Activity Level: 87%</p>
                    <ul class="list-unstyled activity-leval">
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li></li>
                      <li></li>
                    </ul>
                    <div class="bg-c-blue counter-block m-t-10 p-20">
                      <div class="row">
                        <div class="col-4">
                          <i class="fa fa-comment"></i>
                          <p>1256</p>
                        </div>
                        <div class="col-4">
                          <i class="fa fa-user"></i>
                          <p>8562</p>
                        </div>
                        <div class="col-4">
                          <i class="fa fa-suitcase"></i>
                          <p>189</p>
                        </div>
                      </div>
                    </div>
            
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </ModalBody>

        <ModalFooter>
        <button
          class="btn btn-lg btn-success text-center"
          style={{ width: "100%" }}
          type="button"
          onClick={() => setmodal(!modal)}
        >
          Cerrar
        </button>
        </ModalFooter>
     
      </Modal>
    </div>
  );
};
