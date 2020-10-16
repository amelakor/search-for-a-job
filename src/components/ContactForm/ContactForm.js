import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { db } from "../../firebase/firebase";

export default function ContactForm() {
  //Form
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSumbit = (e) => {
    e.preventDefault();
    db.collection("contactForm")
      .add({
        userName: userName,
        email: email,
      })
      .then(() => {
        alert(
          " Thank you,your message is sent.  We will contact you as soon as possible."
        );
      })
      .catch((error) => {
        alert(error.message);
      });

    setUserName("");
    setEmail("");
  };

  return (
    <div className="contact-form">
      <h3 onClick={handleShow}>Click Here if you need a help? </h3>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Please fill the form, and we will contact you as soon as possible.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSumbit}>
            <Form.Group controlId="formBasiName">
              <Form.Label>You Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
