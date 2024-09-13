import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./StatsSection.css";

export default function StatsSection() {
  const [downloadCount, setDownloadCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [appCount, setAppCount] = useState(0);

  useEffect(() => {
    function animateValue(setter, start, end, duration) {
      let current = start;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));
      const timer = setInterval(() => {
        current += increment;
        setter(current);
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    }

    animateValue(setDownloadCount, 0, 100, 2000);
    animateValue(setUserCount, 0, 200, 2000);
    animateValue(setAppCount, 0, 3, 2000);
  }, []);

  return (
    <>
      <div className="stats-section" id="stats">
        <Container>
          <h2 className="text-center mb-5">Our Impact</h2>
          <Row className="justify-content-center">
            <Col className="col-md-4 mb-4">
              <div className="stat-card">
                <div className="stat-number">{downloadCount}</div>
                <p className="mb-0">App Downloads</p>
              </div>
            </Col>
            <Col className="col-md-4 mb-4">
              <div className="stat-card">
                <div className="stat-number">{userCount}</div>
                <p className="mb-0">Active Users</p>
              </div>
            </Col>
            <Col className="col-md-4 mb-4">
              <div className="stat-card">
                <div className="stat-number">{appCount}</div>
                <p className="mb-0">Apps Published</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
