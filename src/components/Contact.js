import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
const Contact = () => {
  return (
    <div className="contact">
      <InputGroup className="justify-content-center">
        <Form
          className="contactForm"
          style={{
            backgroundColor: "#efefef",
            borderRadius: "16px",
            padding: "16px",
            color: "black",
          }}
        >
          <h1 className="display-3" style={{ textAlign: "center" }}>Contact</h1>
          <br />
          <Form.Group>
            <Form.Label style={{marginLeft:"25%"}}>Name</Form.Label>
            <Form.Control
              className="form-group w-50"
              style={{marginLeft:"25%"}}
              type="text"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{marginLeft:"25%"}}>Email</Form.Label>
            <Form.Control
              className="form-group w-50"
              style={{marginLeft:"25%"}}
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="form-group w-100">
            <Form.Label>Message</Form.Label>
            <Form.Control
              style={{ resize: "none", padding:"16px" }}
              as="textarea"
              type="text"
              rows="6"
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
