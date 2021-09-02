import React, { Component } from "react";
import { Container, Col, Row, Form, Table, Card } from "react-bootstrap";
import axios from "axios";

export default class Alumno extends Component {
  state = {
    seccionesSL: [],
    gradosSL: [],
    seccionesSelect: "",
    secciones:[],
    gradosSelect: "",

    cedula: "",
    primerN: "",
    segundoN: "",
    primerA: "",
    segundoA: "",
    sexo: "",
    fechaDN: "",
  };

  async componentDidMount() {
    const url1 = "http://localhost:4000/seccion";
    const url2 = "http://localhost:4000/grados";
    const secciones = await axios.get(url1);
    const grados = await axios.get(url2);

    this.setState({
      seccionesSL: secciones.data,
      gradosSL: grados.data,
    });

    // if (secciones.data.length >0) {
    //   this.setState({
    //     seccionesSL: secciones.data.map(seccion => seccion.seccion),
    //     seccionesSelect:secciones.data[0].seccion.seccion
    //   })
    //   console.log(this.state.seccionesSL)
    //   console.log(this.state.seccionesSelect)
    // }

    // if(grados.data.length > 0){
    //   this.setState({
    //     gradosSL: grados.data.map(grados => grados.grado),
    //     gradosSelect:grados.data[0].grado.grado
    //   })
    //   console.log(this.state.gradosSL)
    //   console.log(this.state.gradosSelect)
    // }
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
      grado: this.state.gradosSelect,
      seccion: this.state.seccionesSelect,
    };
    const res = await axios.post("http://localhost:4000/alumno", alumno);
    console.log(res);
  };

  onImputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeGrado = async (e) => {
    let grado_id = e.target.value;
    const secciones = this.state.seccionesSL.filter(
      (s) => s.grados.grado_id === grado_id
    );
      this.setState({
      secciones: secciones,
    });
  };

  render() {
    return (
      <div>
        <Container>
          <h1 className="text-black text-center">Menu de Alumnos</h1>

          <Row className="mt-4 ">
            <Col>
              <Card>
                <Card.Header className="text-center">
                  <h3>Crear Nuevo Alumno</h3>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={this.onSubmit}>
                    <h4 className="text-balck text-center">
                      Seleccione una Grado
                    </h4>
                    <select
                      className="form-control"
                      name="grado"
                      onChange={this.onChangeGrado}
                    >
                      <option value={null}>Seleccionar un grado..</option>

                      {this.state.gradosSL.length ? (
                        this.state.gradosSL.map((g) => (
                          <option key={g.grado_id} value={g.grado_id}>
                            {g.grado}
                          </option>
                        ))
                      ) : (
                        <option></option>
                      )}
                    </select>

                    <h4 className="text-balck text-center">
                      Seleccione una Seccion
                    </h4>
                    <select
                      className="form-control"
                      name="seccion"
                      onChange={this.onImputChange}
                    >
                      <option value={null}>Seleccionar una seccion..</option>
                      {this.state.secciones.length ? (
                        this.state.secciones.map((seccion) => (
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
                        className="form-control"
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
                        className="form-control"
                        placeholder="Primer Nombre"
                        onChange={this.onImputChange}
                        name="primerN"
                      />
                    </div>
                    <div className="form group">
                      <input
                        type="text"
                        vale={this.state.segundoN}
                        className="form-control"
                        placeholder="Segundo Nombre"
                        onChange={this.onImputChange}
                        name="segundoN"
                      />
                    </div>
                    <div className="form group">
                      <input
                        type="text"
                        value={this.state.primerA}
                        className="form-control"
                        placeholder="Primer Apellido"
                        onChange={this.onImputChange}
                        name="primerA"
                      />
                    </div>

                    <div className="form group">
                      <input
                        type="text"
                        value={this.state.segundoA}
                        className="form-control"
                        placeholder="Segundo Apellido"
                        onChange={this.onImputChange}
                        name="segundoA"
                      />
                    </div>
                    <div className="form group">
                      <input
                        type="text"
                        value={this.state.sexo}
                        className="form-control"
                        placeholder="Sexo"
                        onChange={this.onImputChange}
                        name="sexo"
                      />
                    </div>
                    <div className="form group">
                      <input
                        type="text"
                        value={this.state.fechaDN}
                        className="form-control"
                        placeholder="Fecha"
                        onChange={this.onImputChange}
                        name="fechaDN"
                      />

                      <button type="submit" className="btn btn-outline-success">
                        Guardar
                      </button>
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
