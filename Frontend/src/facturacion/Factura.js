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
  FormLabel,
} from "react-bootstrap";
import axios from "axios";

export default class Factura extends Component {
  state = {
    fc: [],

    filtro: [],
    search: "",
  };

  async componentDidMount() {
    this.getFc();
    this.getFill();
  }

  getFc = async () => {
    const res = await axios.get("http://localhost:4000/facturacion");
    this.setState({ fc: res.data });
  };

  getFill = async (rif) => {
    const res = await axios.get(
      "http://localhost:4000/facturacion/filtro/" + this.state.search
    );
    this.setState({ filtro: res.data });
    console.log(res.data);
  };

  onImputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Container>

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
        </Container>
        <Container>
          <div className="grid-container1">
          {
              this.state.fc.map(fac => (
                <div>
                  
                  <p className="fac-line1 ">Razon Social:  {fac.razonS}</p>
                  <p className="fac-line2">Cagua</p>
                  <p className="fac-line3">Fecha: {fac.fecha}</p>
                  <p className="fac-line4">Domicilio Fiscal: {fac.domicilioF}</p>
                  <p className="fac-line5">Rif/C.I.N°: {fac.Rif}</p>
                  <p className="fac-line6">Telefono: {fac.telefono}</p>
                  <p className="fac-line7">Descripcion o Concepto: {fac.concepto}</p>
                  <p className="fac-line8">Monto Bs: {fac.monto}</p>
                  <p className="fac-line9">Total: {fac.total}</p>
                </div>
              ))
            }
          </div>
        </Container>
      </div>
    );
  }
}

