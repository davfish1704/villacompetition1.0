import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Waves, Music, Heart, Wifi, GraduationCap, Plane } from 'lucide-react';
import { locationHighlights, villaDetails } from '@/data/content';

const Location = () => {
  const icons = {
    Waves,
    Music,
    Heart,
    Wifi,
    GraduationCap,
    Plane,
  };

  return (
    <section className="py-20 md:py-32 bg-dark">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Location</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Canggu, Bali
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The most sought-after location in Bali—where tropical paradise 
              meets modern lifestyle
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Map/Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-dark-100">
                {/* [PLACEHOLDER: Map of Canggu] */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gold/20 to-dark">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
                    <p className="text-2xl font-bold text-white mb-2">Canggu, Bali</p>
                    <p className="text-gray-400">Indonesia</p>
                    <div className="mt-6 p-4 rounded-xl bg-dark/50 border border-gold/30 inline-block">
                      <p className="text-sm text-gray-300">Coordinates</p>
                      <p className="text-gold font-mono">8.6478° S, 115.1385° E</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-dark border border-gold/30 shadow-xl">
                <p className="text-white font-semibold">
                  {villaDetails.location}
                </p>
              </div>
            </motion.div>

            {/* Right: Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-display">
                Why Canggu?
              </h3>
              <p className="text-gray-400 mb-8">
                Canggu has transformed from a sleepy surf village into Bali's most 
                vibrant coastal community. It's where digital nomads, surfers, and 
                luxury seekers converge to enjoy the perfect blend of laid-back 
                lifestyle and world-class amenities.
              </p>

              {/* Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {locationHighlights.map((highlight, index) => {
                  const Icon = icons[highlight.icon];
                  
                  return (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-dark-50 border border-dark-100 hover:border-gold/30 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {highlight.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              { label: 'To Beach', value: '5 min' },
              { label: 'To Airport', value: '45 min' },
              { label: 'Restaurants', value: '200+' },
              { label: 'Yearly Sunshine', value: '280 days' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-dark-50 border border-dark-100"
              >
                <p className="text-2xl font-bold text-gold mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
