import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  return (
    <>
      <div className="projects-section" id="projects">
        <Container>
          <h2 className="text-center mb-5">Our Mobile SaaS Projects</h2>
          <Row className="row justify-content-center">
            <Col md="6" lg="4" className="mb-4">
              <Card className="project-card text-center">
                <Card.Title className="fs-3 mb-3">Brainrot Bible</Card.Title>
                <Card.Text>Enrich your life with AI-powered "Brainrot" through our innovative iOS app featuring notifications and widgets.</Card.Text>
                <Card.Text>
                  <Button href="https://brainrotbible.app/" variant="primary" className="mt-4 card-button" target="_blank" rel="noreferrer">
                    View on App Store
                  </Button>
                </Card.Text>
              </Card>
            </Col>
          </Row>
          <Row className="row justify-content-center">
            <Col md="6" lg="4" className="mb-4">
              <Card className="project-card text-center">
                <Card.Title className="fs-3 mb-3">PostureMax</Card.Title>
                <Card.Text>AI Powered Posture maxxing app to help cure your nerd neck.</Card.Text>
                <Card.Text>
                  <Button href="/" variant="primary" className="mt-4 card-button" target="_blank" rel="noreferrer">
                    View on App Store
                  </Button>
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
