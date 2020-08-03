import React from "react";
import Project from "./Project";
import { Row, Col } from "react-bootstrap";
import chatapp from "./media/chatApp.png";
import ims from "./media/inventory_list.png";
import portfolio from "./media/portfolio1.png";
import footguess from "./media/footGuess.png";
const Portfolio = () => {
  return (
    <div className="port">
      <h1 className="display-4">My Projects:</h1>
      <Row
        className="justify-content-center"
        style={{ margin: "auto", paddingBottom: "5%" }}
      >
        <Col xs={11} sm={6} lg={4} xl={3}>
          <Project
            name={"IMS"}
            description={
              "An inventory management system made using the MERN Stack"
            }
            repo={"https://github.com/itbel/capstone-abc-store"}
            pic={ims}
          ></Project>
        </Col>
        <Col xs={11} sm={6} lg={4} xl={3}>
          <Project
            demo={"http://react-chatapp.crabdance.com/"}
            name={"ReactChatApplication"}
            description={
              "A chat application made using the MERN stack and Socket.IO"
            }
            repo={"https://github.com/itbel/ReactChatApplication"}
            pic={chatapp}
          ></Project>
        </Col>
        <Col xs={11} sm={6} lg={4} xl={3}>
          <Project
            demo={"https://igorbelem.com"}
            name={"igorbelem.com"}
            description={
              "A portfolio website made using React, React-Bootstrap and PHP"
            }
            repo={"https://github.com/itbel/portfolio"}
            pic={portfolio}
          ></Project>
        </Col>
        <Col xs={11} sm={6} lg={4} xl={3}>
          <Project
            demo={"http://bolao-app.crabdance.com"}
            name={"footGuess"}
            description={
              "Soccer Guessing Tournaments Application using MERN Stack"
            }
            repo={"https://github.com/itbel/footGuess"}
            pic={footguess}
          ></Project>
        </Col>
      </Row>
    </div>
  );
};

export default Portfolio;
