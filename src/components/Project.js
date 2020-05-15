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
        </Col>
      </Row>
    </div>
  );
};

export default Project;
