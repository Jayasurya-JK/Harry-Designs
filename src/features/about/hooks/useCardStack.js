import { useState, useEffect, useRef } from 'react';
import { CAROUSEL_SETTINGS } from '@/constants';

/**
 * Hook to manage card stack state for mobile swipe carousel
 */
export function useCardStack(totalCards, isInView) {
  const [cardStack, setCardStack] = useState(() =>
    Array.from({ length: totalCards }, (_, i) => i)
  );
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef(null);

  // Auto-advance cards every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying || !isInView) return;

    autoPlayTimerRef.current = setInterval(() => {
      setCardStack(prev => {
        const newStack = [...prev];
        const topCard = newStack.shift();
        newStack.push(topCard);
        return newStack;
      });
    }, CAROUSEL_SETTINGS.autoPlayInterval);

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying, isInView]);

  // Handle card swipe dismiss
  const handleDragEnd = (event, info) => {
    // Pause auto-play on user interaction
    setIsAutoPlaying(false);

    // If swiped up significantly, move to next card
    if (info.offset.y < -100) {
      setCardStack(prev => {
        const newStack = [...prev];
        const topCard = newStack.shift();
        newStack.push(topCard);
        return newStack;
      });
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return {
    cardStack,
    isAutoPlaying,
    toggleAutoPlay,
    handleDragEnd,
  };
}
