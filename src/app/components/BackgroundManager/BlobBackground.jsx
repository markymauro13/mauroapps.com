"use client";

import React, { useEffect, useRef } from "react";
import { BLOB_CONFIG } from "../../data/backgroundConfigs";

const BlobBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;

    const ctx = canvas.getContext("2d");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    let animationFrameId;

    const updateCanvasSize = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const blobs = BLOB_CONFIG.blobs;

    let mouse = { x: null, y: null };
    let smoothMouse = { x: 0.5, y: 0.5, active: false };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (event.clientX - rect.left) / canvas.width;
      mouse.y = (event.clientY - rect.top) / canvas.height;
      smoothMouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const animate = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = `blur(${BLOB_CONFIG.blurAmount})`;

      if (mouse.x !== null) {
        smoothMouse.x += (mouse.x - smoothMouse.x) * 0.1;
        smoothMouse.y += (mouse.y - smoothMouse.y) * 0.1;
      } else {
        smoothMouse.active = false;
      }

      blobs.forEach(blob => {
        let targetX = ((blob.x + t * blob.vx) % 1.2 + 1.2) % 1.2 - 0.1;
        let targetY = ((blob.y + t * blob.vy) % 1.2 + 1.2) % 1.2 - 0.1;

        if (BLOB_CONFIG.interactive && smoothMouse.active) {
          targetX += (smoothMouse.x - targetX) * BLOB_CONFIG.mousePull;
          targetY += (smoothMouse.y - targetY) * BLOB_CONFIG.mousePull;
        }

        ctx.fillStyle = blob.color;
        ctx.beginPath();
        ctx.arc(targetX * canvas.width, targetY * canvas.height, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    updateCanvasSize();
    animate(0);

    const handleResize = () => {
      updateCanvasSize();
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

export default BlobBackground;
