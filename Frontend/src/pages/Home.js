import React, { Component } from 'react'
import { Container, Col, Row, Form, Card, } from "react-bootstrap";


import IMG1 from "../img/image1.jpg"

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="text-black text-center">Bienvenido a Control de Alumnos</h1>
                <br></br>
                <br></br>
                
                <Container className="d-flex justify-content-center align-items-center">
                    <Row >
                        <Col className="md-4 ">
                            <Card className="col-md-10 bg-dark ">
                                <img src={IMG1} alt="" />
                                <Card.Body>
                                    <h4 className="card-tittle text-light">Secciones</h4>
                                    <p className="card-text text-secondary text-light">Podras ver y crear tus secciones creadas catidad de alumnos y datos</p>
                                    <div className="btn-group-vertical">
                                    <a href="/seccion" className="btn btn-outline-secondary text-light">
                                        Crear Secciones</a>
                                    <a href="/grados" className="btn btn-outline-secondary text-light">
                                        Crear Grados</a>
                                        <a href="/materias" className="btn btn-outline-secondary text-light">
                                        Crear Materias</a>
                                        <a href="/alumno" className="btn btn-outline-secondary text-light">
                                        Crear Alumnos </a>
                                    </div>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className="md-4">
                            <Card className="col-md-10 bg-dark">
                                <img src={IMG1} alt="" />
                                <Card.Body>
                                    <h4 className="card-tittle text-light">Informacion</h4>
                                    <p className="card-text text-secondary text-light">Podras ver la informacion de alumnos,secciones y grados</p>
                                    <a href="/inf" className="btn btn-outline-secondary text-light">
                                        Ir a Informacion </a>
                                        <a href="/factura" className="btn btn-outline-secondary text-light">
                                        Ir a Facturacion </a>
                                   
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className="md-4">
                            <Card className="col-md-10 bg-dark">
                                <img src={IMG1} alt="" />
                                <Card.Body>
                                    <h4 className="card-tittle"></h4>
                                    <p className="card-text text-secondary"></p>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>


            </div>
        )
    }
}

