/**
 * Centralized easing functions for consistent animations
 */

export const EASINGS = {
  // Smooth cubic bezier - used throughout the app
  smooth: [0.22, 1, 0.36, 1],
  
  // Standard easing
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  
  // Bouncy
  bounce: [0.68, -0.55, 0.265, 1.55],
};
