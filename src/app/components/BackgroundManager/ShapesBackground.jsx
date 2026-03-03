"use client";

import React, { useEffect, useRef } from "react";
import { SHAPES_CONFIG } from "../../data/backgroundConfigs";

const ShapesBackground = () => {
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

    class Shape {
      constructor() {
        this.type = SHAPES_CONFIG.types[Math.floor(Math.random() * SHAPES_CONFIG.types.length)];
        this.size = Math.random() * (SHAPES_CONFIG.maxSize - SHAPES_CONFIG.minSize) + SHAPES_CONFIG.minSize;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * SHAPES_CONFIG.speed;
        this.vy = (Math.random() - 0.5) * SHAPES_CONFIG.speed;
        this.angle = Math.random() * Math.PI * 2;
        this.va = (Math.random() - 0.5) * SHAPES_CONFIG.rotationSpeed;
        this.opacity = Math.random() * (SHAPES_CONFIG.maxOpacity - SHAPES_CONFIG.minOpacity) + SHAPES_CONFIG.minOpacity;
      }

      update() {
        if (SHAPES_CONFIG.interactive && smoothMouse.active) {
          const dx = smoothMouse.x - this.x;
          const dy = smoothMouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < SHAPES_CONFIG.avoidRadius) {
            const force = (SHAPES_CONFIG.avoidRadius - distance) / SHAPES_CONFIG.avoidRadius;
            const pushX = (dx / distance) * force * SHAPES_CONFIG.mouseAvoid * 0.1;
            const pushY = (dy / distance) * force * SHAPES_CONFIG.mouseAvoid * 0.1;
            
            this.vx -= pushX;
            this.vy -= pushY;
          }
        }

        this.vx *= 0.99;
        this.vy *= 0.99;
        this.angle += this.va;

        const totalSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const maxS = SHAPES_CONFIG.speed * 2;
        if (totalSpeed > maxS) {
          this.vx = (this.vx / totalSpeed) * maxS;
          this.vy = (this.vy / totalSpeed) * maxS;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        const colorBase = SHAPES_CONFIG.color || "rgba(120, 119, 198, ";
        ctx.strokeStyle = colorBase.includes("rgba") 
          ? colorBase.replace(/[\d.]+\)$/g, `${this.opacity})`)
          : colorBase;
          
        ctx.lineWidth = 1.5;
        
        if (this.type === "rect") {
          ctx.beginPath();
          ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else if (this.type === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
          ctx.stroke();
        } else if (this.type === "triangle") {
          ctx.beginPath();
          const h = this.size * (Math.sqrt(3) / 2);
          ctx.moveTo(0, -h / 2);
          ctx.lineTo(-this.size / 2, h / 2);
          ctx.lineTo(this.size / 2, h / 2);
          ctx.closePath();
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    let shapes = [];
    const init = () => {
      shapes = [];
      const count = isMobile ? SHAPES_CONFIG.mobileShapeCount || 20 : SHAPES_CONFIG.shapeCount;
      for (let i = 0; i < count; i++) {
        shapes.push(new Shape());
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

      shapes.forEach(s => {
        s.update();
        s.draw();
      });
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

export default ShapesBackground;
