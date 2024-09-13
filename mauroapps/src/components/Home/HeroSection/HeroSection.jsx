import React from "react";
import { Button, Container } from "react-bootstrap";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <>
      <Container fluid className="content-wrapper">
        <h1 className="main-title">Mauro Apps</h1>
        <p className="subtitle">Crafting Innovative SaaS Mobile Solutions</p>
        <Button href="#projects" variant="light" size="lg">
          Explore Our Projects
        </Button>
      </Container>
    </>
  );
}
