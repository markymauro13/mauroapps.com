"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { scrollToElement } from "../../utils/scroll";
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

  const handleLinkClick = (e, path) => {
    setExpanded(false);

    // If it's a hash link on the home page
    if (path === '/#projects' && pathname === '/') {
      e.preventDefault();
      
      // Update hash manually without jumping
      window.history.pushState(null, '', '#projects');
      setHash('#projects');
      
      // Handle scroll with delay to allow navbar state to settle
      setTimeout(() => {
        scrollToElement('projects');
      }, 0);
    } else if (path === '/' && pathname === '/') {
      // Handle clicking "Home" while on home page
      e.preventDefault();
      window.history.pushState(null, '', '/');
      setHash('');
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // For other links, just update hash state (Next.js Link handles navigation)
      if (path.includes('#')) {
        setHash(path.substring(path.indexOf('#')));
      } else {
        setHash('');
      }
    }
  };

  return (
    <NavbarBS ref={navRef} expand="lg" className="navbar-light" expanded={expanded} onToggle={setExpanded}>
      <Container fluid>
        <Link href="/" className="navbar-brand" passHref onClick={(e) => handleLinkClick(e, "/")}>
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
              onClick={(e) => handleLinkClick(e, "/")}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              href="/about"
              className={isActive('/about') ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, "/about")}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              href="/#projects"
              className={isActive('/#projects') ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, "/#projects")}
            >
              Apps
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              href="/contact"
              className={isActive('/contact') ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, "/contact")}
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
