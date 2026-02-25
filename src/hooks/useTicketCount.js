import { useState, useEffect, useCallback } from 'react';
import { companyInfo } from '@/data/content';

/**
 * Hook for managing ticket count with live updates
 * @param {number} initialCount - Starting ticket count
 * @param {boolean} simulateLive - Whether to simulate live updates
 */
export const useTicketCount = (initialCount = 45237, simulateLive = true) => {
  const [ticketsSold, setTicketsSold] = useState(initialCount);
  const [isLive, setIsLive] = useState(simulateLive);

  // Simulate live ticket sales
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setTicketsSold(prev => {
        // Random increment between 1-5 tickets
        const increment = Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + increment, companyInfo.maxTickets);
      });
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [isLive]);

  // Calculate progress percentage
  const progress = (ticketsSold / companyInfo.maxTickets) * 100;

  // Format numbers for display
  const formattedSold = ticketsSold.toLocaleString();
  const formattedTotal = companyInfo.maxTickets.toLocaleString();
  const remaining = (companyInfo.maxTickets - ticketsSold).toLocaleString();

  // Manual update function
  const updateCount = useCallback((newCount) => {
    setTicketsSold(Math.min(Math.max(0, newCount), companyInfo.maxTickets));
  }, []);

  // Toggle live updates
  const toggleLive = useCallback(() => {
    setIsLive(prev => !prev);
  }, []);

  return {
    ticketsSold,
    progress,
    formattedSold,
    formattedTotal,
    remaining,
    isLive,
    updateCount,
    toggleLive,
  };
};

export default useTicketCount;
