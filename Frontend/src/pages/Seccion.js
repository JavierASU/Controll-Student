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

export default class Secciones extends Component {
  state = {
    secciones: [],
    grados: [],
    seccion: "",
    grado: "",
  };
  //peticion al back para traer todos los grados
  async componentDidMount() {
    const secciones = await axios.get("http://localhost:4000/seccion");
    const grados = await axios.get("http://localhost:4000/grados");

    this.setState({ secciones: secciones.data, grados: grados.data });
  }

  //meto para usar la misma funcion en varios lados
  getSeccion = async () => {
    const res = await axios.get("http://localhost:4000/seccion");
    this.setState({ secciones: res.data });
  };

  //metodo que escucha lo que escribes
  onChangeSeccion = (e) => {
    this.setState({
      seccion: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/seccion", {
      seccion: this.state.seccion,
      grado_id: this.state.grado,
    });
    //establece el input a estado 0
    this.setState({ seccion: ""});
    //refresca la pagina
    this.getSeccion();
  };

  onImputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  deleteGrado = async (id) => {
    await axios.delete("http://localhost:4000/seccion/" + id);
    this.getSeccion();
    console.log(id);
  };

  render() {
    return (
      <div>
        <h1 className="text-black text-center">Menu de Secciones</h1>

        <Container>
          <Row className="mt-4">
            <Col>
              <Card className="bg-dark Border-all">
                <Form onSubmit={this.onSubmit}>
                  <h3 className="text-light">Crear Seccion</h3>
                  <input
                    type="text"
                    className="from-control Border-all"
                    value={this.state.seccion}
                    onChange={this.onChangeSeccion}
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

                  <button
                    type="submit"
                    className=" mb-4 btn btn-outline-success"
                  >
                    Guardar
                  </button>
                </Form>
                <Card.Header className="text-center">
                  <h3 className="text-light">Datos</h3>
                </Card.Header>
                <Table className="text-light">
                  <thead>
                    <tr >
                      <th className="text-light">Seccion</th>
                      <th className="text-light">Grado</th>
                      <th className="text-light">Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.secciones.length ? (
                      this.state.secciones.map((seccion) => {
                        return (
                          <tr key={seccion.seccion_id}>
                            <td>{seccion.seccion}</td>
                            <td>{seccion.grado}</td>

                            <td>
                              <button
                                className="btn btn-outline-danger"
                                onClick={() =>
                                  this.deleteGrado(seccion.seccion_id)
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
