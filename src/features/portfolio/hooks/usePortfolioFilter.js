import { useState } from 'react';

/**
 * Hook to manage portfolio filtering
 */
export function usePortfolioFilter(items, featuredCount) {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [previousFilter, setPreviousFilter] = useState('all');

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);
  
  const featuredItems = items.slice(0, featuredCount);
  const displayItems = showAll ? filteredItems : featuredItems;

  const handleShowAll = () => {
    setPreviousFilter(filter);
    setShowAll(true);
  };

  const handleBackToFeatured = () => {
    setShowAll(false);
    setFilter(previousFilter);
  };

  return {
    filter,
    setFilter,
    showAll,
    setShowAll,
    previousFilter,
    displayItems,
    featuredItems,
    handleShowAll,
    handleBackToFeatured,
  };
}
