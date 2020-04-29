import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import jsicon from "./media/new/js_badge.svg";
import nodeicon from "./media/new/nodejs_small.svg";
import cssicon from "./media/new/css3.svg";
import bootstricon from "./media/new/bootstrap.svg";
import reacticon from "./media/new/react.svg";
import mongodbicon from "./media/new/mongodb.svg";
import expressjs from "./media/new/expressjs.png";

import { Row } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <div className="spacer"></div>
      <Jumbotron className="jumbo pt-3 pb-3">
          <h1 className="font-weight-bold">Igor Belem</h1>
        <h2>
          Full-Stack Developer
        </h2>
        <h2>
          HTML/CSS, Javascript, React, NodeJS, Express, MongoDB
        </h2>
        <Row style={{paddingTop:"2vh"}} className="justify-content-center iconRow">
            <img alt="" height="68" src={jsicon}/>            
            <img alt="" height="68" src={nodeicon}/>
            <img alt="" height="68" src={cssicon}/>
            <img alt="" src={expressjs}/>
            <img alt="" height="68" src={bootstricon}/>
            <img alt="" height="68" src={reacticon}/>
            <img alt="" height="68" src={mongodbicon}/>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Home;