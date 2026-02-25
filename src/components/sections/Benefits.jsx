import React from 'react';
import { motion } from 'framer-motion';
import { Home, TrendingUp, DollarSign, Check, ArrowRight } from 'lucide-react';
import { benefits } from '@/data/content';
import { useApp } from '@/context/AppContext';

const Benefits = () => {
  const { openSkillModal } = useApp();

  const icons = {
    Home,
    TrendingUp,
    DollarSign,
  };

  return (
    <section className="py-20 md:py-32 bg-dark-50">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Three Ways to Win
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              However you choose to use your prize, you're guaranteed a life-changing outcome
            </p>
          </motion.div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = icons[benefit.icon];
              
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="h-full p-8 rounded-2xl bg-dark border border-dark-100 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 group-hover:shadow-gold transition-shadow">
                      <Icon className="w-8 h-8 text-dark" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 font-display">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6">
                      {benefit.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {benefit.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={openSkillModal}
              className="inline-flex items-center gap-2 btn-primary rounded-full"
            >
              Get Your Tickets
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
