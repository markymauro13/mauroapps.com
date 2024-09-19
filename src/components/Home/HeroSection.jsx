import React from "react";
import { Button, Container } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

export default function HeroSection() {
  return (
    <>
      <Container fluid className="content-wrapper">
        <h1 className="main-title">Mauro Apps</h1>
        <p className="subtitle">Crafting Innovative SaaS Mobile Solutions</p>
        <Button as={Link} to="#projects" variant="light" size="lg">
          Explore Our Projects
        </Button>
      </Container>
    </>
  );
}
