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
      <NavbarBS expand="lg" className="navbar-apple" sticky="top">
        <Container>
          <NavbarBS.Brand as={Link} to="/">
            <img
              src={logo}
              alt="Mauro Apps Logo"
              className="navbar-logo"
            />
          </NavbarBS.Brand>
          <NavbarBS.Toggle aria-controls="navbarNav" />
          <NavbarBS.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-link-apple">
                Home
              </Nav.Link>
              {/* <Nav.Link as={Link} to={location.pathname === "/solutions" ? "#solutions" : "/solutions"} className="nav-link-apple">
                Solutions
              </Nav.Link> */}
              <Nav.Link as={Link} to={location.pathname === "/about" ? "#about" : "/about"} className="nav-link-apple">
                About
              </Nav.Link>
              <Nav.Link as={Link} to={location.pathname === "/" ? "#projects" : "/#projects"} className="nav-link-apple">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to={location.pathname === "/contact" ? "#contactForm" : "/contact"} className="nav-link-apple">
                Contact
              </Nav.Link>
            </Nav>
          </NavbarBS.Collapse>
        </Container>
      </NavbarBS>
    </>
  );
}
