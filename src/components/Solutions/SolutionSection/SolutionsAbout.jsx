import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SolutionsAbout.css";

export default function SolutionsAbout() {
  return (
    <>
      <div className="about-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <h2 className="mb-4">Software Solutions for SMBs</h2>
              <p className="mb-4">
                At Mauro Apps LLC, we specialize in architecting and deploying tailor-made software solutions catered to your specifications. Every business has different
                needs which is why we take the time to build a relationship to understand business processes & end goals so we can craft the software your business needs.
              </p>
              <p>We work closely with your team to produce stunning solutions that not only fix your problems but continue to scale with your business as it grows.</p>

              <p>Whether your business needs:</p>
              <ul>
                <li>Software Automation</li>
                <li>Web Apps</li>
                <li>Mobile Apps</li>
                <li>Widgets & Extensions</li>
                <li>Data Management</li>
              </ul>
              <p>we do it all!</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
