import React from "react";
import { Row, Col, Figure } from "react-bootstrap";
import jsicon from "./media/js_badge.svg";
import nodeicon from "./media/nodejs_small.svg";
import cssicon from "./media/css3.svg";
import bootstricon from "./media/bootstrap.svg";
import reacticon from "./media/react.svg";
import mongodbicon from "./media/mongodb.svg";
import expressjs from "./media/expressjs.png";
import html5 from "./media/html5.png";
import php from "./media/php.svg";
const Skills = () => {
  return (
    <div className="skills pl-5 pr-5 pb-5 justify-content-center">
      <h1 className="display-4">Skills</h1>
      <Row>
        <Col>
          <Row className="justify-content-center iconRow">
            <Col>
              <Figure className="skillTab">
                <Figure.Image src={jsicon} width={68} />
                <Figure.Caption>JavaScript</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={nodeicon} width={68} />
                <Figure.Caption>Node</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={reacticon} width={68} />
                <Figure.Caption>React</Figure.Caption>
              </Figure>
              <br></br>
              <Figure className="skillTab">
                <Figure.Image src={cssicon} width={68} />
                <Figure.Caption>React</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={bootstricon} width={68} />
                <Figure.Caption>Bootstrap</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={html5} width={68} />
                <Figure.Caption>HTML5</Figure.Caption>
              </Figure>
              <br></br>
              <Figure className="skillTab">
                <Figure.Image src={expressjs} width={68} />
                <Figure.Caption>Express</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={mongodbicon} width={68} />
                <Figure.Caption>MongoDB</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={php} width={68} />
                <Figure.Caption>PHP</Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
/*
              <div className="skillTab">
                <img alt="" height="68" src={jsicon} />
                JavaScript
              </div>
              <div className="skillTab">
                <img alt="" height="68" src={nodeicon} />
                NodeJS
              </div>
              <div className="skillTab">
                <img alt="" height="68" src={reacticon} />
                React
              </div>
              <br></br>
              <br></br>
              <div className="skillTab">
                <img alt="" height="68" src={cssicon} />
                CSS3
              </div>
              <div className="skillTab">
                <img alt="" height="68" src={bootstricon} />
                Bootstrap
              </div>
              <div className="skillTab">
                <img alt="" src={expressjs} />
                Express
              </div>
              <br></br>
              <br></br>
              <div className="skillTab">
                <img alt="" height="68" src={mongodbicon} />
                MongoDB
              </div>
              <div className="skillTab">
                <img alt="" height="68" src={html5} />
                HTML5
              </div>
              <div className="skillTab">
                <img alt="" height="68" src={php} />
                PHP
              </div>
              */
