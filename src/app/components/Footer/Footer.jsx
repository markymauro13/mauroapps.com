import { Container } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer id="contact" className="text-center">
        <Container>
          <p>© 2025 Mauro Apps LLC. All rights reserved.</p>
          <p>
            Email:{" "}
            <a href="mailto:mark@mauroapps.com" className="text-primary text-light">
              mark@mauroapps.com
            </a>
          </p>
        </Container>
      </footer>
    </>
  );
}
