import React from "react";
import Project from "./Project";
import "./Portfolio.scss";
const Portfolio = () => {
  return (
    <section className="portfolio_container">
      <h1>Projects</h1>
      <article className="portfolio_grid">
      <Project
          demo={"https://igorbelem.com/covid"}
          name={"Ontario Covid Vaccinations Tracker"}
          description={
            "Uses AWS Lambda and AWS S3, to fetch and store data from the Ontario Data Catalogue"
          }
          repo={"https://github.com/itbel/covid-vaccines-tracker-ON"}
          pic={"/assets/covid.png"}
        ></Project>
        <Project
          name={"Bolao"}
          description={
            "Soccer tournaments application built with React Native. Shares a backend with footGuess"
          }
          repo={"https://github.com/itbel/bolao_legacy"}
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
