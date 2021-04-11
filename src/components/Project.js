import React from "react";
import "./Project.scss";
const Project = ({ name, description, repo, pic, demo }) => {
  return (
    <section className="project_container">
      <h3>{name}</h3>
      <a target="_blank" href={pic} rel="noopener noreferrer">
        <img width={"100%"} src={pic} alt="Project" />
      </a>
      <p style={{ whiteSpace: "nowrap" }}>{description}</p>
      <div className="button_container">
        <a
          target="_blank"
          className="button"
          rel="noopener noreferrer"
          href={repo}
        >
          View code
        </a>
        {demo !== undefined ? (
          <a
            target="_blank"
            className="button"
            rel="noopener noreferrer"
            href={demo}
          >
            View demo
          </a>
        ) : null}
      </div>
    </section>
  );
};

export default Project;
