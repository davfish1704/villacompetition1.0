import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShoppingCart, Trophy, Megaphone, Check, Clock, Loader2 } from 'lucide-react';
import { timeline } from '@/data/content';
import { useApp } from '@/context/AppContext';

const Timeline = () => {
  const { ticketsSold } = useApp();

  const icons = {
    Rocket,
    ShoppingCart,
    Trophy,
    Megaphone,
  };

  const statusIcons = {
    completed: Check,
    active: Loader2,
    pending: Clock,
  };

  const statusColors = {
    completed: 'bg-green-500/20 text-green-500 border-green-500/30',
    active: 'bg-gold/20 text-gold border-gold/30',
    pending: 'bg-dark-100 text-gray-500 border-dark-100',
  };

  return (
    <section className="py-20 md:py-32 bg-dark">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Competition Timeline
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Track our progress from launch to the live draw announcement
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-100 -translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = icons[item.phase.toLowerCase().replace(' ', '')] || Trophy;
                const StatusIcon = statusIcons[item.status];
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={item.phase}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center gap-8 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`inline-block p-6 rounded-2xl bg-dark-50 border ${statusColors[item.status]}`}>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {item.phase}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {item.description}
                        </p>
                        
                        {/* Status Badge */}
                        <div className={`inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === 'completed' ? 'bg-green-500/20 text-green-500' :
                          item.status === 'active' ? 'bg-gold/20 text-gold' :
                          'bg-dark-100 text-gray-500'
                        }`}>
                          <StatusIcon className={`w-3 h-3 ${item.status === 'active' ? 'animate-spin' : ''}`} />
                          {item.status === 'completed' ? 'Completed' :
                           item.status === 'active' ? 'In Progress' :
                           'Upcoming'}
                        </div>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-dark border-2 border-gold flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>

                    {/* Empty Space for Layout */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Current Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-6 rounded-2xl bg-gold/10 border border-gold/30 text-center"
          >
            <p className="text-gold font-semibold mb-2">Current Status</p>
            <p className="text-white text-lg">
              {ticketsSold.toLocaleString()} tickets sold • Live draw when sold out
            </p>
            <p className="text-gray-400 text-sm mt-2">
              We'll notify all participants 48 hours before the draw
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
