import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import "./Theme.scss"
function MainPage() {
  return (
    <main>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Contact></Contact>
    </main>
  );
}

export default MainPage;
