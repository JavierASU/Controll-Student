import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Table,
  Card,
  Button,
  Link,
  FormLabel
} from "react-bootstrap";
import axios from "axios";





export default class Factura extends Component {

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
        <Row>
          <Col>
            <Card.Header>
              <Card.Body>
                <Card>
                  <Container>
                    <Row>
                      <Col><h10>UNIDAD EDUCATIVA PRIVADA
                        TERESA CARREÑO, C.A.</h10><hr />Inscrito en el MPPE PD01370513 </Col>
                      <Col><h10> Calle Piar 
                        N°71-11-Centro 
                        Cagua.Aragua 
                        Telefono:0244-4140.8.6.3/RIF.J-40781620-4<hr /><h5>FACTURA N°0</h5>
                      </h10></Col>
                    </Row>
                  </Container>

                </Card>

                <Card>
                  <Card.Body>
                    <Container>
                      <Form>
                      <Row>
                        <Col>Razon Social:</Col> 
                        <Col>Datos que tiene que llenar con get alumno</Col>
                        <Col>Fecha:</Col>
                      </Row>
                      <br></br>
                      <br></br>
                      <Row>
                        <Col>Domicilo Fiscal:</Col>
                        <Col>Rif/C.I.N°:</Col>
                        <Col>Telefono:</Col>
                      </Row>
                      <br></br>
                      <br></br>
                      <Row>
                        <Col>Inscripcion:</Col>
                        <Col>Concepto:</Col>
                        <Col>Monto:</Col>
    
                        
                      </Row>
                      </Form>
                    </Container>

                  </Card.Body>
                </Card>

              </Card.Body>
            </Card.Header>
          </Col>
        </Row>
      </div>

    )
  }
}



























