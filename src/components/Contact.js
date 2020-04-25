import React from "react";
import {Row} from "react-bootstrap";
import githublogo from "./media/github.svg";
import linkedinlogo from "./media/LI.png";
import cv from "./media/cv.png";

const Contact = () => {
  return (
    <div className="contact">
      <p className="font-weight-bold">I can be reached at</p>
      <p><small>igortbelem@gmail.com</small></p>
      <a href="https://github.com/itbel"><img className="contactTab" alt="" src={githublogo}/></a>
      <a href="https://www.linkedin.com/in/igor-belem"><img className="contactTab" alt="" src={linkedinlogo}/></a>
      <a href="https://drive.google.com/file/d/1GQ7bxuYuk4mRPsXN4QHqbUythiuSu5bT/view?usp=sharing"><img className="contactTab" alt="" src={cv}/></a>
    </div>
  );
};

export default Contact;
