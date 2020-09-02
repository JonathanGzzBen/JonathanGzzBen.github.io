import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = (props) => {
  let { sections } = props;

  const sectionLinks = sections.map((section, index) => {
    return (
      <Nav.Link onClick={() => section.onClick()} key={index}>
        {section.name}
      </Nav.Link>
    );
  });

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="sticky-top">
      <Navbar.Brand
        onClick={() => props.onBrandClick()}
        style={{ cursor: "pointer" }}
      >
        JonathanGzz
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">{sectionLinks}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
