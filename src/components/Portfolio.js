import React from "react";
import Project from "./Project";
import "./Portfolio.scss";
const Portfolio = () => {
  return (
    <section className="portfolio_container">
      <Project
        name={"Bolao"}
        description={
          "Soccer tournaments result guessing application built with React Native. Shares a backend with footGuess."
        }
        repo={"https://github.com/itbel/bolao_legacy"}
        pic={"/assets/bolao_reduced.png"}
      ></Project>

      <Project
        demo={"https://igorbelem.com/covid"}
        name={"Ontario Vaccinations Tracker"}
        description={
          "A website to track the number of vaccinations completed in Ontario in the last seven days. It uses AWS Lambda and AWS S3, to retrieve and store data from the Ontario Data Catalogue."
        }
        repo={"https://github.com/itbel/covid-vaccines-tracker-ON"}
        pic={"/assets/covid_laptop.png"}
      ></Project>

      <Project
        demo={"http://bolao-app.crabdance.com"}
        name={"footGuess"}
        description={
          "Soccer tournaments result guessing application built using MERN Stack. Hosted on AWS EC2, this application shares a back-end with Bolao."
        }
        repo={"https://github.com/itbel/footGuess"}
        pic={"/assets/footGuess_reduced.png"}
      ></Project>
    </section>
  );
};

export default Portfolio;
