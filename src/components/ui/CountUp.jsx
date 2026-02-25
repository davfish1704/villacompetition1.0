import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const CountUp = ({
  end,
  start = 0,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  separator = ',',
  className = '',
  delay = 0,
}) => {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    
    hasAnimated.current = true;
    
    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const tick = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        
        // Easing function (ease-out cubic)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        const currentCount = start + (end - start) * easeOut;
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(tick);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, start, end, duration, delay]);

  // Format number
  const formatNumber = (num) => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join('.');
  };

  return (
    <span ref={ref} className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

export default CountUp;
