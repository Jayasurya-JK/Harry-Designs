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
    cardWidth: '96%',
    cardMaxWidth: '600px',
    cardHeight: '480px', // Adjusted height to accommodate the header without cutoff
    stackOffset: 2.5,
    scaleDecrement: 0.05,
  },
  tablet: {
    cardWidth: '85%',
    cardMaxWidth: '500px',
    cardHeight: '550px',
    stackOffset: 3, // Approx 3vh
    scaleDecrement: 0,
  },
  desktop: {
    cardWidth: '100%',
    cardMaxWidth: '900px',
    cardHeight: '600px',
    stackOffset: 4, // Approx 4vh
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
  
  // Reserve the first 15% of scroll just for the first card to be admired
  const startBuffer = 0.15;
  const availableSpace = 1 - startBuffer;
  const enteringCards = totalCards - 1;
  const segmentSize = availableSpace / enteringCards;
  
  // Map index 1..N to the available space
  const cardEntryIndex = cardIndex - 1;
  const start = startBuffer + (cardEntryIndex * segmentSize);
  const end = start + segmentSize;
  
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
        input: [0, 1],
        output: [0, -finalPushUp]
      },
      scale: {
        input: [0, 1],
        output: [1, finalScale]
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
  
  // Create a continuous motion from off-screen deep below
  // At scroll=0, y=150vh (Deep off screen)
  // At scroll=start, y=100vh (Just entering screen bottom)
  // At scroll=end, y=0 (Stacked position)
  
  return {
    y: {
      input: [0, start, end, 1],
      output: [150, 100, 0, -pushUp] // Note: Interpolates from 150->100->0
    },
    scale: {
      input: [0, 1],
      output: [1, finalScale] // Constant scale until stacked? No, just keep it linear simple
    },
    opacity: {
      input: [0, start, start + 0.05, 1],
      output: [0, 0, 1, 1] // Fade in just as it enters "active" zone
    },
    zIndex: {
      input: [0, 1],
      output: [cardIndex + 1, cardIndex + 1]
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
