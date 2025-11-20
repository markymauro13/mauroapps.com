import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="content-wrapper">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" className="text-center">
            <h1 className="main-title">Contact Us</h1>
            <div className="contact-info">
              <p className="lead">
                email us at{" "}
                <a href="mailto:mark@mauroapps.com" className="email-link">
                  mark@mauroapps.com
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
