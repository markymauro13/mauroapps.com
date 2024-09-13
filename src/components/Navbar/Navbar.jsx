import React from "react";
import "./Navbar.css";
import { Nav, Navbar as NavbarBS, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      <NavbarBS expand="lg" className="navbar-light">
        <Container fluid>
          <NavbarBS.Brand href="/">MauroApps.com</NavbarBS.Brand>
          <NavbarBS.Toggle aria-controls="navbarNav" />
          <NavbarBS.Collapse id="navbarNav" className="justify-content-end">
            <Nav>
              {location.pathname !== "/" && <Nav.Link href="/">Home</Nav.Link>}
              <Nav.Link href={location.pathname === "/about" ? "#about" : "/about"}>About</Nav.Link>
              {location.pathname === "/" && <Nav.Link href="#projects">Projects</Nav.Link>}
              <Nav.Link href={location.pathname === "/contact" ? "#contactForm" : "/contact"}>Contact</Nav.Link>
            </Nav>
          </NavbarBS.Collapse>
        </Container>
      </NavbarBS>
    </>
  );
}
