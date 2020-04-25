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
      <div className="spacer"></div>
      <Jumbotron className="jumbo">
          <b style={{fontSize:"4.0rem"}}>Igor Belem</b>
        <h1>
          <b>Full-Stack Developer</b>
        </h1>
        <h2>
          <b>HTML/CSS, Javascript, React, NodeJS, Express, MongoDB</b>
        </h2>
        <Row style={{ height: "1vh"}}></Row>
        <Row className="justify-content-center iconRow">
            <img alt="" height="68" width="68" src={jsicon}/>            
            <img alt="" height="72" width="72" src={nodeicon}/>
            <img alt="" height="68" width="68" src={cssicon}/>
            <img alt="" height="68" width="68" src={bootstricon}/>
            <img alt="" height="72" width="72" src={expressicon}/>
            <img alt="" height="68" width="68" src={reacticon}/>
            <img alt="" height="68" width="68" src={mongodbicon}/>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Home;
/*          <Col>
            <img alt="" height="64" width="64" src={jsicon}></img>
            <img alt="" height="64" width="64" src={nodeicon}></img>
            <img alt="" height="64" width="64" src={cssicon}></img>
            <img alt="" height="64" width="64" src={bootstricon}></img>
            <img alt="" height="64" width="64" src={expressicon}></img>
            <img alt="" height="64" width="64" src={reacticon}></img>
            <img alt="" height="64" width="64" src={mongodbicon}></img>
          </Col>*/
