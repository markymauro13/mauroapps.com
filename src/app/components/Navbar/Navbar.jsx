"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    // Set initial hash
    setHash(window.location.hash);

    // Update hash on change
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Update hash when pathname changes (e.g. navigation to a new page clears hash)
  useEffect(() => {
    setHash(window.location.hash);
  }, [pathname]);

  const isActive = (path) => {
    if (path === '/') return pathname === '/' && hash === '';
    if (path === '/#projects') return pathname === '/' && hash === '#projects';
    return pathname.startsWith(path);
  };

  const handleLinkClick = (h) => {
    setHash(h);
  };

  return (
    <NavbarBS expand="lg" className="navbar-light">
      <Container fluid>
        <Link href="/" className="navbar-brand" passHref onClick={() => handleLinkClick("")}>
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
              className={isActive('/') ? 'active' : ''}
              onClick={() => handleLinkClick("")}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              href="/about"
              className={isActive('/about') ? 'active' : ''}
              onClick={() => handleLinkClick("")}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              href="/#projects"
              className={isActive('/#projects') ? 'active' : ''}
              onClick={() => handleLinkClick("#projects")}
            >
              Apps
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              href="/contact"
              className={isActive('/contact') ? 'active' : ''}
              onClick={() => handleLinkClick("")}
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
