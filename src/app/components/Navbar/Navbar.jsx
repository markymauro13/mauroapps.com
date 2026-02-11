"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <NavbarBS expand="lg" className="navbar-light">
      <Container fluid>
        <Link href="/" className="navbar-brand" passHref>
          <img 
            src="/assets/logo.png" 
            alt="Mauro Apps" 
            className="navbar-logo" 
          />
        </Link>
        <NavbarBS.Toggle aria-controls="navbarNav" />
        <NavbarBS.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              href="/" 
              className={isActive('/') && pathname === '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              href="/about"
              className={isActive('/about') ? 'active' : ''}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              href="/#projects"
            >
              Apps
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              href="/contact"
              className={isActive('/contact') ? 'active' : ''}
            >
              Contact
            </Nav.Link>
            <div className="navbar-theme-toggle">
              <ThemeToggle />
            </div>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
}
