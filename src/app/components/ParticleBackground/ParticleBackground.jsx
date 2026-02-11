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
    let smoothMouse = { x: 0, y: 0, active: false };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
      smoothMouse.active = true;
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
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.vx = 0;
        this.vy = 0;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        // Simple drift
        this.baseX += this.speedX;
        this.baseY += this.speedY;

        // Wrap base position
        if (this.baseX < 0) this.baseX = canvas.width;
        else if (this.baseX > canvas.width) this.baseX = 0;
        if (this.baseY < 0) this.baseY = canvas.height;
        else if (this.baseY > canvas.height) this.baseY = 0;

        // Mouse interaction (Smoother with momentum)
        if (PARTICLE_CONFIG.interactive && smoothMouse.active) {
          let dx = smoothMouse.x - this.x;
          let dy = smoothMouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            // Push particles away from smoothed mouse
            const pushX = (dx / distance) * force * this.density * 0.05;
            const pushY = (dy / distance) * force * this.density * 0.05;
            this.vx -= pushX;
            this.vy -= pushY;
          }
        }

        // Return force (Gentle spring to baseX/Y)
        const dxBase = this.baseX - this.x;
        const dyBase = this.baseY - this.y;
        this.vx += dxBase / PARTICLE_CONFIG.returnSpeed;
        this.vy += dyBase / PARTICLE_CONFIG.returnSpeed;

        // Friction/Damping
        this.vx *= 0.95;
        this.vy *= 0.95;

        this.x += this.vx;
        this.y += this.vy;
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

      // Lerp smooth mouse
      if (mouse.x !== null) {
        smoothMouse.x += (mouse.x - smoothMouse.x) * 0.2;
        smoothMouse.y += (mouse.y - smoothMouse.y) * 0.2;
      } else {
        smoothMouse.active = false;
      }
      
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
