import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-background"></div>
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="title-large">
                <span className="text-gradient">Contact Us</span>
              </h1>
              <div className="contact-info">
                <p className="text-body mb-4">
                  Have a question or want to work together?
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="d-inline-block"
                >
                  <a href="mailto:mark@mauroapps.com" className="btn-primary">
                    mark@mauroapps.com
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
