import React from "react";
import { Container } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button, Container } from "react-bootstrap";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-wrapper">
      <div className="hero-background"></div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-content"
        >
          <h1 className="hero-title title-large">
            <span className="text-gradient">Mauro Apps</span>
          </h1>
          <p className="hero-subtitle">
            Crafting intuitive, powerful, and beautiful mobile experiences for the future.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="#projects"
              className="btn-primary"
            >
              Explore Our Projects
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
