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
            "Soccer tournaments application built with React Native. Shares a backend with footGuess."
          }
          repo={"https://github.com/itbel/bolao"}
          pic={"/assets/bolaoapp.jpg"}
        ></Project>

        <Project
          demo={"http://bolao-app.crabdance.com"}
          name={"footGuess"}
          description={
            "Soccer tournaments application built using MERN Stack"
          }
          repo={"https://github.com/itbel/footGuess"}
          pic={"/assets/footGuess.png"}
        ></Project>
      </article>
    </section>
  );
};

export default Portfolio;
