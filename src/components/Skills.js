import React from "react";
import { Row, Col, Figure, Container } from "react-bootstrap";
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

      <Row style={{ paddingTop: "32px" }}>
        <Container>
          <Col>
            <Row className="justify-content-center">
              <Figure className="skillTab" style={{ paddingRight: "32px" }}>
                <Figure.Image src={jsicon} width={68} />
                <Figure.Caption>JavaScript</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={nodeicon} width={68} />
                <Figure.Caption>Node</Figure.Caption>
              </Figure>
              <Figure className="skillTab" style={{ paddingLeft: "32px" }}>
                <Figure.Image src={reacticon} width={68} />
                <Figure.Caption>React</Figure.Caption>
              </Figure>
            </Row>
            <Row className="justify-content-center">
              <Figure className="skillTab" style={{ paddingRight: "32px" }}>
                <Figure.Image src={cssicon} width={68} />
                <Figure.Caption>CSS3</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={bootstricon} width={68} />
                <Figure.Caption>Bootstrap</Figure.Caption>
              </Figure>
              <Figure className="skillTab" style={{ paddingLeft: "32px" }}>
                <Figure.Image src={html5} width={68} />
                <Figure.Caption>HTML5</Figure.Caption>
              </Figure>
            </Row>
            <Row className="justify-content-center">
              <Figure className="skillTab" style={{ paddingRight: "32px" }}>
                <Figure.Image src={expressjs} />
                <Figure.Caption>Express</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={mongodbicon} width={68} />
                <Figure.Caption>MongoDB</Figure.Caption>
              </Figure>
              <Figure className="skillTab" style={{ paddingLeft: "32px" }}>
                <Figure.Image src={php} width={68} />
                <Figure.Caption>PHP</Figure.Caption>
              </Figure>
            </Row>
          </Col>
        </Container>
      </Row>
    </div>
  );
};

export default Skills;
