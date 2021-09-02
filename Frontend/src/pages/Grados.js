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

export default class Grados extends Component {
  state = {
    grados: [],
    grado: "",
  };
  //peticion al back para traer todos los grados
  async componentDidMount() {
    this.getGrados();
  }

  //meto para usar la misma funcion en varios lados
  getGrados = async () => {
    const res = await axios.get("http://localhost:4000/grados");
    this.setState({ grados: res.data});
  };

  //metodo que escucha lo que escribes
  onChangeGrado = (e) => {
    this.setState({
      grado: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/grados", {
      grado: this.state.grado,
    });
    //establece el input a estado 0
    this.setState({ grado: "" });
    //refresca la pagina
    this.getGrados();
  };

  deleteGrado = async (id_grado) => {
    await axios.delete("http://localhost:4000/grados/" +id_grado); 
    this.getGrados();
    console.log(id_grado)
  };

  render() {
    return (
      <div>
        <Container className="bg-light">
          <Row className="mt-4 bg-light">
            <Col className="bg-dark">
              <Card className="bg-dark">
                <Form onSubmit={this.onSubmit} className="bg-dark">
                  <h3 className="text-light">Crear Grado o Año</h3>
                  <input
                    type="text"
                    className="from-control"
                    value={this.state.grado}
                    onChange={this.onChangeGrado}
                  ></input>
                  <button type="submit" className="btn btn-outline-success">
                    Guardar
                  </button>
                </Form>
                <Card.Header className="text-center">
                  <h3 className="text-light">Datos</h3>
                </Card.Header>
                <Table>
                  <thead>
                    <tr>
                      <th className="text-light">Grados y Años</th>
                      <th className="text-light">Opciones</th>
                    </tr>
                  </thead>
                  <tbody className="text-light">
                    {this.state.grados.length ? (
                      this.state.grados.map((grado) => {
                        return (
                          <tr key={grado.id_grado}>
                            <td className="text-light">{grado.grado}</td>
                                <td>
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={() => this.deleteGrado(grado.grado_id)}
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
                          No hay Grados Creados
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
