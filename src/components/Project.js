import React, { useState, useEffect } from "react";
import chatapp from "./media/chatApp.png"
const Project = (props) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    setName(props.name);
    setDescription(props.description);
  },[props.name, props.description]);
  return (
    <div className="projectCube">
      <h3>{name}</h3>
      <h6>{description}</h6>
      <img
            className="d-block w-100"
            src={chatapp}
            alt=""
          />
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/itbel" className="btn btn-primary">View Code</a>
    </div>
  );
};

export default Project;
