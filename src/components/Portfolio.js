import React from "react";
import Project from "./Project";
import { Row, Col } from "react-bootstrap";
import chatapp from "./media/chatApp.png"
import swapi from "./media/swapi3.png";
import portfolio from "./media/portfolio1.png";

const Portfolio = () => {

  return (
    <div className="port">
      <h1 className="display-4">My Projects:</h1>
      <Row style={{ margin: 0, paddingTop: "32px" }}>
        <Col style={{paddingBottom:"16px"}}>
          <Project
            name={"swapiFetcher"}
            description={"React, Node/Express App for data fetching from SWAPI"}
            repo={"https://github.com/itbel/swapiFetcher"}
            pic={swapi}
          ></Project>
        </Col>
        <Col style={{paddingBottom:"16px"}}>
          <Project
            name={"React Chat Application"}
            description={"Chat Application with MERN Stack and Socket.IO"}
            repo={"https://github.com/itbel/ReactChatApplication"}
            pic={chatapp}
          ></Project>
        </Col>
        <Col>
          <Project
            name={"Personal Portfolio"}
            description={"React based portfolio"}
            repo={"https://github.com/itbel/portfolio"}
            pic={portfolio}
          ></Project>
        </Col>
      </Row>
    </div>
  );
};

export default Portfolio;
