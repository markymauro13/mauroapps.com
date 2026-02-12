"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    setHash(window.location.hash);

    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    setHash(window.location.hash);
  }, [pathname]);

  // Close navbar when tapping outside on mobile
  useEffect(() => {
    if (!expanded) return;

    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [expanded]);

  const isActive = (path) => {
    if (path === '/') return pathname === '/' && hash === '';
    if (path === '/#projects') return pathname === '/' && hash === '#projects';
    return pathname.startsWith(path);
  };

  const handleLinkClick = (h) => {
    setHash(h);
    setExpanded(false);
  };

  return (
    <NavbarBS ref={navRef} expand="lg" className="navbar-light" expanded={expanded} onToggle={setExpanded}>
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
