import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

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

  return (
    <React.Fragment>
      <Button variant="outline-warning" onClick={handleShow}>
        Editar
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>Modificacion de Alumno {alumno_id}</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Text>Cedula</Form.Text>
              <Form.Control type="text" value={cedula} />
            </Form.Group>
            <Form.Group>
              <Form.Text>Primer Nombre</Form.Text>
              <Form.Control type="text" value={primerN} />
            </Form.Group>
            <Form.Group>
              <Form.Text>Segundo Nombre</Form.Text>
              <Form.Control type="text" value={segundoN} />
            </Form.Group>
            <Form.Group>
              <Form.Text>Primer Apellido</Form.Text>
              <Form.Control type="text" value={primerA} />
            </Form.Group>
            <Form.Group>
              <Form.Text>Segundo Apellido</Form.Text>
              <Form.Control type="text" value={segundoA} />
            </Form.Group>
            <Form.Group>
              <Form.Text>Sexo</Form.Text>
              <Form.Control type="text" value={segundoA} />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};
