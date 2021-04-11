import React from "react";
import Project from "./Project";
import "./Portfolio.scss";
const Portfolio = () => {
  return (
    <section className="portfolio_container">
      <h1>Projects</h1>
      <article className="portfolio_grid">
        <Project
          demo={"http://react-chatapp.crabdance.com/"}
          name={"ReactChatApplication"}
          description={
            "A chat application made using the MERN stack and Socket.IO"
          }
          repo={"https://github.com/itbel/ReactChatApplication"}
          pic={"/assets/chatApp.png"}
        ></Project>

        <Project
          name={"Bolao APP"}
          description={
            "A Soccer tournament result guessing application built with React Native. This shares a backend with footGuess."
          }
          repo={"https://github.com/itbel/bolao"}
          pic={"/assets/bolaoapp.jpg"}
        ></Project>

        <Project
          demo={"http://bolao-app.crabdance.com"}
          name={"footGuess"}
          description={
            "Soccer Guessing Tournaments Application using MERN Stack"
          }
          repo={"https://github.com/itbel/footGuess"}
          pic={"/assets/footGuess.png"}
        ></Project>
      </article>
    </section>
  );
};

export default Portfolio;
