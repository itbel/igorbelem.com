import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
const Contact = () => {
  return (
    <div className="contact pl-5 pr-5 justify-content-center">
      <h1 className="display-4">Contact</h1>
      <br></br>
      <h5>Feel free to contact me and I'll respond as soon as I can</h5>
      <br></br>
      <Container>
        <Row>
          <Col>
            <h5>Contact Info</h5>
            <p>
              <small>igortbelem@gmail.com</small>
            </p>
          </Col>
          <Col>
            <Form style={{ textAlign: "left" }}>
              <h4>Get in touch</h4>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Your email" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2"></Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Your message"
                  rows="8"
                />
              </Form.Group>
              <Button style={{ width: "100%" }}>Submit Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
