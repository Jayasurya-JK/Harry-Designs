/**
 * Scroll Stack Animation Configuration
 * 
 * Creates a scroll-jacking stacked card effect:
 * 1. Page scrolls to section
 * 2. Viewport LOCKS in place (sticky)
 * 3. Cards stack in center while you scroll
 * 4. After stacking completes, page unlocks and continues
 * 
 * Architecture:
 * - Container: Tall enough for all card animations (creates scroll room)
 * - Sticky viewport: LOCKS screen in place
 * - Cards: ALL in same spot, animate on top of each other
 */

import { EASINGS } from './easings';

/**
 * Responsive card dimensions and spacing
 */
export const STACK_DIMENSIONS = {
  mobile: {
    cardWidth: '92%',
    cardMaxWidth: '340px',
    cardHeight: '420px', // Reduced height to prevent title overlap
    stackOffset: 8,
    scaleDecrement: 0,
  },
  tablet: {
    cardWidth: '85%',
    cardMaxWidth: '500px',
    cardHeight: '550px',
    stackOffset: 20,
    scaleDecrement: 0,
  },
  desktop: {
    cardWidth: '100%',
    cardMaxWidth: '900px',
    cardHeight: '600px',
    stackOffset: 25,
    scaleDecrement: 0,
  },
};

/**
 * Calculate scroll progress ranges for each card
 * 
 * Cards stack one by one as you scroll:
 * - Card 0: visible from start (0-100%)
 * - Card 1: enters at 33%, fully stacked by 50%
 * - Card 2: enters at 66%, fully stacked by 83%
 * 
 * @param {number} cardIndex - Index of the card (0-based)
 * @param {number} totalCards - Total number of cards
 * @returns {object} - { start, end } scroll progress values (0-1)
 */
export function getCardScrollRange(cardIndex, totalCards) {
  if (cardIndex === 0) {
    // First card visible from beginning
    return { start: 0, end: 1 };
  }
  
  // Each subsequent card enters in sequence
  const segmentSize = 1 / totalCards;
  const start = cardIndex * segmentSize;
  const end = start + (segmentSize * 0.5); // Takes half segment to fully stack
  
  return { start, end };
}

/**
 * Generate transform values for a card based on scroll progress
 * 
 * FIRST CARD: Always visible, centered, gets pushed back as others stack
 * OTHER CARDS: Start below viewport, slide up to center and stack on top
 * 
 * @param {number} cardIndex - Index of the card
 * @param {number} totalCards - Total number of cards
 * @param {number} stackOffset - Vertical offset in pixels
 * @param {number} scaleDecrement - How much to scale down per layer
 * @returns {object} - Input/output arrays for useTransform
 */
export function createScrollTransforms(cardIndex, totalCards, stackOffset, scaleDecrement) {
  const { start, end } = getCardScrollRange(cardIndex, totalCards);
  const isFirstCard = cardIndex === 0;
  const cardsAbove = totalCards - cardIndex - 1;
  
  if (isFirstCard) {
    // FIRST CARD: Starts centered, gets pushed back as others come
    const finalPushUp = stackOffset * (totalCards - 1);
    const finalScale = 1 - (scaleDecrement * (totalCards - 1));
    
    return {
      y: {
        input: [0, 0.8, 1],
        output: [0, -finalPushUp, -finalPushUp]
      },
      scale: {
        input: [0, 0.8, 1],
        output: [1, finalScale, finalScale]
      },
      opacity: {
        input: [0, 1],
        output: [1, 1]
      },
      zIndex: {
        input: [0, 1],
        output: [1, 1]
      }
    };
  }
  
  // OTHER CARDS: Slide from below, stack on top
  const pushUp = stackOffset * cardsAbove;
  const finalScale = 1 - (scaleDecrement * cardsAbove);
  
  return {
    y: {
      input: [0, start - 0.01, start, end, 1],
      output: [120, 120, 0, -pushUp, -pushUp] // Start below (120vh), slide to center, push up
    },
    scale: {
      input: [0, start, end, 1],
      output: [0.95, 1, finalScale, finalScale]
    },
    opacity: {
      input: [0, start - 0.05, start, 1],
      output: [0, 0, 1, 1]
    },
    zIndex: {
      input: [0, 1],
      output: [cardIndex + 1, cardIndex + 1] // Higher cards on top
    }
  };
}

/**
 * Animation configuration for scroll stack
 */
export const SCROLL_STACK_CONFIG = {
  // Container height: enough room for all animations
  // Increase height for more cards to allow smooth scrolling
  containerHeight: '600vh',
  
  // Viewport height: locked sticky container
  viewportHeight: '100vh',
  
  // Transition easing
  ease: EASINGS.smooth,
};

/**
 * Get responsive dimensions based on screen size
 * 
 * @param {boolean} isMobile - Is mobile viewport
 * @param {boolean} isTablet - Is tablet viewport
 * @returns {object} - Dimensions for current breakpoint
 */
export function getResponsiveDimensions(isMobile, isTablet) {
  if (isMobile) return STACK_DIMENSIONS.mobile;
  if (isTablet) return STACK_DIMENSIONS.tablet;
  return STACK_DIMENSIONS.desktop;
}
