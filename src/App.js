import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  const homeRef = React.useRef();
  const aboutRef = React.useRef();
  const portRef = React.useRef();
  const contactRef = React.useRef();
  const [selection, setSelection] = useState("home");
  const handleSelect = (selection) => {
    setSelection(selection);
    console.log(selection, "in appjs");
  };
  const scrollHandler = () => {
    if (selection === "home") {
      homeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (selection === "about") {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (selection === "portfolio") {
      portRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (selection === "contact") {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  useEffect(() => {
    scrollHandler();
  }, [scrollHandler, selection]);
  return (
    <div className="allShared">
      <Navigation className="nav" onNavSelection={handleSelect}></Navigation>
      <div ref={homeRef}>
        <Home></Home>
      </div>
      <div ref={aboutRef}>
        <About></About>
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
