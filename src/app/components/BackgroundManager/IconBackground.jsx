"use client";

import React, { useEffect, useRef } from "react";
import { ICON_CONFIG } from "../../data/backgroundConfigs";

const IconBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;

    const ctx = canvas.getContext("2d");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    let animationFrameId;
    let lastWidth = 0;

    const iconPaths = ICON_CONFIG.iconPaths;

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
        if (!this.img) return;

        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
        ctx.rotate(this.angle);
        
        const borderRadius = this.size * ICON_CONFIG.borderRadiusRatio;

        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(-this.size / 2, -this.size / 2, this.size, this.size, borderRadius);
        } else {
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

        ctx.drawImage(this.img, -this.size / 2, -this.size / 2, this.size, this.size);
        
        ctx.restore();
      }
    }

    let floatingIcons = [];

    const initWithImages = (icons) => {
      floatingIcons = [];
      if (icons.length === 0) return;

      const densityDivisor = isMobile ? (ICON_CONFIG.mobileDensityDivisor || ICON_CONFIG.densityDivisor * 1.5) : ICON_CONFIG.densityDivisor;
      const count = Math.floor((canvas.width * canvas.height) / densityDivisor);
      
      const cols = Math.ceil(Math.sqrt(count * (canvas.width / canvas.height)));
      const rows = Math.ceil(count / cols);
      const cellWidth = canvas.width / cols;
      const cellHeight = canvas.height / rows;

      for (let i = 0; i < count; i++) {
        const icon = new FloatingIcon(icons[i % icons.length]);
        
        // Grid-based positioning with randomness within the cell
        const col = i % cols;
        const row = Math.floor(i / cols);
        
        icon.x = col * cellWidth + Math.random() * (cellWidth - icon.size);
        icon.y = row * cellHeight + Math.random() * (cellHeight - icon.size);
        
        // Ensure within bounds
        if (icon.x < 0) icon.x = 0;
        if (icon.y < 0) icon.y = 0;

        floatingIcons.push(icon);
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
      
      floatingIcons.forEach(icon => {
        icon.update();
        icon.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    updateCanvasSize();
    lastWidth = canvas.width;

    // Load all images before initializing
    const loadPromises = iconPaths.map((path) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = path;
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
      });
    });

    Promise.all(loadPromises).then((results) => {
      const icons = results.filter(Boolean);
      initWithImages(icons);
      animate();

      // Store icons ref for resize
      const handleResize = () => {
        const newWidth = parent.getBoundingClientRect().width;
        if (isMobile && Math.abs(newWidth - lastWidth) < 1) return;
        const prevWidth = lastWidth;
        updateCanvasSize();
        lastWidth = canvas.width;
        if (Math.abs(canvas.width - prevWidth) > 100) {
          initWithImages(icons);
        }
      };

      window.addEventListener("resize", handleResize);
      canvas._handleResize = handleResize;
    });

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseout", handleMouseLeave);
    }

    return () => {
      if (canvas._handleResize) {
        window.removeEventListener("resize", canvas._handleResize);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-animation" />;
};

export default IconBackground;
