import React from "react";
import "./Navbar.css";
import { Nav, Navbar as NavbarBS, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      <NavbarBS expand="lg" className="navbar-light">
        <Container fluid>
          <NavbarBS.Brand as={Link} to="/">
            MauroApps.com
          </NavbarBS.Brand>
          <NavbarBS.Toggle aria-controls="navbarNav" />
          <NavbarBS.Collapse id="navbarNav" className="justify-content-end">
            <Nav>
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
