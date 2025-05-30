import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image"; // Import the Image component
import "./AboutSection.css";
export default function AboutSection() {
  return (
    <>
      <div className="about-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="about-logo-container">
                <Image
                  src="/assets/logo.png"
                  alt="Mauro Apps Logo"
                  className="about-logo"
                  width={80}
                  height={80}
                />
              </div>

              <p className="lead mb-4">
                Founded by Mark Mauro in 2025, Mauro Apps LLC is a mobile software studio
                specializing in viral SaaS products for iOS.
              </p>
              <p className="mb-4">
                Our mission is to create fun and profitable applications that cater to diverse
                niches within the mobile apps space. We aim to growth hack and scale our apps to
                thousands of MAUs and beyond.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
