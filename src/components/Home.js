import React from "react";
import "./Home.scss";

const Banner = ({ name, position, github, linkedin, location }) => {
  return (
    <article className="banner">
      <h1>{name}</h1>
      <h2>{position}</h2>
      <section className="links_container">
        <a aria-label="Visit my GitHub profile" href={github}>
          <img width={24} src="https://port-itbel.s3.amazonaws.com/assets/github.svg" alt="GitHub Icon"></img>
        </a>
        <a aria-label="Visit my Linkedin profile" href={linkedin}>
          <img width={24} src="https://port-itbel.s3.amazonaws.com/assets/LIblack.svg" alt="LinkedIn Icon"></img>
        </a>
      </section>
    </article>
  );
};

const Home = () => {
  return (
    <section id="hero" className="home_container">
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
