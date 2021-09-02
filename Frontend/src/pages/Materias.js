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
    materia: "",
  };
  //peticion al back para traer todos los grados
  async componentDidMount() {
    this.getMaterias();
  }

  //meto para usar la misma funcion en varios lados
  getMaterias = async () => {
    const res = await axios.get("http://localhost:4000/materias");
    this.setState({ materias: res.data });
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
                          <tr key={materia._id}>
                            <td>{materia.materias}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => this.deleteGrado(materia._id)}
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
