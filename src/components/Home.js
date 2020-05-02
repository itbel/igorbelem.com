import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

import githublogo from "./media/github.svg";
import linkedinlogo from "./media/LI.svg";
import cv from "./media/cv.png";

const Home = () => {
  return (
    <div className="home">
      <div className="spacer"></div>
      <Jumbotron className="jumbo pt-3 pb-3">
        <h1 className="font-weight-bold">Igor Belem</h1>
        <h2>Full-Stack Developer</h2>
        <h6>Toronto, ON, Canada</h6>
        <div className="justify-content-center" style={{ color: "black" }}>
          <a href="https://github.com/itbel">
            <img className="contactTab" alt="" src={githublogo} />
          </a>
          <a href="https://www.linkedin.com/in/igor-belem">
            <img className="contactTab" alt="" src={linkedinlogo} />
          </a>
          <a href="https://drive.google.com/file/d/1GQ7bxuYuk4mRPsXN4QHqbUythiuSu5bT/view?usp=sharing">
            <img className="contactTab" alt="" src={cv} />
          </a>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Home;
