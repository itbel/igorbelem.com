import React from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div className="allShared">
      <Navigation></Navigation>
      <Home id="1"></Home>
      <About id="2"></About>
      <Portfolio id="3"></Portfolio>
      <Contact id="4"></Contact>
    </div>
  );
}

export default App;
