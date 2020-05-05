import React, { useState, useEffect, useRef } from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const portRef = useRef();
  const contactRef = useRef();
  const [selection, setSelection] = useState("home");
  const handleSelect = (select) => {
    setSelection(select);
  };
  useEffect(() => {
    if (selection === "home") {
      homeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (selection === "about") {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (selection === "portfolio") {
      portRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (selection === "contact") {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selection]);
  return (
    <div className="allShared">
      <Navigation className="nav" onNavSelection={handleSelect}></Navigation>
      <div ref={homeRef}>
        <Home></Home>
      </div>
      <div ref={aboutRef}>
        <About></About>
        <Skills></Skills>
      </div>
      <div ref={portRef}>
        <Portfolio></Portfolio>
      </div>
      <div ref={contactRef}>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
