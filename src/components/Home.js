import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
const Home = () => {
  return (
    <div className="home">
      <Jumbotron
        style={{
          backgroundColor: "rgb(20, 20, 20)",
          color: "white",
        }}
      >
        <h1>Igor Belem</h1>
        <h2>Full-Stack Developer</h2>
        <h3>HTML/CSS, Javascript, React, NodeJS, Express, MongoDB</h3>
        <i class="devicon-bootstrap-plain-wordmark"></i>
      </Jumbotron>
    </div>
  );
};

export default Home;
