import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import jsicon from "./media/javascript.svg";
import nodeicon from "./media/nodejs.svg";
import cssicon from "./media/css3.svg";
import bootstricon from "./media/bootstrap.svg";
import expressicon from "./media/express.svg";
import reacticon from "./media/react.svg";
import mongodbicon from "./media/mongodb.svg";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <div className="spacer">dad</div>
      <Jumbotron
        style={{
          backgroundColor: "grey",
          color: "black",
          opacity: "0.95",
        }}
      >
        <h1>
          <b>Igor Belem</b>
        </h1>
        <h2>
          <b>Full-Stack Developer</b>
        </h2>
        <h3>
          <b>HTML/CSS, Javascript, React, NodeJS, Express, MongoDB</b>
        </h3>
        <Row className="justify-content-center p-3">
          <Col>
            <img alt="" height="64" width="64" src={jsicon}></img>
            <img alt="" height="64" width="64" src={nodeicon}></img>
            <img alt="" height="64" width="64" src={cssicon}></img>
            <img alt="" height="64" width="64" src={bootstricon}></img>
            <img alt="" height="64" width="64" src={expressicon}></img>
            <img alt="" height="64" width="64" src={reacticon}></img>
            <img alt="" height="64" width="64" src={mongodbicon}></img>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Home;
