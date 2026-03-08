import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set draw date to April 9, 2026 at 18:00:00
    const drawDate = new Date('2026-04-09T18:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = drawDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-dark-50 border border-dark-100 flex items-center justify-center mb-2">
        <span className="text-2xl md:text-3xl font-bold text-gold font-display">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-gray-500 uppercase tracking-wider">{label}</span>
    </div>
  );

  const Separator = () => (
    <div className="flex flex-col justify-center pb-6">
      <span className="text-2xl md:text-3xl font-bold text-gold">:</span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="w-full max-w-2xl mx-auto mt-12"
    >
      <div className="glass rounded-2xl p-6 md:p-8 border border-white/10">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Clock className="w-5 h-5 text-gold" />
          <span className="text-sm text-gray-400 uppercase tracking-wider">
            Draw Countdown
          </span>
        </div>

        {/* Timer */}
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <TimeUnit value={timeLeft.days} label="Days" />
          <Separator />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <Separator />
          <TimeUnit value={timeLeft.minutes} label="Mins" />
          <Separator />
          <TimeUnit value={timeLeft.seconds} label="Secs" />
        </div>

        {/* Draw Date */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Live Draw: April 9, 2026 at 6:00 PM GMT
        </p>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
