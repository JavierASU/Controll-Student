import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Table,
  Card,
  Button,
  Modal,
} from "react-bootstrap";
import axios from "axios";

export default class Alumno extends Component {
  state = {
    allSecciones: [],
    grados: [],
    seccionesPorGrado: [],
    materiasPorgrado: [],
    cedula: "",
    primerN: "",
    segundoN: "",
    primerA: "",
    segundoA: "",
    sexo: "",
    fechaDN: "",
    seccion_id: "",
    Open: false,
  };

  async componentDidMount() {
    const url1 = "http://localhost:4000/seccion";
    const url2 = "http://localhost:4000/grados";
    const secciones = await axios.get(url1);
    const grados = await axios.get(url2);

    this.setState({
      allSecciones: secciones.data,
      grados: grados.data,
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const alumno = {
      cedula: this.state.cedula,
      primerN: this.state.primerN,
      segundoN: this.state.segundoN,
      primerA: this.state.primerA,
      segundoA: this.state.segundoA,
      sexo: this.state.sexo,
      fechaDN: this.state.fechaDN,
      seccion_id: this.state.seccion_id,
    };
    const res = await axios.post("http://localhost:4000/alumno", alumno);
    window.location.href = "/alumno";
  };

  onImputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeGrado = async (e) => {
    
    let grado_id = e.target.value;
    const secciones = this.state.allSecciones.filter(
      (s) => parseInt(s.grado_id) === parseInt(grado_id)
    );
    this.setState({
      seccionesPorGrado: secciones,
    });

    console.log(secciones);
  };

  openModal = async () => {
    this.setState({ Open: !this.state.Open });
  };

  render() {
    return (
      <div>
        <Container className="From-alumno">
          <h1 className="text-black text-center fuente-fuente">
            Menu de Alumnos
          </h1>

          <Row className="mt-4 ">
            <Col>
              <Card className="card-card">
                <Card.Header className="text-center fuente-fuente">
                  <h3>Crear Nuevo Alumno</h3>
                </Card.Header>
                <Card.Body className="containe-card">
                  <Form onSubmit={this.onSubmit}>
                    <h4 className="text-balck text-center fuente-fuente">
                      Seleccione un Grado
                    </h4>
                    <select
                      className="form-control div-container fuente-fuente"
                      name="grado"
                      onChange={this.onChangeGrado}
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

                    <h4 className="text-balck text-center fuente-fuente">
                      Seleccione una Seccion
                    </h4>
                    <select
                      className="form-control div-container fuente-fuente"
                      name="seccion_id"
                      onChange={this.onImputChange}
                    >
                      <option value={null}>Seleccionar una seccion..</option>
                      {this.state.seccionesPorGrado.length ? (
                        this.state.seccionesPorGrado.map((seccion) => (
                          <option
                            key={seccion.seccion_id}
                            value={seccion.seccion_id}
                          >
                            {seccion.seccion}
                          </option>
                        ))
                      ) : (
                        <option></option>
                      )}
                    </select>

                    <br></br>
                    <br></br>

                    <div className="form group">
                      <input
                        type="text "
                        className="form-control div-container fuente-fuente"
                        value={this.state.cedula}
                        placeholder="cedula"
                        onChange={this.onImputChange}
                        name="cedula"
                      />
                    </div>
                    <div className="form group">
                      <input
                        type="text"
                        value={this.state.primerN}
                        className="form-control div-container fuente-fuente"
                        placeholder="Primer Nombre"
                        onChange={this.onImputChange}
                        name="primerN"
                      />
                    </div>
                    <div className="form group">
                      <input
                        type="text"
                        vale={this.state.segundoN}
                        className="form-control div-container fuente-fuente"
                        placeholder="Segundo Nombre"
                        onChange={this.onImputChange}
                        name="segundoN"
                      />
                    </div>
                    <div className="form group">
                      <input
                        type="text"
                        value={this.state.primerA}
                        className="form-control div-container fuente-fuente"
                        placeholder="Primer Apellido"
                        onChange={this.onImputChange}
                        name="primerA"
                      />
                    </div>

                    <div className="form group">
                      <input
                        type="text"
                        value={this.state.segundoA}
                        className="form-control div-container fuente-fuente"
                        placeholder="Segundo Apellido"
                        onChange={this.onImputChange}
                        name="segundoA"
                      />
                    </div>
                    <div className="form group">
                      <input
                        type="text"
                        value={this.state.sexo}
                        className="form-control div-container fuente-fuente"
                        placeholder="Sexo"
                        onChange={this.onImputChange}
                        name="sexo"
                      />
                    </div>
                    <div className="form group">
                      <input
                        type="text"
                        value={this.state.fechaDN}
                        className="form-control div-container fuente-fuente"
                        placeholder="Fecha"
                        onChange={this.onImputChange}
                        name="fechaDN"
                      />
                      <div className="d-grid gap-2">
                        <Button
                          variant="outline-success div-container fuente-fuente"
                          onClick={this.openModal}
                          size="lg"
                        >
                          Guardar
                        </Button>
                        <Modal
                          show={this.state.Open}
                          onHide={this.openModal}
                          className="modal-style"
                        >
                          <Modal.Header closeButton>
                            <h2 className="text-danger fuente-fuente">
                              CONFIRMACION DE DATOS
                            </h2>
                          </Modal.Header>
                          <Modal.Body className="fuente-fuente Border-all">
                            UNA VES CREADO EL ESTUDIANTE LOS DATOS SERAN
                            GUARDADOS, SI HUBO ERROR DEBERAR BORRAR Y CREAR DE
                            NUEVO EL ESTUDIANTE.
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant="outline-success fuente-fuente"
                              onClick={this.onSubmit}
                            >
                              Guardar
                            </Button>
                            <Button
                              variant="outline-danger fuente-fuente"
                              onClick={this.openModal}
                            >
                              {" "}
                              Cancelar
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
