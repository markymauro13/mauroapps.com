import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <footer id="contact" className="text-center">
        <Container>
          <p>&copy; 2024 Mauro Apps LLC. All rights reserved.</p>
          <p>
            Email:{" "}
            <a href="mailto:markymauro@gmail.com" className="text-primary text-light">
              markymauro@gmail.com
            </a>
          </p>
        </Container>
      </footer>
    </>
  );
}
