import React, { Component, useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Table,
  Card,
  Button,
  Link,
} from "react-bootstrap";
import axios from "axios";


export default class Secciones extends Component {
  state = {
    alumnos: [],


    filtro: [],
    search: ""

  };

  async componentDidMount() {
    this.getInf()
    this.getFill()

  }

  getInf = async () => {
    const res = await axios.get("http://localhost:4000/alumno");
    this.setState({ alumnos: res.data });
    console.log(res.data);

  }

  getFill = async (cedula) => {
    const res = await axios.get("http://localhost:4000/alumno/filtro/" + cedula)
    this.setState({ filtro: res.data })


    console.log(res.data)
  }





  onImputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  deleteInf = async (id) => {
    await axios.delete("http://localhost:4000/alumno/" + id);
    this.getInf()
    console.log(id);
  };

  render() {
    return (
      <div>
        <h1 className="text-black text-center">Menu de Secciones</h1>

        <Container>
          <Row>
            <Form>

              <div className="form-search">
                <input
                  type="text "
                  className="form-control"
                  value={this.state.search}
                  placeholder="Busqueda"
                  onChange={this.onImputChange}
                  name="search"
                />
              </div>
              <Row className="mt-4">
                <Col>
                  <Card>
                    <Card.Header className="text-center">
                      <h3>Datos</h3>
                    </Card.Header>
                    <Table>
                      <thead>
                        <tr>
                          <th>cedula</th>
                          <th>Primer Nombre</th>
                          <th>Segundo Nombre</th>
                          <th>Primer Apellido</th>
                          <th>Segundo Apellido</th>
                          <th>Sexo</th>
                          <th>Fecha</th>
                          <th>Seccion</th>
                          <th>Grado</th>
                          <th>Opciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.filtro.length ? (
                          this.state.filtro.filter((alumno) => {
                            return (
                              <tr key={alumno.cedula}>
                                <td>{alumno.cedula}</td>
                                <td>{alumno.primerN}</td>
                                <td>{alumno.segundoN}</td>
                                <td>{alumno.primerA}</td>
                                <td>{alumno.segundoA}</td>
                                <td>{alumno.sexo}</td>
                                <td>{alumno.fechaDN}</td>
                                <td>{alumno.seccion}</td>
                                <td>{alumno.grado}</td>
                                <td>
                                  <a href={"/alumno/" + alumno.alumno_id} className="btn btn-outline-warning">
                                    Editar </a>
                                  <button
                                    className="btn btn-outline-danger"
                                    onClick={() =>
                                      this.deleteInf(alumno.alumno_id)
                                    }
                                  >
                                    Eliminar
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr>
                            <td colSpan="8" className="text-center">
                              Realice la busqueda por cedula
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  </Card>
                </Col>
              </Row>

            </Form>
          </Row>

          <Row className="mt-4">
            <Col>
              <Card>
                <Card.Header className="text-center">
                  <h3>Datos</h3>
                </Card.Header>
                <Table>
                  <thead>
                    <tr>
                      <th>cedula</th>
                      <th>Primer Nombre</th>
                      <th>Segundo Nombre</th>
                      <th>Primer Apellido</th>
                      <th>Segundo Apellido</th>
                      <th>Sexo</th>
                      <th>Fecha</th>
                      <th>Seccion</th>
                      <th>Grado</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.alumnos.length ? (
                      this.state.alumnos.map((alumno) => {
                        return (
                          <tr key={alumno._id}>
                            <td>{alumno.cedula}</td>
                            <td>{alumno.primerN}</td>
                            <td>{alumno.segundoN}</td>
                            <td>{alumno.primerA}</td>
                            <td>{alumno.segundoA}</td>
                            <td>{alumno.sexo}</td>
                            <td>{alumno.fechaDN}</td>
                            <td>{alumno.seccion}</td>
                            <td>{alumno.grado}</td>
                            <td>
                              <a href={"/alumno/" + alumno.alumno_id} className="btn btn-outline-warning">
                                Editar </a>
                              <button
                                className="btn btn-outline-danger"
                                onClick={() =>
                                  this.deleteInf(alumno.alumno_id)
                                }
                              >
                                Eliminar
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="8" className="text-center">
                          No hay secciones para el año seleccionado
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
