import React from "react";
import { Row, Col} from "react-bootstrap";

const About = () => {
  return (
    <div className="about pl-5 pr-5 justify-content-center">
      <h1 className="display-4">About</h1>
      <Row>
        <Col>
          <p className="aboutPara" style={{fontSize:"1.6rem"}}>
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