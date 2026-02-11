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

    const animate = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const { waveCount, waveSpeed, amplitude, frequency, colors } = WAVE_CONFIG;

      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[i % colors.length];
        
        ctx.moveTo(0, canvas.height);
        
        for (let x = 0; x <= canvas.width; x += 5) {
          // Wave formula: y = amplitude * sin(frequency * x + phase)
          // phase = time * speed + wave index offset
          const phase = (t * waveSpeed) + (i * 2);
          const y = canvas.height * 0.7 + 
                    Math.sin(x * frequency + phase) * amplitude +
                    Math.cos(x * frequency * 0.5 + phase * 0.5) * (amplitude * 0.5);
          
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

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-animation" />;
};

export default WaveBackground;
