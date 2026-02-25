import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight, Sparkles, Clock, Users } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { companyInfo, villaDetails } from '@/data/content';

const FinalCTA = () => {
  const { openSkillModal, ticketsSold } = useApp();

  const remaining = companyInfo.maxTickets - ticketsSold;
  const progress = (ticketsSold / companyInfo.maxTickets) * 100;

  return (
    <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-gold/5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">Limited Time Opportunity</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-display"
          >
            4 Winners.
            <br />
            <span className="gold-text">1 Villa.</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Don't miss your chance to win a ${(villaDetails.value / 1000000).toFixed(0)}M villa in Bali 
            plus ${(companyInfo.currentPrizes * companyInfo.prizeValue / 1000).toFixed(0)}k in cash prizes.
          </motion.p>

          {/* Urgency Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 mb-10"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-5 h-5 text-gold" />
              <span>{remaining.toLocaleString()} tickets left</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Users className="w-5 h-5 text-gold" />
              <span>{ticketsSold.toLocaleString()} already sold</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Trophy className="w-5 h-5 text-gold" />
              <span>4 guaranteed winners</span>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto mb-10"
          >
            <div className="h-3 bg-dark-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-full gold-gradient rounded-full"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {progress.toFixed(1)}% sold out
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={openSkillModal}
              className="btn-primary rounded-full text-lg px-10 py-5"
            >
              Enter Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </motion.div>

          {/* Trust Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 mt-8"
          >
            Secure payment • 18+ only • No purchase necessary • See terms for free entry
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
