import React from "react";
import {Row} from "react-bootstrap";
import githublogo from "./media/github.svg";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="display-3">Contact Me</h1>
      <Row>
      <div className="contactTab mx-auto"><img alt="" height="64" src={githublogo}/></div>
      <div className="contactTab mx-auto">Email</div>
      <div className="contactTab mx-auto">LinkedIn</div>
      </Row>
    </div>
  );
};

export default Contact;
