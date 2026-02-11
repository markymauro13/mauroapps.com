"use client";

import React, { useEffect, useRef } from "react";
import { ICON_CONFIG } from "../../data/backgroundConfigs";

const IconBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const iconPaths = ICON_CONFIG.iconPaths;

    // Preload images
    let loadedImages = 0;
    const icons = [];
    iconPaths.forEach((path) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        loadedImages++;
        icons.push(img);
      };
    });

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    let mouse = { x: null, y: null };
    let smoothMouse = { x: 0, y: 0, active: false };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
      smoothMouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    class FloatingIcon {
      constructor(img) {
        this.img = img;
        this.size = Math.random() * (ICON_CONFIG.sizeRange[1] - ICON_CONFIG.sizeRange[0]) + ICON_CONFIG.sizeRange[0];
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() * (ICON_CONFIG.velocityRange[1] - ICON_CONFIG.velocityRange[0])) + ICON_CONFIG.velocityRange[0];
        this.vy = (Math.random() * (ICON_CONFIG.velocityRange[1] - ICON_CONFIG.velocityRange[0])) + ICON_CONFIG.velocityRange[0];
        this.angle = Math.random() * Math.PI * 2;
        this.va = (Math.random() * (ICON_CONFIG.rotationSpeedRange[1] - ICON_CONFIG.rotationSpeedRange[0])) + ICON_CONFIG.rotationSpeedRange[1];
        this.opacity = Math.random() * (ICON_CONFIG.opacityRange[1] - ICON_CONFIG.opacityRange[0]) + ICON_CONFIG.opacityRange[0];
      }

      update() {
        // Mouse interaction (Smoother with momentum)
        if (ICON_CONFIG.interactive && smoothMouse.active) {
          const dx = smoothMouse.x - (this.x + this.size / 2);
          const dy = smoothMouse.y - (this.y + this.size / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < ICON_CONFIG.pushRadius) {
            const force = (ICON_CONFIG.pushRadius - distance) / ICON_CONFIG.pushRadius;
            const pushX = (dx / distance) * force * ICON_CONFIG.mousePush * 0.1;
            const pushY = (dy / distance) * force * ICON_CONFIG.mousePush * 0.1;
            
            this.vx -= pushX;
            this.vy -= pushY;
          }
        }

        // Relaxed physics
        this.vx *= 0.99;
        this.vy *= 0.99;
        this.angle += this.va;

        const totalSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const maxS = 1.5;
        if (totalSpeed > maxS) {
          this.vx = (this.vx / totalSpeed) * maxS;
          this.vy = (this.vy / totalSpeed) * maxS;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -this.size) this.x = canvas.width;
        if (this.x > canvas.width) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.height;
        if (this.y > canvas.height) this.y = -this.size;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
        ctx.rotate(this.angle);
        
        const borderRadius = this.size * ICON_CONFIG.borderRadiusRatio;

        // Create rounded path
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(-this.size / 2, -this.size / 2, this.size, this.size, borderRadius);
        } else {
          // Fallback for older browsers
          const x = -this.size / 2;
          const y = -this.size / 2;
          const w = this.size;
          const h = this.size;
          const r = borderRadius;
          ctx.moveTo(x + r, y);
          ctx.lineTo(x + w - r, y);
          ctx.quadraticCurveTo(x + w, y, x + w, y + r);
          ctx.lineTo(x + w, y + h - r);
          ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
          ctx.lineTo(x + r, y + h);
          ctx.quadraticCurveTo(x, y + h, x, y + h - r);
          ctx.lineTo(x, y + r);
          ctx.quadraticCurveTo(x, y, x + r, y);
        }
        ctx.closePath();
        ctx.clip();

        // Use icon or placeholder
        if (this.img) {
          ctx.drawImage(this.img, -this.size / 2, -this.size / 2, this.size, this.size);
        } else {
          ctx.font = `${this.size}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('📱', 0, 0);
        }
        
        ctx.restore();
      }
    }

    let floatingIcons = [];

    const init = () => {
      floatingIcons = [];
      const count = Math.floor((canvas.width * canvas.height) / ICON_CONFIG.densityDivisor);
      for (let i = 0; i < count; i++) {
        const img = icons.length > 0 ? icons[Math.floor(Math.random() * icons.length)] : null;
        floatingIcons.push(new FloatingIcon(img));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Lerp smooth mouse
      if (mouse.x !== null) {
        smoothMouse.x += (mouse.x - smoothMouse.x) * 0.2;
        smoothMouse.y += (mouse.y - smoothMouse.y) * 0.2;
      } else {
        smoothMouse.active = false;
      }
      
      floatingIcons.forEach(icon => {
        icon.update();
        icon.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    updateCanvasSize();
    // Give images a moment to load before initializing
    setTimeout(() => {
      init();
      animate();
    }, 100);

    const handleResize = () => {
      updateCanvasSize();
      init();
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

export default IconBackground;
