import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = (props) => {
  const sendData = (key) => {
    props.onNavSelection(key);
  };
  return (
    <Navbar
      className="nav"
      collapseOnSelect
      variant="dark"
      expand="sm"
      fixed="top"
      style={{
        opacity: "0.9",
      }}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse style={{ textAlign: "left" }} id="basic-navbar-nav">
        <Nav
          className="mr-auto mr-5"
          style={{ textAlign: "center" }}
          onSelect={(selectedKey) => {
            sendData(selectedKey);
            selectedKey = null;
          }}
        >
          <Nav.Link className="nostyl" eventKey="home">
            Home
          </Nav.Link>
          <Nav.Link className="nostyl" eventKey="about">
            About
          </Nav.Link>
          <Nav.Link className="nostyl" eventKey="portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link className="nostyl" eventKey="contact">
            Contact
          </Nav.Link>
          <Nav.Link
            target="_blank"
            href="https://docs.google.com/document/d/1Yeg_P6NTCpHSk3jo9o0cuLe7PzTUgDUV44DpseqxFTA/edit?usp=sharing"
            rel="noopener noreferrer"
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
