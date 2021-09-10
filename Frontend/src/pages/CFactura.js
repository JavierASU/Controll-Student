import React, { Component } from 'react'
import { Container, Col, Row, Form, Table, Card, Button, Modal } from "react-bootstrap";
import axios from "axios";




export default class CFactura extends Component {

    state = {
        factura: [],
        fact: "",

        razonS: "",
        domicilioF: "",
        Rif: "",
        telefono: "",
        fecha: "",
        concepto: "",
        monto: "",
        total: "",

        Open: false,
    }


    onImputChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
        });
    };


    onSubmit = async (e) => {
        e.preventDefault();
        const factu = {
            razonS: this.state.razonS,
            domicilioF: this.state.domicilioF,
            Rif: this.state.Rif,
            telefono: this.state.telefono,
            fecha: this.state.fecha,
            concepto: this.state.concepto,
            monto: this.state.monto,
            total: this.state.total

        };
        const res = await axios.post("http://localhost:4000/facturacion", factu);
        window.location.href = '/factura'
    };



    openModal = async () => {
        this.setState({ Open: !this.state.Open })
    }

    render() {


        return (
            <div className="d-grid gap-2">

                <Button variant="outline-success" onClick={this.openModal} size="lg" >
                    Crear Nueva Factura
                </Button>
                <Modal show={this.state.Open} onHide={this.openModal}>
                    <Modal.Header closeButton>
                        <h2 className="text-seccess">Formulario de Creacion de Factura</h2>
                    </Modal.Header>
                    <Modal.Body>
                        <h3> Ingrese los Dato de la Factura</h3>

                        <div className="form group">
                            <input
                                type="text"
                                value={this.state.razonS}
                                className="form-control"
                                placeholder="Razon Social"
                                onChange={this.onImputChange}
                                name="razonS"
                            />
                        </div>
                        <div className="form group">
                            <input
                                type="text"
                                value={this.state.domicilioF}
                                className="form-control"
                                placeholder="Domicilio Fiscal"
                                onChange={this.onImputChange}
                                name="domicilioF"
                            />
                        </div>
                        <div className="form group">
                            <input
                                type="text"
                                value={this.state.Rif}
                                className="form-control"
                                placeholder="Rif/Cedula"
                                onChange={this.onImputChange}
                                name="Rif"
                            />
                        </div>
                        <div className="form group">
                            <input
                                type="text"
                                value={this.state.telefono}
                                className="form-control"
                                placeholder="Telefono"
                                onChange={this.onImputChange}
                                name="telefono"
                            />
                        </div>
                        <div className="form group">
                            <input
                                type="text"
                                value={this.state.fecha}
                                className="form-control"
                                placeholder="Fecha"
                                onChange={this.onImputChange}
                                name="fecha"
                            />
                        </div>
                        <div className="form group">
                            <input
                                type="text"
                                value={this.state.concepto}
                                className="form-control"
                                placeholder="Concepto de Factura"
                                onChange={this.onImputChange}
                                name="concepto"
                            />
                        </div>
                        <div className="form group">
                            <input
                                type="text"
                                value={this.state.monto}
                                className="form-control"
                                placeholder="Monto "
                                onChange={this.onImputChange}
                                name="monto"
                            />
                        </div>
                        <div className="form group">
                            <input
                                type="text"
                                value={this.state.total}
                                className="form-control"
                                placeholder="Monto Total"
                                onChange={this.onImputChange}
                                name="total"
                            />
                        </div>

                        

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-success" onClick={this.onSubmit}>Siguiente</Button>
                        <Button variant="outline-danger" onClick={this.openModal} > Cancelar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
