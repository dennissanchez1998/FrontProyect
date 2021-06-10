import "./App.css";
import { Navbar } from "./Components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Components/home/Home";

import AuthState from "./context/autenticacion/AuthState";
import { Publicacion } from "./Components/publicaciones/Publicacion";
import RutaPrivada from "./rutas/RutaPrivada";
import PublicacionesState from "./context/publicaciones/PublicacionesState";
import { Detalle } from "./Components/detalle/Detalle";

function App() {
  return (
    <>
      <PublicacionesState>
        <AuthState>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" component={Home} exact />
              <RutaPrivada
                path="/publicaciones"
                component={Publicacion}
                exact
              />
               <RutaPrivada
                path="/publicaciones/:id"
                component={Detalle}
                exact
              />
            </Switch>
          </Router>
        </AuthState>
      </PublicacionesState>
    </>
  );
}

export default App;
