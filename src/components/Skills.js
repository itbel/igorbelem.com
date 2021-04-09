import React from "react";
import { Figure, Container } from "react-bootstrap";
import "./Skills.scss";

const Technologies = () => {
  const tech_data = [
    {
      uri: "/assets/js_badge.svg",
      caption: "JavaScript",
    },
    {
      uri: "/assets/react.svg",
      caption: "React",
    },
    {
      uri: "/assets/react.svg",
      caption: "React Native",
    },
    {
      uri: "/assets/typescript.svg",
      caption: "TypeScript",
    },
    {
      uri: "/assets/amplify.svg",
      caption: "AWS Amplify",
    },
    {
      uri: "/assets/nodejs_small.svg",
      caption: "NodeJS",
    },
    {
      uri: "/assets/expressjs.svg",
      caption: "ExpressJS",
    },
    {
      uri: "/assets/mongodb.svg",
      caption: "MongoDB",
    },
    {
      uri: "/assets/graphql.svg",
      caption: "GraphQL",
    },
    {
      uri: "/assets/css3.svg",
      caption: "CSS3",
    },
    {
      uri: "/assets/sass.svg",
      caption: "SCSS",
    },
    {
      uri: "/assets/html5.svg",
      caption: "HTML5",
    },
  ];

  const TechnologyItem = ({ tech_item: { caption, uri } }) => {
    return (
      <figure>
        <img
          alt={`${caption} Icon`}
          style={{ display: "block", margin: "auto" }}
          src={uri}
          width={60}
        ></img>
        <figurecaption>{caption}</figurecaption>
      </figure>
    );
  };

  return (
    <section className="skills_container">
      <h1>Skills</h1>
      <article className="icon_grid">
        {tech_data.map((tech_item) => {
          return (
            <TechnologyItem
              key={tech_item.caption}
              tech_item={tech_item}
            ></TechnologyItem>
          );
        })}
      </article>
    </section>
  );
};

export default Technologies;
