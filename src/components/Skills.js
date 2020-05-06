import React from "react";
import { Row, Col, Figure, Container } from "react-bootstrap";
import jsicon from "./media/js_badge.svg";
import nodeicon from "./media/nodejs_small.svg";
import cssicon from "./media/css3.svg";
import bootstricon from "./media/bootstrap.svg";
import reacticon from "./media/react.svg";
import mongodbicon from "./media/mongodb.svg";
import expressjs from "./media/expressjs.svg";
import html5 from "./media/html5.svg";
import php from "./media/php.svg";
const Skills = () => {
  return (
    <div className="skills justify-content-center">
      <h1 className="display-4">Skills</h1>

      <Row className="m-0">
        <Container style={{ padding: "32px" }}>
          <Col>
            <Row className="justify-content-center m-0">
              <Figure className="skillTab">
                <Figure.Image src={jsicon} width={68} alt="js" />
                <Figure.Caption>JavaScript</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={nodeicon} width={68} alt="node" />
                <Figure.Caption>Node</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={reacticon} width={68} alt="react" />
                <Figure.Caption>React</Figure.Caption>
              </Figure>
            </Row>
            <Row className="justify-content-center">
              <Figure className="skillTab">
                <Figure.Image src={cssicon} width={68} alt="css3" />
                <Figure.Caption>CSS3</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={bootstricon} width={68} alt="bootstrap" />
                <Figure.Caption>Bootstrap</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={html5} width={68} alt="html5" />
                <Figure.Caption>HTML5</Figure.Caption>
              </Figure>
            </Row>
            <Row className="justify-content-center">
              <Figure className="skillTab">
                <Figure.Image src={expressjs} width={68} alt="express" />
                <Figure.Caption>Express</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={mongodbicon} width={68} alt="mongodb" />
                <Figure.Caption>MongoDB</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={php} width={68} alt="php" />
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
