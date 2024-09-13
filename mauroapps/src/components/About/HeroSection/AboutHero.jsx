import React from "react";
import { Container } from "react-bootstrap";
import "./AboutHero.css";

export default function AboutHero() {
  return (
    <>
      <Container fluid className="content-wrapper" id="about">
        <h1 className="about-title">About MauroApps</h1>
        <p className="subtitle">Innovating in the Mobile SaaS Space</p>
      </Container>
    </>
  );
}
