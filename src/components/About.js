import React from "react";
import { Row, Col } from "react-bootstrap";
import vectorPerson from "./media/vectorperson.png";

const About = () => {
  return (
    <div className="about pl-5 pr-5">
      <h1>About Me:</h1>
      <br />
      <img
        alt=""
        height="256"
        width="256"
        src={vectorPerson}
        style={{ borderRadius: "256px 256px 256px 256px" }}
      ></img>
      <br />
      <br />
      <br />
      <Row>
        <Col>
          <p className="text-justify" style={{ fontSize: "2.1rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec purus ac lacus euismod efficitur non non neque. In luctus mauris
            accumsan justo porta, nec bibendum urna venenatis. Maecenas ex
            tellus, gravida ut eros at, accumsan volutpat enim. Proin a nisi
            egestas, suscipit nulla vitae, ultricies neque.
          </p>
        </Col>
        <Col>
          <p className="text-justify" style={{ fontSize: "2.1rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec purus ac lacus euismod efficitur non non neque. In luctus mauris
            accumsan justo porta, nec bibendum urna venenatis. Maecenas ex
            tellus, gravida ut eros at, accumsan volutpat enim. Proin a nisi
            egestas, suscipit nulla vitae, ultricies neque.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
