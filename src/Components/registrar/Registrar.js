import React, { useState , useContext} from "react";
import { Link } from "react-router-dom";
import AuthContext from './../../context/autenticacion/AuthContext'

export const Registrar = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    codigo: "+58",
    telefono: "",
    password: "",
    confirmar: "",
  });
  const ctxAuth = useContext(AuthContext)
  const { mensaje, autenticado, usuario, registrarUsuario } = ctxAuth

  const { nombre, apellido, email, codigo, telefono, password, confirmar } =
    formulario;

  const monitoreoCambios = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value,
    });
  };
  const enviarDatos = (event) => {
    event.preventDefault();

    // VALIDACIÓN DE PASSWORDS
    if (password !== confirmar) {
      return console.log("Los passwords no son iguales");
      }
      
      console.log(formulario);

     registrarUsuario({
      nombre,
      apellido,
      email,
      codigo,
      telefono,
      password,
    }); 
  };

  return (
    <div>
      <div
        class="row justify-content-center fadeIn"
        style={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <div class="col-md-6">
          <div class="card">
            <header class="card-header">
              <Link
                to={{
                  pathname: "/",
                  search: "login",
                }}
                class="float-right btn btn-outline-primary mt-1"
              >
                Login
              </Link>

              <h4 class="card-title mt-2">Registrar</h4>
            </header>
            <article class="card-body">
              <form style={{ marginLeft: "10px", width: "90%" }} onSubmit={(e)=>{enviarDatos(e)}}>
                <div class="form-row">
                  <div class="col form-group">
                    <label>Nombre:</label>
                    <input
                      type="text"
                      class="form-control"
                      name="nombre"
                      value={nombre}
                      onChange={(e) => monitoreoCambios(e)}
                      style={{ background: "white", border: "1px solid" }}
                    />
                  </div>
                  <div class="col form-group">
                    <label>Apellido</label>
                    <input
                      type="text"
                      class="form-control"
                      name="apellido"
                      placeholder=""
                      value={apellido}
                      onChange={(e) => monitoreoCambios(e)}
                      style={{
                        background: "white",
                        border: "1px solid",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label>Correo</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    value={email}
                    style={{ border: "1px solid" }}
                    onChange={(e) => monitoreoCambios(e)}
                  />
                </div>
                <label>Teléfono:</label>
                <div class="form-row">
                  <div class="form-group col-4">
                    <select
                      class="form-control"
                      style={{ border: "1px solid" }}
                      name="codigo"
                      value={codigo}
                      onChange={(e) => monitoreoCambios(e)}
                    >
                      <option>+58</option>
                      <option>+52</option>
                      <option>+507</option>
                      <option>+41</option>
                      <option>+352</option>
                      <option>+39</option>
                      <option>+33</option>
                      <option>+34</option>
                      <option>+57</option>
                      <option>+56</option>
                      <option>+55</option>
                      <option>+61</option>
                    </select>
                  </div>
                  <div class="form-group col-8">
                    <input
                      type="number"
                      class="form-control"
                      name="telefono"
                      value={telefono}
                      onChange={(e) => monitoreoCambios(e)}
                      style={{
                        background: "white",
                        border: "1px solid",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label>Crear Contraseña</label>
                  <input
                    class="form-control"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => monitoreoCambios(e)}
                    style={{ border: "1px solid" }}
                  />
                </div>
                <div class="form-group">
                  <label>Confirmar Contraseña</label>
                  <input
                    class="form-control"
                    type="password"
                    onChange={(e) => monitoreoCambios(e)}
                    style={{ border: "1px solid" }}
                    name="confirmar"
                    value={confirmar}
                  />
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block mt-5">
                    Registrar
                  </button>
                </div>
              </form>
            </article>
            <div class="border-top card-body text-center">
              Ya tienes Cuenta?{" "}
              <Link
                to={{
                  pathname: "/",
                  search: "login",
                }}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
