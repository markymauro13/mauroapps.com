"use client";

import React, { useEffect, useRef } from "react";
import { SHAPES_CONFIG } from "../../data/backgroundConfigs";

const ShapesBackground = () => {
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
        this.x += this.vx;
        this.y += this.vy;
        this.angle += this.va;

        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        // Use color from config or fallback
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
      for (let i = 0; i < SHAPES_CONFIG.shapeCount; i++) {
        shapes.push(new Shape());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapes.forEach(s => {
        s.update();
        s.draw();
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

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-animation" />;
};

export default ShapesBackground;
