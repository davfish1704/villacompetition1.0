import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, CheckCircle, FileText, Star, Trophy } from 'lucide-react';
import HeroContainer from '@/components/media/HeroContainer';
import { useApp } from '@/context/AppContext';
import { villaDetails, companyInfo, testimonials } from '@/data/content';

const HeroSection = () => {
  const { openSkillModal, ticketsSold } = useApp();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <div className="section-padding pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 mb-8"
          >
            <Trophy className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">
              LIMITED OPPORTUNITY
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm md:text-base text-gray-300 tracking-widest uppercase mb-4">
              Guaranteed: 4 Winners Total
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display leading-tight">
              Win a{' '}
              <span className="gold-text">${(villaDetails.value / 1000000).toFixed(0)}M</span>
              <br />
              Villa in Bali
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            {villaDetails.bedrooms} bedrooms. Private pool. In the heart of Canggu.
            <br className="hidden md:block" />
            Your escape to paradise—or a seven-figure asset.
            <br className="hidden md:block" />
            Plus 3 bonus winners get $10,000 cash each.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://buy.stripe.com/cNi7sL9xtfGR5X532Y2Fa05"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-full text-lg px-10 py-5 inline-block"
            >
              Enter Now
            </a>
            <button
              onClick={() => scrollToSection('#how-it-works')}
              className="btn-secondary rounded-full text-lg px-10 py-5"
            >
              See How It Works
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="w-5 h-5 text-gold" />
              <span className="text-sm">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CheckCircle className="w-5 h-5 text-gold" />
              <span className="text-sm">Verified Draw</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <FileText className="w-5 h-5 text-gold" />
              <span className="text-sm">Transparent Rules</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-sm font-semibold text-red-400">18+</span>
              <span className="text-sm">Adults Only</span>
            </div>
          </motion.div>

          {/* Trustpilot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-2 mb-12"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-green-500 fill-green-500" />
              ))}
            </div>
            <span className="text-gray-300">
              <span className="font-semibold text-white">Trustpilot Rated 5.0</span> by our community
            </span>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-xl mx-auto"
          >
            <div className="glass-light rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-green-500 fill-green-500" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-4">
                "{testimonials[0].text}"
              </p>
              <p className="text-gold font-medium">
                — {testimonials[0].name}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-0 left-0 right-0 glass border-t border-white/10"
        >
          <div className="section-padding py-4">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-gold" />
                <span className="text-sm text-gray-300">4 Guaranteed Winners</span>
              </div>
              <button
                onClick={() => scrollToSection('#how-it-works')}
                className="flex items-center gap-2 text-sm text-gold hover:underline"
              >
                <ChevronRight className="w-4 h-4" />
                See How It Works
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </HeroContainer>
  );
};

export default HeroSection;
