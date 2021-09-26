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


    filtros: [],
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
    const res = await axios.get("http://localhost:4000/alumno/filtro/" + "")
    this.setState({ fill: res.data })

    console.log(cedula)
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
                  onSubmit={()=>this.getFill()}
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
                          <th>Cedula</th>
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
                        {this.state.filtros.length ? (
                          this.state.filtros.map((fill) => {
                            return (
                              <tr key={fill.cedula}>
                                <td>{fill.cedula}</td>
                                <td>{fill.primerN}</td>
                                <td>{fill.segundoN}</td>
                                <td>{fill.primerA}</td>
                                <td>{fill.segundoA}</td>
                                <td>{fill.sexo}</td>
                                <td>{fill.fechaDN}</td>
                                <td>{fill.seccion}</td>
                                <td>{fill.grado}</td>
                                <td>
                                  <a href={"/alumno/" + fill.alumno_id} className="btn btn-outline-warning">
                                    Editar </a>
                                  <button
                                    className="btn btn-outline-danger"
                                    onClick={() =>
                                      this.deleteInf(fill.alumno_id)
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
                  <h3 className="fuente-fuente">Datos</h3>
                </Card.Header>
                <Table>
                  <thead>
                    <tr>
                      <th className="fuente-fuente">Cedula</th>
                      <th className="fuente-fuente">Primer Nombre</th>
                      <th className="fuente-fuente">Segundo Nombre</th>
                      <th className="fuente-fuente">Primer Apellido</th>
                      <th className="fuente-fuente">Segundo Apellido</th>
                      <th className="fuente-fuente">Sexo</th>
                      <th className="fuente-fuente">Fecha</th>
                      <th className="fuente-fuente">Seccion</th>
                      <th className="fuente-fuente">Grado</th>
                      <th className="fuente-fuente">Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.alumnos.length ? (
                      this.state.alumnos.map((alumno) => {
                        return (
                          <tr key={alumno._id}>
                            <td className="fuente-fuente">{alumno.cedula}</td>
                            <td className="fuente-fuente">{alumno.primerN}</td>
                            <td className="fuente-fuente">{alumno.segundoN}</td>
                            <td className="fuente-fuente">{alumno.primerA}</td>
                            <td className="fuente-fuente">{alumno.segundoA}</td>
                            <td className="fuente-fuente">{alumno.sexo}</td>
                            <td className="fuente-fuente">{alumno.fechaDN}</td>
                            <td className="fuente-fuente">{alumno.seccion}</td>
                            <td className="fuente-fuente">{alumno.grado}</td>
                            <td>
                              <a href={"/alumno/" + alumno.alumno_id} className="btn btn-outline-warning fuente-fuente">
                                Editar </a>
                              <button
                                className="btn btn-outline-danger fuente-fuente"
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
                        <td colSpan="8" className="text-center fuente-fuente">
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
