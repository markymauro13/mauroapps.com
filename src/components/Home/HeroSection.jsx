import React from "react";
import { Button, Container } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-wrapper">
      <div className="hero-background">
        <div className="grid-pattern"></div>
      </div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            <span className="gradient-text">Mauro Apps</span>
          </h1>
          <p className="hero-subtitle">Crafting Innovative SaaS Mobile Solutions</p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              as={Link} 
              to="#projects" 
              variant="primary"
              className="mt-4 card-button" 
              size="lg"
            >
              Explore Our Projects
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
