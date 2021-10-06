import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

export const UpdateFactura = (props) => {


    const {
        factura_id,
        razonS,
    } = props.fill;

    const [state, changeState] = useState({
        razonS: "",
        domicilioF: "",
        Rif: "",
        telefono: "",
        fecha: "",
        concepto: "",
        monto: "",
        total: "",

    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const onSubmit = async (e) => {
        e.preventDefault();
        const fc = {
            factura_id,
            razonS: state.razonS,
            domicilioF: state.domicilioF,
            Rif: state.Rif,
            telefono: state.telefono,
            concepto: state.concepto,
            monto: state.monto,
            total: state.total,
        };
        const res = await axios.put("http://localhost:4000/facturacion", fc);

    };

    const onImputChange = (e, valueName, changeState) => {
        let value = e.target.value;
        changeState(state => ({
            ...state, [valueName]: value
        }))
    };

    return (
        <React.Fragment>
            <Button variant="outline-warning" onClick={handleShow}>
                Editar
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>Modificar Factura {factura_id}</Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Text>Rif</Form.Text>
                            <Form.Control type="text" value={state.Rif}
                                onChange={(e) => onImputChange(e, "Rif", changeState)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text>Razon Social</Form.Text>
                            <Form.Control type="text" value={state.razonS}
                                onChange={(e) => onImputChange(e, "razonS", changeState)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text>domicilio Fiscal</Form.Text>
                            <Form.Control type="text" value={state.domicilioF}
                                onChange={(e) => onImputChange(e, "domicilioF", changeState)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text>Telefono</Form.Text>
                            <Form.Control type="text" value={state.telefono}
                                onChange={(e) => onImputChange(e, "telefono", changeState)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text>Fecha</Form.Text>
                            <Form.Control type="text" value={state.fecha}
                                onChange={(e) => onImputChange(e, "fecha", changeState)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text>Concepto de Pago</Form.Text>
                            <Form.Control type="text" value={state.concepto}
                                onChange={(e) => onImputChange(e, "concepto", changeState)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text>Monto</Form.Text>
                            <Form.Control type="text" value={state.monto}
                                onChange={(e) => onImputChange(e, "monto", changeState)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text>Total</Form.Text>
                            <Form.Control type="text" value={state.total}
                                onChange={(e) => onImputChange(e, "total", changeState)}></Form.Control>
                        </Form.Group>
                        <Button type="submit" variant="outline-success">Actualizar</Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </React.Fragment>
    )













}