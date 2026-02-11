"use client";

import React, { useEffect, useRef } from "react";
import { WAVE_CONFIG } from "../../data/backgroundConfigs";

const WaveBackground = () => {
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

    const animate = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const { waveCount, waveSpeed, amplitude, frequency, colors, interactive, mouseInfluence } = WAVE_CONFIG;

      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[i % colors.length];
        
        ctx.moveTo(0, canvas.height);
        
        for (let x = 0; x <= canvas.width; x += 5) {
          const phase = (t * waveSpeed) + (i * 2);
          
          let mouseDip = 0;
          if (interactive && mouse.x !== null) {
            const dist = Math.abs(x - mouse.x);
            if (dist < 200) {
              const force = (200 - dist) / 200;
              mouseDip = force * mouseInfluence;
            }
          }

          const y = canvas.height * 0.7 + 
                    Math.sin(x * frequency + phase) * amplitude +
                    Math.cos(x * frequency * 0.5 + phase * 0.5) * (amplitude * 0.5) +
                    mouseDip;
          
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.fill();
      }

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

export default WaveBackground;
