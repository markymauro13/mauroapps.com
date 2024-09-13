import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./StatsSection.css";

export default function StatsSection() {
  useEffect(() => {
    function animateValue(id, start, end, duration) {
      let current = start;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));
      const obj = document.getElementById(id);
      const timer = setInterval(() => {
        current += increment;
        obj.innerHTML = current;
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    }

    animateValue("downloadCount", 0, 100, 2000);
    animateValue("userCount", 0, 200, 2000);
    animateValue("appCount", 0, 3, 2000);
  }, []);

  return (
    <>
      <div className="stats-section" id="stats">
        <Container>
          <h2 className="text-center mb-5">Our Impact</h2>
          <Row className="justify-content-center">
            <Col className="col-md-4 mb-4">
              <div className="stat-card">
                <div className="stat-number" id="downloadCount">
                  0
                </div>
                <p className="mb-0">App Downloads</p>
              </div>
            </Col>
            <Col className="col-md-4 mb-4">
              <div className="stat-card">
                <div className="stat-number" id="userCount">
                  0
                </div>
                <p className="mb-0">Active Users</p>
              </div>
            </Col>
            <Col className="col-md-4 mb-4">
              <div className="stat-card">
                <div className="stat-number" id="appCount">
                  0
                </div>
                <p className="mb-0">Apps Published</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
