import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Activity } from 'lucide-react';
import { useApp } from '@/context/AppContext';

const SocialProof = () => {
  const { ticketsSold } = useApp();
  const [displayCount, setDisplayCount] = useState(2847);
  const [recentEntries, setRecentEntries] = useState([
    { name: 'James from London', entries: 5, time: '2 min ago' },
    { name: 'Sarah from Manchester', entries: 10, time: '5 min ago' },
    { name: 'Michael from Sydney', entries: 3, time: '8 min ago' },
  ]);

  // Animate the counter
  useEffect(() => {
    const targetCount = Math.floor(ticketsSold * 0.65); // Assume 65% are unique people
    const duration = 2000;
    const steps = 60;
    const increment = (targetCount - displayCount) / steps;
    let current = displayCount;

    const timer = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= targetCount) || 
          (increment < 0 && current <= targetCount)) {
        setDisplayCount(targetCount);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [ticketsSold]);

  // Rotate recent entries
  useEffect(() => {
    const names = [
      'Emma from Bristol', 'David from Toronto', 'Lisa from Berlin',
      'John from New York', 'Anna from Paris', 'Chris from Dubai',
      'Sophie from Amsterdam', 'Tom from Singapore', 'Maria from Madrid'
    ];
    const entries = [1, 3, 5, 10, 2, 7];

    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomEntries = entries[Math.floor(Math.random() * entries.length)];
      
      setRecentEntries(prev => {
        const newEntry = { name: randomName, entries: randomEntries, time: 'Just now' };
        return [newEntry, ...prev.slice(0, 2)];
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-gold/5 via-dark to-gold/5 border-y border-dark-100">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Counter */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <Users className="w-6 h-6 text-gold" />
                <span className="text-sm text-gray-400 uppercase tracking-wider">
                  People Entered
                </span>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white font-display">
                {displayCount.toLocaleString()}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                and counting...
              </p>
            </motion.div>

            {/* Live Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-green-500" />
                <span className="text-sm text-green-500 uppercase tracking-wider">
                  Live Activity
                </span>
              </div>
              <div className="space-y-2">
                {recentEntries.map((entry, index) => (
                  <motion.div
                    key={`${entry.name}-${index}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-3 text-sm"
                  >
                    <span className="text-gray-300">{entry.name}</span>
                    <span className="px-2 py-0.5 rounded-full bg-gold/20 text-gold text-xs">
                      +{entry.entries} entries
                    </span>
                    <span className="text-gray-500 text-xs">{entry.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Ticket Progress */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <div className="flex items-center justify-center md:justify-end gap-3 mb-2">
                <TrendingUp className="w-6 h-6 text-gold" />
                <span className="text-sm text-gray-400 uppercase tracking-wider">
                  Ticket Progress
                </span>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white font-display">
                {Math.round((ticketsSold / 150000) * 100)}%
              </div>
              <div className="w-full max-w-[200px] ml-auto mt-3">
                <div className="h-2 bg-dark-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full gold-gradient rounded-full transition-all duration-1000"
                    style={{ width: `${(ticketsSold / 150000) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {ticketsSold.toLocaleString()} / 150,000 sold
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
