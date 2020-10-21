import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Nav.css';
import { IconButton } from "@material-ui/core";

function Login() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <IconButton variant="contained" color="primary" onClick={handleShow} aria-label="account">
        <AccountCircleIcon style={{ fontSize: "2rem" }} />
      </IconButton>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <ModalHeader> <h4>Login</h4> </ModalHeader>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me!" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          Don't have an account? Click here to create one!
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;