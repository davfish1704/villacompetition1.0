import { useState, useEffect, useCallback } from 'react';

/**
 * Hook for countdown timer
 * @param {Date|string} targetDate - Target date for countdown
 * @param {boolean} autoStart - Whether to start countdown immediately
 */
export const useCountdown = (targetDate, autoStart = true) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isRunning, setIsRunning] = useState(autoStart);
  const [isComplete, setIsComplete] = useState(false);

  const calculateTimeLeft = useCallback(() => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      setIsComplete(true);
      setIsRunning(false);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }, [targetDate]);

  useEffect(() => {
    if (!isRunning) return;

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && 
          newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        setIsComplete(true);
        setIsRunning(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, calculateTimeLeft]);

  const start = useCallback(() => {
    setIsRunning(true);
    setIsComplete(false);
  }, []);

  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setIsRunning(false);
    setIsComplete(false);
    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  }, []);

  // Format helpers
  const formatted = {
    days: timeLeft.days.toString().padStart(2, '0'),
    hours: timeLeft.hours.toString().padStart(2, '0'),
    minutes: timeLeft.minutes.toString().padStart(2, '0'),
    seconds: timeLeft.seconds.toString().padStart(2, '0'),
  };

  const totalHours = timeLeft.days * 24 + timeLeft.hours;

  return {
    ...timeLeft,
    formatted,
    totalHours,
    isRunning,
    isComplete,
    start,
    stop,
    reset,
  };
};

export default useCountdown;
