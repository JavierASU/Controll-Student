import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Table,
  Card,
  Button,
  Link
} from "react-bootstrap";
import axios from "axios";

export default class Secciones extends Component {
  state = {
    alumnos: [],
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/alumno");
    this.setState({ alumnos: res.data });
  }

  render() {
    return (
      <div>
        <h1 className="text-black text-center">Menu de Secciones</h1>

        <Container>
          <Row>
            <Form>
              <Form.Control></Form.Control>
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
                                <a href={"/alumno/"+ alumno.alumno_id} className="btn btn-warning">
                                        Editar </a>
                              
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
