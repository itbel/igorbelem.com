import React, { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import Axios from "axios";
import Spinner from "./Spinner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      if (message.length > 10) {
        if (message.length < 10000) {
          let emailData = {
            name: name,
            email: email,
            message: message,
          };
          try{
            setIsSending(true)
            const response = await Axios({
              method: 'post',
              url: `https://33qka4mlhl.execute-api.us-east-1.amazonaws.com/prod/contact`,
              data: {
                body: emailData.message,
                email: emailData.email
              },
              headers:{
                "x-api-key" : "5DCuVm7b9AZDGeOyak2k7pGBSe3ZnEk2b3v27cf0",
                'Content-Type': 'application/json',
              }
            })
            console.log(response)
            alert("Message was sent successfully")
            setName("");
            setEmail("");
            setMessage("");
          }catch(err){
            console.error(err)
            setIsSending(false)
            alert("An error occured. Please try again later, or contact through e-mail")
          } finally{
            setIsSending(false)
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
              <Button type="submit" variant="dark" style={{width:"100%", minHeight:38}}>
                {isSending ? <div><Spinner/></div> : "Submit"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
