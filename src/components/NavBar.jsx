import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>JonathanGzzBen</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => props.onAboutClick()}>About</Nav.Link>
          <Nav.Link onClick={() => props.onEducationClick()}>
            Education
          </Nav.Link>
          <Nav.Link onClick={() => props.onLanguagesClick()}>
            Languages
          </Nav.Link>
          <Nav.Link onClick={() => props.onContactClick()}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
