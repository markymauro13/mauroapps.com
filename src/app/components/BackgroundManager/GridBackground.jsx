"use client";

import React, { useEffect, useRef } from "react";
import { GRID_CONFIG } from "../../data/backgroundConfigs";

const GridBackground = () => {
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

    const drawGrid = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const theme = document.documentElement.getAttribute('data-theme') || 'light';
      const isDark = theme === 'dark';
      
      ctx.strokeStyle = isDark ? GRID_CONFIG.lineColorDark : GRID_CONFIG.lineColorLight;
      ctx.lineWidth = GRID_CONFIG.lineWidth;

      const gridSize = GRID_CONFIG.gridSize;
      const offset = (t * GRID_CONFIG.speed) % gridSize;

      for (let x = offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y < canvas.height; y += 10) {
          let drawX = x;

          if (GRID_CONFIG.interactive && smoothMouse.active) {
            const dx = smoothMouse.x - x;
            const dy = smoothMouse.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < GRID_CONFIG.mouseRadius) {
              const force = (GRID_CONFIG.mouseRadius - distance) / GRID_CONFIG.mouseRadius;
              const smoothForce = Math.pow(force, 2);
              drawX -= dx * smoothForce * GRID_CONFIG.distortionStrength;
            }
          }
          
          if (y === 0) ctx.moveTo(drawX, y);
          else ctx.lineTo(drawX, y);
        }
        ctx.stroke();
      }

      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 10) {
          let drawY = y;

          if (GRID_CONFIG.interactive && smoothMouse.active) {
            const dx = smoothMouse.x - x;
            const dy = smoothMouse.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < GRID_CONFIG.mouseRadius) {
              const force = (GRID_CONFIG.mouseRadius - distance) / GRID_CONFIG.mouseRadius;
              const smoothForce = Math.pow(force, 2);
              drawY -= dy * smoothForce * GRID_CONFIG.distortionStrength;
            }
          }
          
          if (x === 0) ctx.moveTo(x, drawY);
          else ctx.lineTo(x, drawY);
        }
        ctx.stroke();
      }
    };

    const animate = (t) => {
      if (mouse.x !== null) {
        smoothMouse.x += (mouse.x - smoothMouse.x) * 0.2;
        smoothMouse.y += (mouse.y - smoothMouse.y) * 0.2;
      } else {
        smoothMouse.active = false;
      }

      drawGrid(t);
      animationFrameId = requestAnimationFrame(animate);
    };

    updateCanvasSize();
    lastWidth = canvas.width;
    animate(0);

    const handleResize = () => {
      const prevWidth = lastWidth;
      updateCanvasSize();
      lastWidth = canvas.width;
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

export default GridBackground;
