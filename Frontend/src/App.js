import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Seccion from "./pages/Seccion";
import Alumno from "./pages/Alumno";
import Grados from "./pages/Grados";
import Materias from "./pages/Materias";
import Inf from "./pages/inf";
import Factura from "./pages/Factura";

import { Navbar, Container, Nav } from "react-bootstrap";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Control de Alumnos</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Volver</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/seccion" component={Seccion} />
          <Route exact path="/alumno" component={Alumno} />
          <Route exact path= "/edit/:id" component={Alumno} />
          <Route exact path="/grados" component={Grados} />
          <Route exact path="/materias" component={Materias} />
          <Route exact path="/inf" component={Inf} />
          <Route exact path="/factura"component={Factura}/>
        </Switch>
      </div>
    );
  }
}
