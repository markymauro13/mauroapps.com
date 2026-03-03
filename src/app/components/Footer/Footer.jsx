import { Container } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <Container fluid className="px-0">
        <div className="footer-simple">
          <p>© {currentYear} Mauro Apps LLC. All rights reserved.</p>
          <p>
            <a href="mailto:support@mauroapps.com">
              support@mauroapps.com
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
