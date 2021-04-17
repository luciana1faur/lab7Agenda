import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Program from "./program";
import Formular from "./formular";
import NotFound from "./notfound";
import { Route, Link, Switch } from "react-router-dom";

export default function App() {
  const [lista, setLista] = useState([]);

  const stergActivitate = (id) => {
    const listaNoua = lista.filter((item) => {
      if (item.id !== parseInt(id, 10)) {
        return true;
      }
      return false;
    });
    setLista(listaNoua);
  };

  const adaugaActiv = (act) => {
    act.id = lista.length + 1;
    setLista([...lista, act]);
  };

  const stil = {
    container: { maxWidth: "700px" }
  };

  return (
    <Container style={stil.container}>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Program
            </Nav.Link>
            <Nav.Link as={Link} to="/formular">
              Formular
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Program activitati={lista} sterge={stergActivitate} />
        </Route>
        <Route path="/formular">
          <Formular transmit={adaugaActiv} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Container>
  );
}
