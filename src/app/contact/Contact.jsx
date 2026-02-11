import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import BackgroundManager from "../components/BackgroundManager/BackgroundManager";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <BackgroundManager type="grid" />
      
      <Container>
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="contact-title">Get in Touch</h1>
          
          <p className="contact-subtitle">
            Have an idea for an app? Want to collaborate? 
            We'd love to hear from you.
          </p>
          
          <motion.a
            href="mailto:mark@mauroapps.com"
            className="contact-email"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            mark@mauroapps.com
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
