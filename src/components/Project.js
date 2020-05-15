import React, { useState, useEffect } from "react";
import { Image, Row, Col } from "react-bootstrap";
const Project = (props) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [repo, setRepo] = useState();
  const [pic, setPic] = useState();

  useEffect(() => {
    setName(props.name);
    setDescription(props.description);
    setRepo(props.repo);
    setPic(props.pic);
  }, [props.name, props.description, props.repo, props.pic]);
  return (
    <div className="projectCube">
      <Row>
        <Col
          style={{
            paddingTop: "16px",
          }}
        >
          <h3>{name}</h3>
        </Col>
      </Row>
      <Row className="justify-content-center pt-4">
        <Col className="pb-1">
          <Image className="d-block w-100" src={pic} alt="Project Picture" />
          <br></br>
          <b>{description}</b>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={repo}
            className="btn btn-dark d-block m-3"
          >
            View Code
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Project;
