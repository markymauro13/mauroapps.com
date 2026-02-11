/**
 * Centralized configuration for all background animations.
 * Modify these values to easily adjust the looks and feels of the animations.
 */

export const PARTICLE_CONFIG = {
  particleDensity: 15000, // Higher number = fewer particles (pixel area per particle)
  particleColor: "rgba(120, 119, 198, 0.5)",
  mouseRadius: 150,
  returnSpeed: 20, // Lower = faster return
  sizeRange: [1, 4], // [min, max]
};

export const GRID_CONFIG = {
  gridSize: 50,
  speed: 0.02,
  lineColorLight: "rgba(120, 119, 198, 0.15)",
  lineColorDark: "rgba(120, 119, 198, 0.25)",
  lineWidth: 1,
};

export const BLOB_CONFIG = {
  blurAmount: "100px",
  blobs: [
    { x: 0.2, y: 0.2, radius: 200, color: "rgba(120, 119, 198, 0.3)", vx: 0.001, vy: 0.0015 },
    { x: 0.8, y: 0.3, radius: 300, color: "rgba(255, 121, 198, 0.2)", vx: -0.0012, vy: 0.001 },
    { x: 0.5, y: 0.7, radius: 250, color: "rgba(139, 233, 253, 0.2)", vx: 0.0008, vy: -0.0011 },
  ],
};

export const ICON_CONFIG = {
  iconPaths: [
    "/assets/dearly-icon.png",
    "/assets/dearly-icon-dark.png",
    "/assets/dearly-icon-monochrome.png",
  ],
  sizeRange: [40, 100], // [min, max]
  velocityRange: [-0.75, 0.75], // Random velocity between min and max
  rotationSpeedRange: [-0.01, 0.01],
  opacityRange: [0.05, 0.2],
  densityDivisor: 50000, // Pixels per icon
  borderRadiusRatio: 0.22, // Squircle ratio
};

export const WAVE_CONFIG = {
  waveCount: 3,
  waveSpeed: 0.05,
  waveOpacity: 0.3,
  colors: ["rgba(120, 119, 198, 0.4)", "rgba(255, 121, 198, 0.3)", "rgba(139, 233, 253, 0.3)"],
  amplitude: 40,
  frequency: 0.01,
};

export const LINES_CONFIG = {
  particleCount: 80,
  lineDistance: 150, // Increased distance
  particleSpeed: 0.5,
  particleSize: 2,
  lineOpacityMultiplier: 1.0, // Increased
  particleColor: "rgba(120, 119, 198, 0.6)", // Higher opacity
  lineColor: "rgba(120, 119, 198, 0.3)", // Higher opacity
};

export const SHAPES_CONFIG = {
  shapeCount: 40, // Significant increase
  minSize: 50,
  maxSize: 140,
  minOpacity: 0.2, // Higher visibility
  maxOpacity: 0.4,
  speed: 0.3,
  rotationSpeed: 0.01,
  types: ["rect", "circle", "triangle"],
  color: "rgba(120, 119, 198, 0.3)",
};
