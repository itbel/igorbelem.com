import React, { useState, useEffect } from "react";
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
  },[props.name, props.description, props.repo, props.pic]);
  return (
    <div className="projectCube">
      <h3>{name}</h3>
      <h6>{description}</h6>
      <img
            className="d-block w-100"
            src={pic}
            alt=""
            height={250}
          />
      <a target="_blank" rel="noopener noreferrer" href={repo} className="btn btn-dark">View Code</a>
    </div>
  );
};

export default Project;
