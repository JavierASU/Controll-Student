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

        <Container className="item-3" >
          <div className="div-1">
            Razon Social:
          </div>

          <div className="div-2">
            cagua, 
          </div>

          <div></div>


        </Container>
      </div>

    )
  }
}



























