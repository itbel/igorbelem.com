import React from "react";
import { Form, Button } from "react-bootstrap";
const Contact = () => {
  return (
    <div className="contact w-100">
      <h1>Contact Me:</h1>
      <Form className="justify-content-center">
        <Form.Group className="form-group">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Label></Form.Label>
          <Form.Control
            style={{ resize: "none" }}
            as="textarea"
            row="3"
            type="text"
            placeholder="Message"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
