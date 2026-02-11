"use client";

import React from "react";
import ParticleBackground from "../ParticleBackground/ParticleBackground";
import GridBackground from "./GridBackground";
import BlobBackground from "./BlobBackground";
import IconBackground from "./IconBackground";
import "./BackgroundManager.css";

const BackgroundManager = ({ type = "particles", className = "" }) => {
  const renderBackground = () => {
    switch (type) {
      case "particles":
        return <ParticleBackground />;
      case "grid":
        return <GridBackground />;
      case "blobs":
        return <BlobBackground />;
      case "icons":
        return <IconBackground />;
      default:
        return <ParticleBackground />;
    }
  };

  return (
    <div className={`background-container ${className}`} aria-hidden="true">
      {renderBackground()}
    </div>
  );
};

export default BackgroundManager;
