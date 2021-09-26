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

export default class Materias extends Component {
  state = {
    materias: [],
    grados: [],
    materia: "",
  };
  //peticion al back para traer todos los grados
  async componentDidMount() {
    this.getMaterias();
    this.getGrados();
  }

  //meto para usar la misma funcion en varios lados
  getMaterias = async () => {
    const res = await axios.get("http://localhost:4000/materias");
    this.setState({ materias: res.data });
  };

  //meto para usar la misma funcion en varios lados
  getGrados = async () => {
    const res = await axios.get("http://localhost:4000/grados");
    this.setState({ grados: res.data });
  };

  //metodo que escucha lo que escribes
  onChangeMateria = (e) => {
    this.setState({
      materia: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/materias", {
      materia: this.state.materia,
      grado_id: this.state.grado,
    });

    //establece el input a estado 0
    this.setState({ materia: "" });
    //refresca la pagina
    this.getMaterias();
  };

  deleteGrado = async (id) => {
    await axios.delete("http://localhost:4000/materias/" + id);
    this.getMaterias();
    console.log(id);
  };

  onImputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-black text-center">Menu de Materia</h1>

        <Container>
          <Row className="mt-4">
            <Col>
              <Card>
                <Form onSubmit={this.onSubmit}>
                  <h3>Crear Materias</h3>
                  <input
                    type="text"
                    className="from-control"
                    value={this.state.materia}
                    onChange={this.onChangeMateria}
                  ></input>

                  <select
                    className="form-control mt-4 mb-4 bg-dark text-light Border-all"
                    name="grado"
                    onChange={this.onImputChange}
                  >
                    <option value={null}>Seleccionar un grado..</option>

                    {this.state.grados.length ? (
                      this.state.grados.map((g) => (
                        <option key={g.grado_id} value={g.grado_id}>
                          {g.grado}
                        </option>
                      ))
                    ) : (
                      <option></option>
                    )}
                  </select>

                  <button type="submit" className="btn btn-primary">
                    Guardar
                  </button>
                </Form>
                <Card.Header className="text-center">
                  <h3>Datos</h3>
                </Card.Header>
                <Table>
                  <thead>
                    <tr>
                      <th>Materias</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.materias.length ? (
                      this.state.materias.map((materia) => {
                        return (
                          <tr key={materia.materia_id}>
                            <td>{materia.materia}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() =>
                                  this.deleteGrado(materia.materia_id)
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
                        <td colSpan="3" className="text-center">
                          No hay materias creadas
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
