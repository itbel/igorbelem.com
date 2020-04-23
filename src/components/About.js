import React from "react";
import { Row, Col } from "react-bootstrap";
import vectorPerson from "./media/vectorperson.png";
import FadeIn from "react-fade-in"; /*Replace this module with self made solution */

const About = () => {
  return (
    <div className="about pl-5 pr-5 justify-content-center">
      <h1 style={{ fontSize: "4rem" }}>About</h1>
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
          <p
            style={{
              fontSize: "2.1rem",
              textJustify: "inter-character",
              textAlign: "justify",
            }}
          >
            I am an aspiring web development college graduate seeking to provide
            services to your company as well as to improve my skills. I have a
            good background in computer systems, and I have been working with
            the MERN stack. I always strive to learn new and emerging
            technologies.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
