import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { projects } from "../../data/projects";
import "./StatsSection.css";

export default function StatsSection() {
  const [downloadCount, setDownloadCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [appCount, setAppCount] = useState(0);

  useEffect(() => {
    const visibleApps = projects.filter((project) => project.isVisible).length;

    function animateValue(setter, start, end, duration) {
      if (start === end) {
        setter(end);
        return;
      }

      const range = Math.abs(end - start);
      const increment = end > start ? 1 : -1;
      const stepTime = Math.max(Math.floor(duration / range), 10);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        setter(current);

        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
          setter(end);
          clearInterval(timer);
        }
      }, stepTime);
    }

    animateValue(setDownloadCount, 0, 100, 2000);
    animateValue(setUserCount, 0, 200, 2000);
    animateValue(setAppCount, 0, visibleApps, 2000); // ← dynamically set
  }, []);

  return (
    <div className="stats-section" id="stats">
      <Container>
        <h2 className="text-center mb-5">Our Impact</h2>
        <Row className="justify-content-center">
          <Col md="4" className="mb-4">
            <div className="stat-card">
              <div className="stat-number">{downloadCount}</div>
              <p className="mb-0">App Downloads</p>
            </div>
          </Col>
          <Col md="4" className="mb-4">
            <div className="stat-card">
              <div className="stat-number">{userCount}</div>
              <p className="mb-0">Active Users</p>
            </div>
          </Col>
          <Col md="4" className="mb-4">
            <div className="stat-card">
              <div className="stat-number">{appCount}</div>
              <p className="mb-0">Apps Published</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
