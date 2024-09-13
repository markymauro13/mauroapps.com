import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <>
      <div className="about-section">
        <Container>
          <Row className="justify-content-center">
            <Col className="col-lg-8">
              <p className="lead mb-4">
                Founded by Mark Mauro in 2024, MauroApps is a dynamic mobile software company specializing in innovative SaaS products for the iOS platform.
              </p>
              <p className="mb-4">
                Our mission is to create fun and profitable applications that cater to diverse niches within the mobile ecosystem. We're constantly exploring new ideas and
                pushing the boundaries of what's possible in mobile app development.
              </p>
              <p>
                At MauroApps, we take pride in handling every aspect of our products in-house, from coding and development to marketing and influencer outreach. This holistic
                approach allows us to maintain high quality standards and deliver exceptional user experiences.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
