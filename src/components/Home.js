import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

import githublogo from "./media/github.svg";
import linkedinlogo from "./media/LIblack.svg";
//import cv from "./media/cv.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="spacer"></div>
      <Jumbotron className="jumbo pt-3 pb-3">
        <h1 className="font-weight-bold">Igor Belem</h1>
        <h2>Full-Stack Developer</h2>
        <h6>Toronto, ON, Canada</h6>
        <div className="justify-content-center" style={{ color: "black" }}>
          <a
            href="https://github.com/itbel"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="contactTab" alt="githubIcon" src={githublogo} />
          </a>
          <a
            href="https://www.linkedin.com/in/igor-belem"
            aria-label="Linked In"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="contactTab" alt="linkedinIcon" src={linkedinlogo} />
          </a>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Home;
