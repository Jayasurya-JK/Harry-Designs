/**
 * Spring configurations for smooth physics-based animations
 */

export const SPRING_CONFIGS = {
  // Very smooth, no bounce - for premium feel
  smooth: {
    stiffness: 40,
    damping: 50,
    bounce: 0,
  },
  
  // Default spring
  default: {
    stiffness: 100,
    damping: 20,
    bounce: 0,
  },
  
  // Gentle spring
  gentle: {
    stiffness: 60,
    damping: 15,
    bounce: 0,
  },
  
  // Bouncy spring
  bouncy: {
    stiffness: 100,
    damping: 10,
    bounce: 0.5,
  },
  
  // Stiff/snappy
  snappy: {
    stiffness: 200,
    damping: 20,
    bounce: 0,
  },
};
