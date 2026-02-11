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

    let mouse = { x: null, y: null };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * LINES_CONFIG.particleSpeed;
        this.vy = (Math.random() - 0.5) * LINES_CONFIG.particleSpeed;
        this.size = Math.random() * LINES_CONFIG.particleSize + 1;
        this.baseX = this.x;
        this.baseY = this.y;
      }

      update() {
        // Mouse interaction
        if (LINES_CONFIG.interactive && mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < LINES_CONFIG.mouseRadius) {
            const force = (LINES_CONFIG.mouseRadius - distance) / LINES_CONFIG.mouseRadius;
            const pushX = (dx / distance) * force * LINES_CONFIG.mousePush * 5;
            const pushY = (dy / distance) * force * LINES_CONFIG.mousePush * 5;
            
            this.x -= pushX;
            this.y -= pushY;
          }
        }

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
};

export default LinesBackground;
