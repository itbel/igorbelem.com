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
import amplify from "./media/amplify.svg";
import sass from "./media/sass.svg";
import graphql from "./media/graphql.svg";
import jest from "./media/jest.svg"
import materialui from "./media/materialui.svg"
import typescript from "./media/typescript.svg"
const Skills = () => {
  return (
    <div className="skills justify-content-center">
      <h1 className="display-4">Skills</h1>

      <Row className="m-0">
        <Container style={{ padding: "32px" }}>
          <Col>
            <Row className="justify-content-center pb-4">
              <Figure className="skillTab">
                <Figure.Image src={jsicon} width={68} alt="JavaScript Icon" />
                <Figure.Caption>JavaScript</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={reacticon} width={68} alt="React Icon" />
                <Figure.Caption>React</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={reacticon} width={68} alt="React Native Icon" />
                <Figure.Caption>React Native</Figure.Caption>
              </Figure>
            </Row>
            <Row className="justify-content-center pb-4">
            <Figure className="skillTab">
                <Figure.Image src={typescript} width={68} alt="TypeScript Icon" />
                <Figure.Caption>TypeScript</Figure.Caption>
              </Figure>
            <Figure className="skillTab">
                <Figure.Image src={amplify} width={68} alt="Amplify Icon" />
                <Figure.Caption>Amplify</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={nodeicon} width={68} alt="Node Icon" />
                <Figure.Caption>Node</Figure.Caption>
              </Figure>
            </Row>
            <Row className="justify-content-center pb-4">
              <Figure className="skillTab">
                <Figure.Image src={expressjs} width={68} alt="ExpressJS Icon" />
                <Figure.Caption>Express</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={mongodbicon} width={68} alt="MongoDB Icon" />
                <Figure.Caption>MongoDB</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={graphql} width={68} alt="GraphQL Icon" />
                <Figure.Caption>GraphQL</Figure.Caption>
              </Figure>
            </Row>
            <Row className="justify-content-center pb-4">
              <Figure className="skillTab">
                <Figure.Image src={cssicon} width={68} alt="CSS3 Icon" />
                <Figure.Caption>CSS3</Figure.Caption>
              </Figure>
              <Figure aria-label="Sass Icon" className="skillTab">
                <Figure.Image src={sass} width={68} alt="Sass Icon" />
                <Figure.Caption>SCSS</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={html5} width={68} alt="HTMl5 Icon" />
                <Figure.Caption>HTML5</Figure.Caption>
              </Figure>
            </Row>
            <Row className="justify-content-center pb-4">
            <Figure className="skillTab">
                <Figure.Image src={jest} width={68} alt="Jest Icon" />
                <Figure.Caption>Jest</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={bootstricon} width={68} alt="Bootstrap Icon" />
                <Figure.Caption>Bootstrap</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src={materialui} width={68} alt="MaterialUI Icon" />
                <Figure.Caption>Material UI</Figure.Caption>
              </Figure>
            </Row>

          </Col>
        </Container>
      </Row>
    </div>
  );
};

export default Skills;
