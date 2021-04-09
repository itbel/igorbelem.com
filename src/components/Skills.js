import React from "react";
import { Row, Col, Figure, Container } from "react-bootstrap";
const Skills = () => {
  return (
    <div className="skills justify-content-center">
      <h1>Skills</h1>

      <Row className="m-0">
        <Container style={{ padding: "32px" }}>
          <Col>
            <Row className="justify-content-center pb-4">
              <Figure className="skillTab">
                <Figure.Image src="/assets/js_badge.svg" width={68} alt="JavaScript Icon" />
                <Figure.Caption>JavaScript</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src="/assets/react.svg" width={68} alt="React Icon" />
                <Figure.Caption>React</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
              <Figure.Image src="/assets/react.svg" width={68} alt="React Icon" />
                <Figure.Caption>React Native</Figure.Caption>
              </Figure>
            </Row>
            <Row className="justify-content-center pb-4">
            <Figure className="skillTab">
                <Figure.Image src="/assets/typescript.svg" width={68} alt="TypeScript Icon" />
                <Figure.Caption>TypeScript</Figure.Caption>
              </Figure>
            <Figure className="skillTab">
                <Figure.Image src="/assets/amplify.svg" width={68} alt="Amplify Icon" />
                <Figure.Caption>Amplify</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src="/assets/nodejs_small.svg" width={68} alt="Node Icon" />
                <Figure.Caption>Node</Figure.Caption>
              </Figure>
            </Row>
            <Row className="justify-content-center pb-4">
              <Figure className="skillTab">
                <Figure.Image src="/assets/expressjs.svg" width={68} alt="ExpressJS Icon" />
                <Figure.Caption>Express</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src="/assets/mongodb.svg" width={68} alt="MongoDB Icon" />
                <Figure.Caption>MongoDB</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src="/assets/graphql.svg" width={68} alt="GraphQL Icon" />
                <Figure.Caption>GraphQL</Figure.Caption>
              </Figure>
            </Row>
            <Row className="justify-content-center pb-4">
              <Figure className="skillTab">
                <Figure.Image src="/assets/css3.svg" width={68} alt="CSS3 Icon" />
                <Figure.Caption>CSS3</Figure.Caption>
              </Figure>
              <Figure aria-label="Sass Icon" className="skillTab">
                <Figure.Image src="/assets/sass.svg" width={68} alt="Sass Icon" />
                <Figure.Caption>SCSS</Figure.Caption>
              </Figure>
              <Figure className="skillTab">
                <Figure.Image src="/assets/html5.svg" width={68} alt="HTMl5 Icon" />
                <Figure.Caption>HTML5</Figure.Caption>
              </Figure>
            </Row>
          </Col>
        </Container>
      </Row>
    </div>
  );
};

export default Skills;
