import React from "react";
import "./Project.scss";
const Project = ({ name, description, repo, pic, demo }) => {
  return (
    <article className="project_container">
      <h3>{name}</h3>
      <a target="_blank" href={pic} rel="noopener noreferrer">
        <img src={pic} alt={`${name} Project`} />
      </a>
      <p>{description}</p>
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
    </article>
  );
};

export default Project;
