import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Clock } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { companyInfo } from '@/data/content';

const SocialProof = () => {
  const { ticketsSold } = useApp();
  
  // Display "Coming Soon" until launch
  const isLaunched = ticketsSold > 0;

  return (
    <section className="py-16 bg-gradient-to-r from-gold/5 via-dark to-gold/5 border-y border-dark-100">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {!isLaunched ? (
            // Coming Soon State
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gold/10 border border-gold/20">
                <Clock className="w-5 h-5 text-gold" />
                <span className="text-gold font-medium">Competition Launching Soon</span>
              </div>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Get ready! Our villa competition will be launching soon. 
                Be the first to know when tickets go on sale.
              </p>
            </motion.div>
          ) : (
            // Live Counter State
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
                  {Math.floor(ticketsSold * 0.65).toLocaleString()}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  and counting...
                </p>
              </motion.div>

              {/* Live Activity - Placeholder for now */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-green-500 uppercase tracking-wider">
                    Live Updates
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Recent entries will appear here
                </p>
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
                  {Math.round((ticketsSold / companyInfo.maxTickets) * 100)}%
                </div>
                <div className="w-full max-w-[200px] ml-auto mt-3">
                  <div className="h-2 bg-dark-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full gold-gradient rounded-full transition-all duration-1000"
                      style={{ width: `${(ticketsSold / companyInfo.maxTickets) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {ticketsSold.toLocaleString()} / {companyInfo.maxTickets.toLocaleString()} sold
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
