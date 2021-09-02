import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Table,
  Card,
  Button,
  Link
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
        <Card>
          <Container className="row justify-content-start clo-6 col-sm-3">
            <h5>UNIDAD EDUCATIVA PRIVADA
              TERESA CARREÑO, C.A.</h5>
            Inscrito en el MPPE PD01370513

            <h5> Calle Piar N°71-11-Centro Cagua.Aragua Telefono:0244-4140.8.6.3<hr /><h5>FACTURA N°0</h5>
            </h5>

          </Container>

        </Card>
        <Container>
          
              <table class="table">
                <thead>
                  ...
                </thead>
                <tbody>
                  <tr class="table-active">
                    ...
                  </tr>
                  <tr>
                    ...
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2" class="table-active">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            
        
        </Container>
      </div>

    )
  }
}
























