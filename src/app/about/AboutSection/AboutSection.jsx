import Image from "next/image";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import BackgroundManager from "../../components/BackgroundManager/BackgroundManager";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-section">
      <BackgroundManager type="grid" />
      <Container>
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo */}
          <div className="about-logo-container">
            <Image
              src="/assets/logo.png"
              alt="Mauro Apps"
              className="about-logo"
              width={88}
              height={88}
              unoptimized
            />
          </div>

          {/* Title */}
          <h1 className="about-title">About Mauro Apps</h1>

          {/* Lead */}
          <p className="about-lead">
            Founded in 2025, Mauro Apps is a cross platform app studio focused on 
            creating beautiful, intuitive mobile experiences.
          </p>

          {/* Body */}
          <p className="about-body">
            We believe great apps should feel effortless. Every interaction, 
            every animation, every detail is crafted to delight users while 
            solving real problems.
          </p>
          
          <p className="about-body">
            Our mission is to build apps that people love to use every day—
            apps that are not just functional, but genuinely enjoyable.
          </p>

          {/* Values */}
          <div className="about-values">
            <div className="about-value">
              <div className="about-value-icon">🎨</div>
              <h3 className="about-value-title">Design First</h3>
              <p className="about-value-text">Beautiful interfaces that users love</p>
            </div>
            
            <div className="about-value">
              <div className="about-value-icon">⚡</div>
              <h3 className="about-value-title">Native Performance</h3>
              <p className="about-value-text">Built for Cross Platform</p>
            </div>
            
            <div className="about-value">
              <div className="about-value-icon">✨</div>
              <h3 className="about-value-title">Attention to Detail</h3>
              <p className="about-value-text">Every pixel matters</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
