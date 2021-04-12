import React from "react";
import "./Skills.scss";

const tech_data = [
  {
    uri: "https://port-itbel.s3.amazonaws.com/assets/js_badge.svg",
    caption: "JavaScript",
  },
  {
    uri: "https://port-itbel.s3.amazonaws.com/assets/react.svg",
    caption: "React",
  },
  {
    uri: "https://port-itbel.s3.amazonaws.com/assets/react.svg",
    caption: "React Native",
  },
  {
    uri: "https://port-itbel.s3.amazonaws.com/assets/typescript.svg",
    caption: "TypeScript",
  },
  {
    uri: "https://port-itbel.s3.amazonaws.com/assets/amplify.svg",
    caption: "AWS Amplify",
  },
  {
    uri: "https://port-itbel.s3.amazonaws.com/assets/nodejs_small.svg",
    caption: "NodeJS",
  },
  {
    uri: "https://port-itbel.s3.amazonaws.com/assets/expressjs.svg",
    caption: "ExpressJS",
  },
  {
    uri: "https://port-itbel.s3.amazonaws.com/assets/mongodb.svg",
    caption: "MongoDB",
  },
  {
    uri: "https://port-itbel.s3.amazonaws.com/assets/graphql.svg",
    caption: "GraphQL",
  },
  {
    uri: "https://port-itbel.s3.amazonaws.com/assets/css3.svg",
    caption: "CSS3",
  },
  {
    uri: "https://port-itbel.s3.amazonaws.com/assets/sass.svg",
    caption: "SCSS",
  },
  {
    uri: "https://port-itbel.s3.amazonaws.com/assets/html5.svg",
    caption: "HTML5",
  },
];

const Technologies = () => {
  const TechnologyItem = ({ tech_item: { caption, uri } }) => {
    return (
      <figure>
        <img
          alt={`${caption} Icon`}
          style={{ display: "block", margin: "auto" }}
          src={uri}
          width={55}
          height={55}
        ></img>
        <figcaption>{caption}</figcaption>
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
