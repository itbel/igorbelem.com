import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
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
          activeKey={""}
          className="mr-auto mr-5"
          style={{ textAlign: "center" }}
          onSelect={(selectedKey) => {
            sendData(selectedKey);
          }}
        >
          <Nav.Link eventKey="home">Home</Nav.Link>
          <Nav.Link eventKey="about">About</Nav.Link>
          <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
          <Nav.Link eventKey="contact">Contact</Nav.Link>
          <Nav.Item><Link className="nav-link" to="/covid">Covid</Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
