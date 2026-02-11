"use client";

import React, { useEffect, useRef } from "react";
import { BLOB_CONFIG } from "../../data/backgroundConfigs";

const BlobBackground = () => {
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

    const blobs = BLOB_CONFIG.blobs;

    const animate = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = `blur(${BLOB_CONFIG.blurAmount})`;

      blobs.forEach(blob => {
        // Update positions based on time
        const x = ((blob.x + t * blob.vx) % 1.2 + 1.2) % 1.2 - 0.1;
        const y = ((blob.y + t * blob.vy) % 1.2 + 1.2) % 1.2 - 0.1;

        ctx.fillStyle = blob.color;
        ctx.beginPath();
        ctx.arc(x * canvas.width, y * canvas.height, blob.radius, 0, Math.PI * 2);
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

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-animation" />;
};

export default BlobBackground;
