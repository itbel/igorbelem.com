import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
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
      <h3>{name}</h3>

      <small>{description}</small>

      <Image
        style={{ border: "1px solid black" }}
        className="d-block w-100"
        src={pic}
        alt=""
        height={250}
      />
      <br></br>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={repo}
        className="btn btn-dark"
      >
        View Code
      </a>
    </div>
  );
};

export default Project;
