import React, { useState, useContext } from "react";
import "./crear.css";
import PublicacionContext from "./../../context/publicaciones/PublicacionesContext";

export const Crear = (props) => {
  const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "Carros, Motos y Otros",
    descripcion: "",
    precio: "",
    direccion: "",
    estado: "Nuevo",
    imagen: "",
  });

  const { titulo, categoria, descripcion, precio, direccion, estado, imagen } =
    formulario;

  const publicacionContext = useContext(PublicacionContext);
    const { crearPublicacion, creado } = publicacionContext;
    

 

  const monitoreoCambios = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();

    console.log(event);

    crearPublicacion({
      titulo,
      categoria,
      descripcion,
      precio,
      direccion,
      estado,
      imagen,
    });
    props.history.push("/publicaciones");
  };

  return (
    <div style={{ marginTop: "67px" }}>
      <section class="testimonial py-5 fadeIn" id="testimonial">
        <div style={{ height: "70vh", width: "98%" }}>
          <div class="row " style={{ height: "80vh" }}>
            <div class="col-md-4 py-5 bg-primary text-white text-center ">
              <div class=" ">
                <div class="card-body">
                  <img
                    src="http://www.ansonika.com/mavia/img/registration_bg.svg"
                    style={{ width: "50%" }}
                  />
                  <h2 class="py-3">Crea tu Publicación</h2>
                  <p>
                    Crea tu Publicación para vender de forma rapida,facil y
                    segura todos tus productos
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-8 py-5 border">
              <h4 class="pb-4">Datos para la publicacion</h4>
              <form onSubmit={(e) => enviarDatos(e)}>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>Titulo</label>
                    <input
                      name="titulo"
                      placeholder="Titulo"
                      class="form-control"
                      type="text"
                      value={titulo}
                      onChange={(e) => monitoreoCambios(e)}
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>Precio</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Precio"
                      name="precio"
                      value={precio}
                      onChange={(e) => monitoreoCambios(e)}
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>Estado del producto</label>
                    <select
                      id="inputState"
                      class="form-control"
                      name="estado"
                      value={estado}
                      onChange={(e) => monitoreoCambios(e)}
                    >
                      <option selected>Nuevo</option>
                      <option> Usado</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label>Categoria</label>
                    <select
                      onChange={(e) => monitoreoCambios(e)}
                      id="inputState"
                      class="form-control"
                      value={categoria}
                      name="categoria"
                    >
                      <option selected>Carros, Motos y Otros</option>
                      <option>Celulares y Teléfonos</option>
                      <option>Animales</option>
                      <option>Cámaras y Accesorios</option>
                      <option>Computación</option>
                      <option>Consolas y Videojuegos</option>
                      <option>Cosméticos</option>
                      <option>Salud y Vida</option>
                      <option>Libros</option>
                      <option>Arte</option>
                    </select>
                  </div>
                  <div class="form-group col-md-12">
                    <label>Imagen URL</label>
                    <input
                      onChange={(e) => monitoreoCambios(e)}
                      value={imagen}
                      id="Full Name"
                      name="imagen"
                      placeholder="Imagen URL"
                      class="form-control"
                      type="text"
                    />
                  </div>
                  <div class="form-group col-md-12">
                    <label>Direccion</label>
                    <input
                      id="Full Name"
                      onChange={(e) => monitoreoCambios(e)}
                      name="direccion"
                      value={direccion}
                      placeholder="Direccion"
                      class="form-control"
                      type="text"
                    />
                  </div>
                  <div class="form-group col-md-12">
                    <label>Descripción</label>
                    <textarea
                      id="comment"
                      name="descripcion"
                      value={descripcion}
                      onChange={(e) => monitoreoCambios(e)}
                      cols="40"
                      rows="5"
                      class="form-control"
                    ></textarea>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <div class="form-group">
                      <div class="form-check"></div>
                    </div>
                  </div>
                </div>

                <div class="form-row App">
                  <button type="submit" class="btn btn-danger">
                    Guardar Publicacion
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
