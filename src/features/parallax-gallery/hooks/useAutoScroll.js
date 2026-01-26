import { useRef, useEffect } from 'react';
import { useMotionValue, useAnimationFrame } from 'framer-motion';
import { PARALLAX_SPEED, CAROUSEL_SETTINGS } from '@/constants';

/**
 * Hook to manage auto-scrolling behavior with pause/resume
 * @param {boolean} isPaused - Whether auto-scroll is paused
 * @returns {object} - Motion values for auto-scroll offsets
 */
export function useAutoScroll(isPaused) {
  const scrollTimeout = useRef(null);

  // MotionValues for Auto-Scroll offsets
  const autoY1 = useMotionValue(0); // Col 1 & 3 (Up)
  const autoY2 = useMotionValue(0); // Col 2 (Down)
  const autoX1 = useMotionValue(0); // Row 1 (Left)
  const autoX2 = useMotionValue(0); // Row 2 (Right)

  // Animation Loop
  useAnimationFrame((t, delta) => {
    if (!isPaused) {
      // Desktop Vertical (Loop at -50% for 2 sets of images)
      const moveUp = autoY1.get() - PARALLAX_SPEED * delta * 0.05;
      const moveDown = autoY2.get() + PARALLAX_SPEED * delta * 0.05;

      // Mobile Horizontal
      const moveLeft = autoX1.get() - PARALLAX_SPEED * delta * 0.05;
      const moveRight = autoX2.get() + PARALLAX_SPEED * delta * 0.05;

      // UP Loop (0 -> -50)
      let newUp = moveUp;
      if (newUp <= -50) newUp = 0;
      autoY1.set(newUp);

      // DOWN Loop (-50 -> 0)
      let newDown = moveDown;
      if (newDown >= 0) newDown = -50;
      autoY2.set(newDown);

      // LEFT Loop (0 -> -50)
      let newLeft = moveLeft;
      if (newLeft <= -50) newLeft = 0;
      autoX1.set(newLeft);

      // RIGHT Loop (-50 -> 0)
      let newRight = moveRight;
      if (newRight >= 0) newRight = -50;
      autoX2.set(newRight);
    }
  });

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return { autoY1, autoY2, autoX1, autoX2 };
}
