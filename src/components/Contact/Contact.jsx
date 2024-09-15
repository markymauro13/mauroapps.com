import React from "react";
import "./Contact.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export default function Contact() {
  return (
    <>
      <div className="content-wrapper">
        <h1 className="contact-title">Contact Us</h1>
        <p className="subtitle">Get in touch with MauroApps</p>
      </div>
      <div className="contact-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <Form id="contactForm" className="contact-form">
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control required type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form\Email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control required type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control required type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control required as="textarea" style={{ height: "134px" }} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
