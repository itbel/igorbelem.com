import React from "react";
import "./Project.scss";
const Project = ({ name, description, repo, pic, demo }) => {
  return (
    <article className="project_container">
      <figure className="project_pic">
        <a target="_blank" href={pic} rel="noopener noreferrer">
          <img src={pic} alt={`${name} Project`} />
        </a>
      </figure>
      <div className="project_desc">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="button_container">
          <a
            target="_blank"
            className="button"
            rel="noopener noreferrer"
            href={repo}
          >
            View Code
          </a>
          {demo !== undefined ? (
            <a
              target="_blank"
              className="button"
              rel="noopener noreferrer"
              href={demo}
            >
              View Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default Project;
