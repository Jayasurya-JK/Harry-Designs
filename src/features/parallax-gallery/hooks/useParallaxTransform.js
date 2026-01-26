import { useScroll, useTransform, useSpring } from 'framer-motion';
import { SCROLL_THRESHOLDS } from '@/constants';
import { SPRING_CONFIGS } from '@/animations';

/**
 * Hook to create smooth parallax transform effects based on scroll
 * @returns {object} - Smooth scroll-based transforms
 */
export function useParallaxTransform() {
  const { scrollY } = useScroll();

  // Parallax Transforms (Scroll-Linked)
  // Desktop: Very subtle scroll influence (0 -> -50 or 50)
  const yLeftRight = useTransform(scrollY, [0, SCROLL_THRESHOLDS.parallax], [0, -50]);
  const yCenter = useTransform(scrollY, [0, SCROLL_THRESHOLDS.parallax], [0, 50]);

  // Mobile: Row 1 LEFT (0 -> -50), Row 2 RIGHT (0 -> 50)
  const xRow1 = useTransform(scrollY, [0, SCROLL_THRESHOLDS.parallax], [0, -50]);
  const xRow2 = useTransform(scrollY, [0, SCROLL_THRESHOLDS.parallax], [0, 50]);

  // Smooth Springs for Scroll
  const springConfig = SPRING_CONFIGS.smooth;
  const smoothYLeftRight = useSpring(yLeftRight, springConfig);
  const smoothYCenter = useSpring(yCenter, springConfig);
  const smoothXRow1 = useSpring(xRow1, springConfig);
  const smoothXRow2 = useSpring(xRow2, springConfig);

  return {
    smoothYLeftRight,
    smoothYCenter,
    smoothXRow1,
    smoothXRow2,
  };
}
