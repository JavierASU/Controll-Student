import React, { Component } from "react";
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
import { UpdateFactura } from "../components/UpdateFactura";
import {FacturaPdf} from "../components/FacturaPdf"
import axios from "axios";

export default class infactura extends Component {
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

  deleteFactura = async (factura_id) => {
    await axios.delete("http://localhost:4000/facturacion/" + factura_id);
    this.getFc();
    console.log(factura_id)
  };


  render() {
    return (
      <div>
        <Container>
          <Row>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                this.getFill();
              }}
            >
              <div className="form-search">
                <input
                  type="text "
                  className="form-control"
                  value={this.state.search}
                  placeholder="Busqueda"
                  onChange={this.onImputChange}
                  name="search"
                />
              </div>
              <Button type="submit">Buscar</Button>
            </Form>
          </Row>

          <Row className="mt-4">
            <Col>
              <Card>
                <Card.Header className="text-center">
                  <h3>Facturas</h3>
                </Card.Header>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <td>N°Control</td>
                      <td>Rif</td>
                      <td>Razon Social</td>
                      <td>Domicilio Fiscal</td>
                      <td>Telefono</td>
                      <td>Fecha</td>
                      <td>Concepto</td>
                      <td>Monto</td>
                      <td>Total</td>
                      <td>Opciones</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.filtro.length ? (
                      this.state.filtro.map((fill) => {
                        return (
                          <tr key={fill.Rif}>
                            <td>{fill.factura_id}</td>
                            <td>{fill.Rif}</td>
                            <td>{fill.razonS}</td>
                            <td>{fill.domicilioF}</td>
                            <td>{fill.telefono}</td>
                            <td>{fill.fecha}</td>
                            <td>{fill.concepto}</td>
                            <td>{fill.monto}</td>
                            <td>{fill.total}</td>
                            <td>
                              <UpdateFactura fill={fill} />
                              <button
                                className="btn btn-outline-danger"
                                onClick={() => this.deleteFactura(fill.factura_id)}
                              >
                                Eliminar
                              </button>
                              <button onClick={<FacturaPdf fill={fill}/>}></button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="10" className="text-center">
                          Realice la busqueda por Rif/Cedula
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
