import React, { Component } from 'react'
import { Container, Col, Row, Form, Card, } from "react-bootstrap";


import IMG4 from "../img/img4.jpg";
import IMG4TL from "../img/img5TL.jpg";
import IMGSC from "../img/escolar1.jpg";
import IMGSC1 from "../img/escolar2.jpg";
import IMGSC2 from "../img/escolar3.jpg";


export default class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="text-black text-center">U.E.P "TERESA CARREÑO"</h1>
                <br></br>
                <br></br>

                <Container className="d-flex justify-content-center align-items-center">
                    <Row >
                        <Col className="md-4 ">
                            <Card className="col-md-10 bg-dark Fond-Card Up-card" >
                                <img src={IMGSC} alt="" className="Card-Front"/>
                                <Card.Body>
                                    <h4 className="card-tittle text-light">Gestion de Estudiantes</h4>
                                    <p className="card-text text-secondary text-light">Podras ver y crear secciones, grados, estudiantes</p>
                                    <div className="btn-group-vertical">
                                        <a href="/seccion" className="btn btn-outline-secondary text-light Btn-card">
                                            Crear Secciones</a>
                                        <a href="/grados" className="btn btn-outline-secondary text-light Btn-card">
                                            Crear Grados</a>
                                        <a href="/materias" className="btn btn-outline-secondary text-light Btn-card">
                                            Crear Materias</a>
                                        <a href="/alumno" className="btn btn-outline-secondary text-light Btn-card">
                                            Crear Alumnos </a>
                                    </div>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className="md-4">
                            <Card className="col-md-10 bg-dark Fond-Card Up-card">
                                <img src={IMGSC1} alt="" className="Card-Front"/>
                                <Card.Body>
                                    <h4 className="card-tittle text-light">Informacion</h4>
                                    <p className="card-text text-secondary text-light">Podras ver la informacion de estudiantes secciones y grados</p>
                                    <a href="/inf" className="btn btn-outline-secondary text-light Btn-card">
                                        Ir a Informacion </a>


                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className="md-4">
                            <Card className="col-md-10 bg-dark Fond-Card Up-card">
                                <img src={IMGSC2} alt="" className="Card-Front"/>
                                <Card.Body>
                                    <h4 className="card-tittle text-light">Gestion de Facturacion</h4>
                                    <p className="card-text text-secondary text-light">Crear e Imprimir Facturas</p>
                                    <div className="btn-group-vertical">
                                    <a href="/Cfactura" className="btn btn-outline-secondary text-light Btn-card">
                                        Crear Facturacion </a>
                                    <a href="/factura" className="btn btn-outline-secondary text-light Btn-card">
                                        Ir a Facturacion </a>
                                    </div>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>


            </div>
        )
    }
}

