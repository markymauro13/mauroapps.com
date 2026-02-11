"use client";

import React, { useEffect, useRef } from "react";
import { GRID_CONFIG } from "../../data/backgroundConfigs";

const GridBackground = () => {
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

    const drawGrid = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const theme = document.documentElement.getAttribute('data-theme') || 'light';
      const isDark = theme === 'dark';
      
      ctx.strokeStyle = isDark ? GRID_CONFIG.lineColorDark : GRID_CONFIG.lineColorLight;
      ctx.lineWidth = GRID_CONFIG.lineWidth;

      const gridSize = GRID_CONFIG.gridSize;
      const offset = (t * GRID_CONFIG.speed) % gridSize;

      // Vertical lines
      for (let x = offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y < canvas.height; y += 10) {
          let drawX = x;
          let drawY = y;

          if (GRID_CONFIG.interactive && mouse.x !== null) {
            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < GRID_CONFIG.mouseRadius) {
              const force = (GRID_CONFIG.mouseRadius - distance) / GRID_CONFIG.mouseRadius;
              drawX -= dx * force * GRID_CONFIG.distortionStrength;
            }
          }
          
          if (y === 0) ctx.moveTo(drawX, drawY);
          else ctx.lineTo(drawX, drawY);
        }
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 10) {
          let drawX = x;
          let drawY = y;

          if (GRID_CONFIG.interactive && mouse.x !== null) {
            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < GRID_CONFIG.mouseRadius) {
              const force = (GRID_CONFIG.mouseRadius - distance) / GRID_CONFIG.mouseRadius;
              drawY -= dy * force * GRID_CONFIG.distortionStrength;
            }
          }
          
          if (x === 0) ctx.moveTo(drawX, drawY);
          else ctx.lineTo(drawX, drawY);
        }
        ctx.stroke();
      }
    };

    const animate = (t) => {
      drawGrid(t);
      animationFrameId = requestAnimationFrame(animate);
    };

    updateCanvasSize();
    animate(0);

    const handleResize = () => {
      updateCanvasSize();
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

export default GridBackground;
