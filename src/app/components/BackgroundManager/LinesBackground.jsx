"use client";

import React, { useEffect, useRef } from "react";
import { LINES_CONFIG } from "../../data/backgroundConfigs";

const LinesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;

    const ctx = canvas.getContext("2d");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    let animationFrameId;
    let lastWidth = 0;

    const updateCanvasSize = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    let mouse = { x: null, y: null };
    let smoothMouse = { x: 0, y: 0, active: false };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      smoothMouse.active = true;
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
      }

      update() {
        if (LINES_CONFIG.interactive && smoothMouse.active) {
          const dx = smoothMouse.x - this.x;
          const dy = smoothMouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < LINES_CONFIG.mouseRadius) {
            const force = (LINES_CONFIG.mouseRadius - distance) / LINES_CONFIG.mouseRadius;
            const pushX = (dx / distance) * force * LINES_CONFIG.mousePush * 0.1;
            const pushY = (dy / distance) * force * LINES_CONFIG.mousePush * 0.1;
            
            this.vx -= pushX;
            this.vy -= pushY;
          }
        }

        this.vx *= 0.99;
        this.vy *= 0.99;

        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const maxSpeed = LINES_CONFIG.particleSpeed * 1.5;
        if (speed > maxSpeed) {
          this.vx = (this.vx / speed) * maxSpeed;
          this.vy = (this.vy / speed) * maxSpeed;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) { this.x = 0; this.vx *= -0.5; }
        else if (this.x > canvas.width) { this.x = canvas.width; this.vx *= -0.5; }
        if (this.y < 0) { this.y = 0; this.vy *= -0.5; }
        else if (this.y > canvas.height) { this.y = canvas.height; this.vy *= -0.5; }
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
      for (let i = 0; i < LINES_CONFIG.particleCount; i++) {
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

      if (mouse.x !== null) {
        smoothMouse.x += (mouse.x - smoothMouse.x) * 0.2;
        smoothMouse.y += (mouse.y - smoothMouse.y) * 0.2;
      } else {
        smoothMouse.active = false;
      }
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      drawLines();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    updateCanvasSize();
    lastWidth = canvas.width;
    init();
    animate();

    const handleResize = () => {
      const newWidth = parent.getBoundingClientRect().width;
      if (isMobile && Math.abs(newWidth - lastWidth) < 1) return;
      const prevWidth = lastWidth;
      updateCanvasSize();
      lastWidth = canvas.width;
      if (Math.abs(canvas.width - prevWidth) > 100) {
        init();
      }
    };

    window.addEventListener("resize", handleResize);
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseout", handleMouseLeave);
    }

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
