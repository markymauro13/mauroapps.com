import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-background" aria-hidden="true" />
      
      <div className="hero-content">
        {/* Eyebrow */}
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          iOS App Studio
        </div>
        
        {/* Main Title */}
        <h1 className="hero-title">
          <span className="hero-title-text">Beautiful apps.</span>
          <span className="hero-title-gradient">Thoughtfully crafted.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="hero-subtitle">
          We design and develop premium iOS applications that users love. 
          Intuitive interfaces, powerful features, seamless experiences.
        </p>
        
        {/* CTA */}
        <div className="hero-actions">
          <motion.a
            href="#projects"
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Our Apps
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path 
                d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33333M12.6667 8L8.00004 12.6667" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
          
          <motion.a
            href="/contact"
            className="btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="scroll-indicator-text">Scroll</span>
        <div className="scroll-indicator-line" />
      </div>
    </section>
  );
}
