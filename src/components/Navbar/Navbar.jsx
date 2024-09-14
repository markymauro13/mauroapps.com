import React, { useEffect } from "react";
import "./Navbar.css";
import { Nav, Navbar as NavbarBS, Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    if (location.pathname === "/") {
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToProjects: true } });
    }
  };

  useEffect(() => {
    if (location.state?.scrollToProjects) {
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <>
      <NavbarBS expand="lg" className="navbar-light">
        <Container fluid>
          <NavbarBS.Brand href="/">MauroApps.com</NavbarBS.Brand>
          <NavbarBS.Toggle aria-controls="navbarNav" />
          <NavbarBS.Collapse id="navbarNav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href={location.pathname === "/about" ? "#about" : "/about"}>About</Nav.Link>
              <Nav.Link onClick={handleProjectsClick}>Projects</Nav.Link>
              <Nav.Link href={location.pathname === "/contact" ? "#contactForm" : "/contact"}>Contact</Nav.Link>
            </Nav>
          </NavbarBS.Collapse>
        </Container>
      </NavbarBS>
    </>
  );
}
