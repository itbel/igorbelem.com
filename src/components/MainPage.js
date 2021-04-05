import React from "react";
import Home from "../components/Home";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
function MainPage() {
  return (
    <div className="allShared">
        <Navigation className="nav"></Navigation>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Contact></Contact>
    </div>
  );
}

export default MainPage;
