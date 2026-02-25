import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Gift, Target, Zap } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { prizeStructure, companyInfo } from '@/data/content';
import TicketCounter from '@/components/ui/TicketCounter';

const RevenueScale = () => {
  const { ticketsSold, extendedPrizesUnlocked } = useApp();

  const progress = (ticketsSold / companyInfo.maxTickets) * 100;
  const milestoneProgress = (prizeStructure.threshold / companyInfo.maxTickets) * 100;

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
              <Zap className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Scaling Prizes</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              More Tickets = More Winners
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              As we approach our goal, we unlock additional cash prizes. 
              Everyone benefits from spreading the word!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Visual Scale */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Current State */}
              <div className="p-6 rounded-2xl bg-dark-50 border border-dark-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <Gift className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Current Prizes</p>
                      <p className="text-sm text-gray-400">Guaranteed</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">
                      {prizeStructure.current.count}
                    </p>
                    <p className="text-sm text-gold">${prizeStructure.current.total.toLocaleString()}</p>
                  </div>
                </div>

                {/* Prize List */}
                <div className="space-y-2">
                  {[...Array(prizeStructure.current.count)].map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg bg-dark border border-dark-100"
                    >
                      <span className="text-sm text-gray-400">Prize {i + 1}</span>
                      <span className="font-semibold text-white">
                        ${prizeStructure.current.value.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extended State */}
              <div className={`p-6 rounded-2xl border transition-all ${
                extendedPrizesUnlocked
                  ? 'bg-gold/10 border-gold/50'
                  : 'bg-dark-50 border-dark-100 opacity-70'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      extendedPrizesUnlocked ? 'bg-gold' : 'bg-dark-100'
                    }`}>
                      <Target className={`w-5 h-5 ${extendedPrizesUnlocked ? 'text-dark' : 'text-gray-500'}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Extended Prizes</p>
                      <p className="text-sm text-gray-400">
                        {extendedPrizesUnlocked ? 'Unlocked!' : `At ${prizeStructure.threshold.toLocaleString()} tickets`}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">
                      {prizeStructure.maxPrizes}
                    </p>
                    <p className="text-sm text-gold">${prizeStructure.extended.total.toLocaleString()}</p>
                  </div>
                </div>

                {/* Prize List */}
                <div className="space-y-2">
                  {[...Array(prizeStructure.maxPrizes)].map((_, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between p-3 rounded-lg border ${
                        extendedPrizesUnlocked || i < prizeStructure.current.count
                          ? 'bg-dark border-dark-100'
                          : 'bg-dark/50 border-dark-100/50'
                      }`}
                    >
                      <span className={`text-sm ${
                        extendedPrizesUnlocked || i < prizeStructure.current.count
                          ? 'text-gray-400'
                          : 'text-gray-600'
                      }`}>
                        Prize {i + 1}
                        {!extendedPrizesUnlocked && i >= prizeStructure.current.count && (
                          <span className="ml-2 text-xs text-gold">(Locked)</span>
                        )}
                      </span>
                      <span className={`font-semibold ${
                        extendedPrizesUnlocked || i < prizeStructure.current.count
                          ? 'text-white'
                          : 'text-gray-600'
                      }`}>
                        ${prizeStructure.extended.value.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Live Counter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <TicketCounter variant="full" />

              {/* Progress Visualization */}
              <div className="mt-6 p-6 rounded-2xl bg-dark-50 border border-dark-100">
                <h4 className="font-semibold text-white mb-4">Progress to Unlock</h4>
                
                {/* Progress Bar */}
                <div className="relative h-6 bg-dark-100 rounded-full overflow-hidden mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1 }}
                    className="absolute inset-y-0 left-0 gold-gradient rounded-full"
                  />
                  
                  {/* Milestone Marker */}
                  {!extendedPrizesUnlocked && (
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white/50"
                      style={{ left: `${milestoneProgress}%` }}
                    >
                      <div className="absolute -top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-gold" />
                      <div className="absolute -bottom-8 -translate-x-1/2 whitespace-nowrap">
                        <span className="text-xs text-gold">Unlock 3 more!</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">0</span>
                  <span className="text-gold font-semibold">
                    {extendedPrizesUnlocked ? 'All Prizes Unlocked!' : `${(prizeStructure.threshold - ticketsSold).toLocaleString()} to go`}
                  </span>
                  <span className="text-gray-400">{companyInfo.maxTickets.toLocaleString()}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueScale;
