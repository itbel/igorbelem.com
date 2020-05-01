import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = (props) => {
  const sendData = (key) =>{
    props.onNavSelection(key)
  }
  return (
    <Navbar
      className="nav "
      collapseOnSelect
      expand="lg"
      fixed="top"
      bg="dark"
      variant="dark"
      style={{
        opacity: "0.9",
      }}
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto mr-5" onSelect={(selectedKey)=>sendData(selectedKey)}>
          <Nav.Link eventKey="home">Home</Nav.Link>
          <Nav.Link eventKey="about">About</Nav.Link>
          <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
          <Nav.Link eventKey="contact">Contact</Nav.Link>
          <Nav.Link target="_blank" href="https://docs.google.com/document/d/1Yeg_P6NTCpHSk3jo9o0cuLe7PzTUgDUV44DpseqxFTA/edit?usp=sharing">CV</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
