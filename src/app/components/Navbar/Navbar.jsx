"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  // Helper for conditional hash link generation
  const generateLink = (targetPage, hash) => {
    if (pathname === targetPage) return `#${hash}`;
    return `${targetPage}`;
  };

  return (
    <NavbarBS expand="lg" className="navbar-light">
      <Container fluid>
        <Link href="/" className="navbar-brand" passHref>
          <img src="/assets/logo.png" alt="Mauro Apps Logo" className="navbar-logo" />
        </Link>
        <NavbarBS.Toggle aria-controls="navbarNav" />
        <NavbarBS.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>

            {/* Uncomment when Solutions page is ready
            <Nav.Link as={Link} href={generateLink("/solutions", "solutions")}>
              Solutions
            </Nav.Link>
            */}

            <Nav.Link as={Link} href={generateLink("/about", "about")}>
              About
            </Nav.Link>

            <Nav.Link as={Link} href={generateLink("/", "projects")}>
              Projects
            </Nav.Link>

            <Nav.Link as={Link} href={generateLink("/contact", "contactForm")}>
              Contact
            </Nav.Link>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
}
