import React from "react";
import Project from "./Project";
import { Row, Col } from "react-bootstrap";

const Portfolio = () => {

  return (
    <div className="port">
      <h1>My Projects:</h1>
      <Row>
        <Col>
          <Project
            name={"swapiFetcher"}
            description={"React, Node/Express Application for data fetching from SWAPI"}
          ></Project>
        </Col>
        <Col>
        <Project
            name={"React Chat Application"}
            description={"Chat Application with MERN Stack and Socket.IO"}
          ></Project>
        </Col>
        <Col>
        <Project
            name={"footGuess"}
            description={"Soccer Guessing Tournaments Application using MERN Stack"}
          ></Project>
        </Col>
      </Row>

    </div>
  );
};

export default Portfolio;
