"use client";

import React, { useEffect, useRef } from "react";
import { LINES_CONFIG } from "../../data/backgroundConfigs";

const LinesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * LINES_CONFIG.particleSpeed;
        this.vy = (Math.random() - 0.5) * LINES_CONFIG.particleSpeed;
        this.size = Math.random() * LINES_CONFIG.particleSize + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = LINES_CONFIG.particleColor;
        ctx.fill();
      }
    }

    let particles = [];
    const init = () => {
      particles = [];
      const count = LINES_CONFIG.particleCount;
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < LINES_CONFIG.lineDistance) {
            ctx.beginPath();
            const opacity = (1 - distance / LINES_CONFIG.lineDistance) * LINES_CONFIG.lineOpacityMultiplier;
            ctx.strokeStyle = LINES_CONFIG.lineColor.replace(/[\d.]+\)$/g, `${opacity})`);
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      drawLines();
      
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

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-animation" />;
};

export default LinesBackground;
