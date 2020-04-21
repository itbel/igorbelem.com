import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
const Contact = () => {
  return (
    <div className="contact w-100">
      <h1>Contact Me:</h1>
      <InputGroup className="justify-content-center">
        <Form
          className="w-50"
          style={{
            backgroundColor: "#efefef",
            borderRadius: "16px",
            padding: "16px",
            color: "black",
            paddingBottom: "10vh",
          }}
        >
          <Form.Group className="form-group">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Message</Form.Label>
            <Form.Control
              style={{ resize: "none" }}
              as="textarea"
              type="text"
              placeholder="Message"
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </InputGroup>
    </div>
  );
};

export default Contact;
