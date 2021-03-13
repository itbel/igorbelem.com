import React, { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
require('dotenv').config()

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mailSent, setMailSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      if (message.length > 10) {
        if (message.length < 10000) {
          let emailData = {
            name: name,
            email: email,
            message: message,
            mailSent: mailSent,
            error: error,
          };
          try{
            console.log(process.env.REACT_APP_url)
            console.log(process.env.REACT_APP_API_key)
            const response = await axios({
              method: 'post',
              url: process.env.REACT_APP_url,
              data: {
                body: emailData.message,
                email: emailData.email
              },
              headers:{
                "x-api-key" : process.env.REACT_APP_API_key,
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
              }
            })
            console.log(response)
            setName("");
            setEmail("");
            setMessage("");
          }catch(err){
            console.log(err)
            alert("An error occured. Please try again later, or contact through e-mail")
          }
        } else {
          alert("Message must not exceed 10,000 characters");
        }
      } else {
        alert("Message length must be greater than 10");
      }
    } else {
      alert("All fields must be entered!");
    }
  };
  return (
    <div className="contact pl-5 pr-5 pb-5 justify-content-center">
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
          <Col xs={12} lg={8}>
            <Form style={{ textAlign: "left" }} onSubmit={handleSubmit}>
              <h4>Get in touch</h4>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={name}
                  type="text"
                  placeholder="Your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  type="email"
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  value={message}
                  as="textarea"
                  placeholder="Your message"
                  rows="8"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" variant="dark" style={{ width: "100%" }}>
                Submit Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
