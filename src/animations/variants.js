/**
 * Reusable Framer Motion animation variants
 */

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInFromTop = {
  hidden: { y: -100 },
  visible: { y: 0 },
};

export const slideInFromBottom = {
  hidden: { y: 100 },
  visible: { y: 0 },
};

export const slideInFromLeft = {
  hidden: { x: -100 },
  visible: { x: 0 },
};

export const slideInFromRight = {
  hidden: { x: 100 },
  visible: { x: 0 },
};

// Stagger children animation
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Menu animations
export const menuSlide = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: 'auto' },
};

// Hover effects
export const hoverScale = {
  scale: 1.05,
};

export const hoverLift = {
  y: -5,
};

export const hoverGlow = {
  boxShadow: '0 10px 30px rgba(215, 38, 56, 0.3)',
};
