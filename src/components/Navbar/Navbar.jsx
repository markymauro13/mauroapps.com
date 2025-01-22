import React from "react";
import "./Navbar.css";
import { Nav, Navbar as NavbarBS, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../imgs/logo.png";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      <NavbarBS expand="lg" className="navbar-light">
        <Container fluid>
          <NavbarBS.Brand as={Link} to="/">
            <img 
              src={logo} 
              alt="Mauro Apps Logo" 
              className="navbar-logo" 
              width="125" 
              height="50"
            />
          </NavbarBS.Brand>
          <NavbarBS.Toggle aria-controls="navbarNav" />
          <NavbarBS.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              {/* <Nav.Link as={Link} to={location.pathname === "/solutions" ? "#solutions" : "/solutions"}>
                Solutions
              </Nav.Link> */}
              <Nav.Link as={Link} to={location.pathname === "/about" ? "#about" : "/about"}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={location.pathname === "/" ? "#projects" : "/#projects"}>
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to={location.pathname === "/contact" ? "#contactForm" : "/contact"}>
                Contact
              </Nav.Link>
            </Nav>
          </NavbarBS.Collapse>
        </Container>
      </NavbarBS>
    </>
  );
}
