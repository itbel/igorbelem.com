import React from "react";
import "./Home.scss";

const Banner = ({ name, position, github, linkedin, location }) => {
  return (
    <article className="banner">
      <h1 className="header">{name}</h1>
      <h4 style={{margin:4}}>{position}</h4>
      <h6>{location}</h6>
      <section className="links_container">
        <a aria-label="Visit my GitHub profile" href={github}>
          <img width={50} src="/assets/github.svg" alt="GitHub Icon"></img>
        </a>
        <a aria-label="Visit my Linkedin profile" href={linkedin}>
          <img width={50} src="/assets/LIblack.svg" alt="LinkedIn Icon"></img>
        </a>
      </section>
    </article>
  );
};

const Home = () => {
  return (
    <section className="home_container">
      <Banner
        name="Igor Belem"
        position="Full Stack Developer"
        github="https://github.com/itbel"
        linkedin="https://www.linkedin.com/in/igor-belem"
        location="Toronto, ON, Canada"
      />
    </section>
  );
};

export default Home;
