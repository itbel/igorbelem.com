import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import vectorPerson from "./media/vectorperson.png";
import FadeIn from "react-fade-in"; /*Replace this module with self made solution */

const About = () => {
  return (
    <div className="about pl-5 pr-5 justify-content-center">
      <h1 className="display-3">About</h1>
      <Row>
        <Col>
        <FadeIn transitionDuration={6000}>
          <p className="aboutPara" style={{fontSize:"1.6rem"}}>
            I am an aspiring web development college graduate seeking to provide
            services to your company as well as to improve my skills. I have a
            good background in computer systems, and I have been working with
            the MERN stack. I always strive to learn new and emerging
            technologies.
          </p>
          </FadeIn>
        </Col>
      </Row>
    </div>
  );
};

export default About;


/*
      <img
        alt=""
        height="256"
        width="256"
        src={vectorPerson}
        style={{ borderRadius: "256px 256px 256px 256px" }}
      ></img>
      */