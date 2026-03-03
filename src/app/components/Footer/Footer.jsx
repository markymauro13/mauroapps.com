import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
              <Image
                src="/assets/logo.png"
                alt="Mauro Apps"
                width={40}
                height={40}
                className="footer-logo"
                unoptimized
              />
            </div>
            <div className="footer-info">
              <h3 className="footer-brand-name">Mauro Apps</h3>
              <p className="footer-tagline">Crafting digital excellence.</p>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-link-group">
              <h4 className="footer-group-title">Contact</h4>
              <a href="mailto:mark@mauroapps.com" className="footer-link">support@mauroapps.com</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Mauro Apps LLC. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link href="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-legal-link">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
