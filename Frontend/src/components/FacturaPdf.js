import React, { Component } from 'react'
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

export const FacturaPdf = (props) => {

    const {
        razonS,
        domicilioF,
        Rif,
        telefono,
        fecha,
        concepto,
        monto,
        total,
    }=props.fill

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="grid-container fact-li">
                            <div className="item-1">
                                <h4>UNIDAD EDUCATIVA PRIVADA TERESA CARREÑO , C.A.</h4>
                                <h5>INSCRITO EN EL MPPE PD01370513</h5>
                            </div>

                            <div className="item-2">
                                <h5>Calle Piar n°72-11-centro Cagua Edo-Aragua</h5>
                                <h6>telefono:0244-414-08-63/ RF:J40781620-4</h6>
                                <div className="text-item-2">Factura N°</div>
                            </div>
                        </div>



                    </Col>
                </Row>
            </Container>
        </div>
    )














}

