import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Table,
  Card,
  Button,
} from "react-bootstrap";
import axios from "axios";
import { UpdateAlumno } from "../components/UpdateAlumno";

export default class Secciones extends Component {
  state = {
    alumnos: [],

    filtros: [],
    search: "",
  };

  async componentDidMount() {
    this.getFill();
  }

  getFill = async (cedula) => {
    const res = await axios.get(
      "http://localhost:4000/alumno/filtro/" + this.state.search
    );
    this.setState({ filtros: res.data });
    console.log(res.data)
  };

  onImputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  deleteInf = async (id) => {
    await axios.delete("http://localhost:4000/alumno/" + id);
    this.getFill();
    console.log(id);
  };

  render() {
    return (
      <div>
        <h1 className="text-black text-center">Menu de Secciones</h1>

        <Container>
          <Row>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                this.getFill();
              }}
            >
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
              <Button type="submit">Buscar</Button>
            </Form>

            <Row className="mt-4">
              <Col>
                <Card>
                  <Card.Header className="text-center">
                    <h3>Datos</h3>
                  </Card.Header>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th className="justyfy">Cedula</th>
                        <th className="justyfy">Primer Nombre</th>
                        <th className="justyfy">Segundo Nombre</th>
                        <th className="justyfy">Primer Apellido</th>
                        <th className="justyfy">Segundo Apellido</th>
                        <th className="justyfy">Sexo</th>
                        <th className="justyfy">Fecha</th>
                        <th className="justyfy">Seccion</th>
                        <th className="justyfy">Grado</th>
                        <th className="justyfy">Materias</th>
                        <th className="">Opciones</th>
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
                              <td>{fill.materia}</td>
                              <td>
                                <UpdateAlumno fill={fill} />
                                <button
                                  className="btn btn-outline-danger"
                                  onClick={() => this.deleteInf(fill.alumno_id)}
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
          </Row>
        </Container>
      </div>
    );
  }
}
