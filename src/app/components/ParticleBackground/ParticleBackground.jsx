"use client";

import React, { useEffect, useRef } from "react";
import { PARTICLE_CONFIG } from "../../data/backgroundConfigs";
import "./ParticleBackground.css";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: PARTICLE_CONFIG.mouseRadius };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (PARTICLE_CONFIG.sizeRange[1] - PARTICLE_CONFIG.sizeRange[0]) + PARTICLE_CONFIG.sizeRange[0];
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        // Mouse interaction
        if (mouse.x != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = forceDirectionX * force * this.density;
            const directionY = forceDirectionY * force * this.density;
            
            this.x -= directionX;
            this.y -= directionY;
          } else {
            if (this.x !== this.baseX) {
              let dx = this.x - this.baseX;
              this.x -= dx / PARTICLE_CONFIG.returnSpeed; 
            }
            if (this.y !== this.baseY) {
              let dy = this.y - this.baseY;
              this.y -= dy / PARTICLE_CONFIG.returnSpeed;
            }
          }
        }

        // Standard movement
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Update base position to follow the particle's drift
        this.baseX += this.speedX;
        this.baseY += this.speedY;

        // Wrap around screen
        if (this.x > canvas.width) { 
          this.x = 0; 
          this.baseX = 0; 
        } else if (this.x < 0) { 
          this.x = canvas.width; 
          this.baseX = canvas.width; 
        }
        
        if (this.y > canvas.height) { 
          this.y = 0; 
          this.baseY = 0; 
        } else if (this.y < 0) { 
          this.y = canvas.height; 
          this.baseY = canvas.height; 
        }
      }

      draw() {
        ctx.fillStyle = PARTICLE_CONFIG.particleColor.replace("0.5", this.opacity.toString());
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numberOfOfParticles = Math.floor((canvas.width * canvas.height) / PARTICLE_CONFIG.particleDensity);
      for (let i = 0; i < numberOfOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    updateCanvasSize();
    init();
    animate();

    const handleResize = () => {
      updateCanvasSize();
      init();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-animation" />;
}
