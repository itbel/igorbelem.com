import React from "react";
import { Image, Row, Col } from "react-bootstrap";
const Project = ({name, description, repo, pic, demo}) => {
  return (
    <div className="projectCube">
      <Row>
        <Col
          style={{
            paddingTop: "8px",
          }}
        >
          <h3>{name}</h3>
        </Col>
      </Row>
      <Row className="justify-content-center pt-2">
        <Col className="pb-1">
          <a target="_blank" href={pic} rel="noopener noreferrer">
            <Image
              className="d-block w-100 p-2"
              src={pic}
              alt="Project Picture"
            />
          </a>
          <br></br>
          <b style={{ paddingTop: "16px" }}>{description}</b>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={repo}
            className="btn btn-dark d-block m-3"
          >
            View Code
          </a>
          {demo !== undefined ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={demo}
              className="btn btn-dark d-block m-3"
            >
              View Demo
            </a>
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

export default Project;
