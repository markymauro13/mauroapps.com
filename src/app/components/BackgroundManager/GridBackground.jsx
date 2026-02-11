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
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
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

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-animation" />;
};

export default GridBackground;
