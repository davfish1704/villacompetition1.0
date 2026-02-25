import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Quote, Calendar, MapPin, Gift } from 'lucide-react';
import { pastWinners, companyInfo } from '@/data/content';

const Winners = () => {
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
              <Trophy className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Past Winners</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Our Winners
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real people, real prizes. Over ${(companyInfo.totalPrizesAwarded / 1000).toFixed(0)}k awarded to {companyInfo.campaignsCompleted}+ winners since {companyInfo.established}.
            </p>
          </motion.div>

          {/* Winners Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pastWinners.map((winner, index) => (
              <motion.div
                key={winner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full rounded-2xl bg-dark-50 border border-dark-100 overflow-hidden hover:border-gold/30 transition-colors">
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-dark-100 overflow-hidden">
                    {/* [PLACEHOLDER: Winner Image] */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gold/20 to-dark">
                      <div className="text-center p-6">
                        <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                          <Gift className="w-10 h-10 text-dark" />
                        </div>
                        <p className="text-lg font-bold text-white">{winner.prize}</p>
                      </div>
                    </div>
                    
                    {/* Prize Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full gold-gradient">
                      <span className="text-sm font-semibold text-dark">
                        ${winner.value.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Quote */}
                    <div className="flex items-start gap-3 mb-4">
                      <Quote className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <p className="text-gray-300 italic text-sm">
                        "{winner.quote}"
                      </p>
                    </div>

                    {/* Winner Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-dark-100">
                      <div>
                        <p className="font-semibold text-white">{winner.name}</p>
                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {winner.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {winner.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: 'Total Prizes Awarded', value: `$${(companyInfo.totalPrizesAwarded / 1000).toFixed(0)}k+` },
              { label: 'Happy Winners', value: '12+' },
              { label: 'Campaigns Completed', value: companyInfo.campaignsCompleted.toString() },
              { label: 'Countries', value: '4' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-dark-50 border border-dark-100"
              >
                <p className="text-2xl md:text-3xl font-bold text-gold mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">
              Could you be our next winner?
            </p>
            <p className="text-sm text-gray-500">
              [PLACEHOLDER: Video testimonials from winners would go here]
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Winners;
