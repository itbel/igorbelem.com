import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = (props) => {
  const [selection, setSelection] = useState();

  const handleSelection = () => {
    props.onNavSelection(selection);
  };
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
        <Nav
          className="mr-auto mr-5"
          onSelect={(selectedKey) => {
            setSelection(selectedKey);
            handleSelection();
          }}
        >
          <Nav.Link eventKey="home">Home</Nav.Link>
          <Nav.Link eventKey="about">About</Nav.Link>
          {/*<Nav.Link eventKey="portfolio">Portfolio</Nav.Link>*/}
          <Nav.Link eventKey="contact">Contact</Nav.Link>
          <Nav.Link target="_blank" href="https://drive.google.com/file/d/1GQ7bxuYuk4mRPsXN4QHqbUythiuSu5bT/view">CV</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
