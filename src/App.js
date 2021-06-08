import "./App.css";
import { Navbar } from "./Components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Components/home/Home";
import { Registrar } from "./Components/registrar/Registrar";
import AuthState from "./context/autenticacion/AuthState";

function App() {
  return (
    <>
      <AuthState>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </Router>
      </AuthState>
    </>
  );
}

export default App;
