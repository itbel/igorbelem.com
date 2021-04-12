import React, { useEffect, useState } from "react";
import Home from "../components/Home";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import "./Theme.scss";
function MainPage() {
  const [currentPos, setCurrentPos] = useState(0);
  useEffect(() => {
    const handlePosition = () => {
      setCurrentPos(window.scrollY);
    }
    window.addEventListener("scroll", handlePosition);
    return () => {
      window.removeEventListener("scroll", handlePosition);
    }
  }, []);
  const navigate = () => {
    let shouldGoDown = currentPos < 1600;
    document
    .getElementById(shouldGoDown ? "contact" : "hero")
    .scrollIntoView({ behavior: "smooth" })
  }
  return (
    <main>
      <div
        role="button"
        aria-label={currentPos < 1600 ? "Navigate to bottom" : "Navigate to top"}
        onClick={navigate}
      >
        <img
          style={
            currentPos < 1600
              ? {
                  position: "fixed",
                  bottom: 16,
                  width:"calc(40px + 5vw)",
                  right: 16,
                  zIndex: 1000,
                  transitionDuration: "0.3s",
                  mixBlendMode: "difference",
                }
              : {
                  transform: "rotate(180deg)",
                  position: "fixed",
                  bottom: 16,
                  width:"calc(40px + 5vw)",
                  right: 16,
                  zIndex: 1000,
                  transitionDuration: "0.3s",
                  mixBlendMode: "difference",
                }
          }
          alt="Down arrow"
          src="/assets/downarrow.svg"
          width={200}
        />
      </div>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </main>
  );
}

export default MainPage;
