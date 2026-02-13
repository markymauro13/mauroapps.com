import { Container } from "react-bootstrap";

import BackgroundManager from "../components/BackgroundManager/BackgroundManager";

export default function AboutHero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <BackgroundManager type="waves" />
      <Container fluid className="content-wrapper" id="about" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="main-title">Custom Software Solutions for your Business</h1>
        <p className="subtitle">Our code does the heavy lifting!</p>
      </Container>
    </section>
  );
}
