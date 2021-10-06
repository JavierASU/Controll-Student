import React, { Component, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";


export const UpdateAlumno = (props) => {



  const {
    alumno_id,
    cedula,
    primerN,
    segundoN,
    primerA,
    segundoA,
    sexo,
    fechaDN,
    seccion,
    seccion_id,
    grado,
    grado_id,
  } = props.fill;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, changeState] = useState({
    cedula: "",
    primerN: "",
    segundoN: "",
    primerA: "",
    segundoA: "",
    sexo: "",
    fechaDN: "",
  })


  const onSubmit = async (e) => {
    e.preventDefault();
    const nw = {
      alumno_id,
      cedula: state.cedula,
      primerN: state.primerN,
      segundoN: state.segundoN,
      primerA: state.primerA,
      segundoA: state.segundoA,
      sexo: state.sexo,
      fechaDN: state.fechaDN,
      seccion,
      seccion_id,
      grado,
      grado_id,
    };
    const res = await axios.put("http://localhost:4000/alumno", nw);
    window.location.href = "/inf";
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
        <Modal.Header closeButton>Modificacion de Alumno {alumno_id}</Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Text>Cedula</Form.Text>
              <Form.Control type="text" value={state.cedula}
                onChange={(e) => onImputChange(e, "cedula", changeState)} />
            </Form.Group>
            <Form.Group>
              <Form.Text>Primer Nombre</Form.Text>
              <Form.Control type="text" value={state.primerN}
                onChange={(e) => onImputChange(e, "primerN", changeState)} />
            </Form.Group>
            <Form.Group>
              <Form.Text>Segundo Nombre</Form.Text>
              <Form.Control type="text" value={state.segundoN}
                onChange={(e) => onImputChange(e, "segundoN", changeState)} />
            </Form.Group>
            <Form.Group>
              <Form.Text>Primer Apellido</Form.Text>
              <Form.Control type="text" value={state.primerA}
                onChange={(e) => onImputChange(e, "primerA", changeState)} />
            </Form.Group>
            <Form.Group>
              <Form.Text>Segundo Apellido</Form.Text>
              <Form.Control type="text" value={state.segundoA}
                onChange={(e) => onImputChange(e, "segundoA", changeState)} />
            </Form.Group>
            <Form.Group>
              <Form.Text>Sexo</Form.Text>
              <Form.Control type="text" value={state.sexo}
                onChange={(e) => onImputChange(e, "sexo", changeState)} />
            </Form.Group>
            <Form.Group>
              <Form.Text>fechaDN</Form.Text>
              <Form.Control type="text" value={state.fechaDN}
                onChange={(e) => onImputChange(e, "fechaDN", changeState)} />
            </Form.Group>
            <Button type="submit" variant="outline-success">Actualizar</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};
