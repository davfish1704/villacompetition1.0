import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Brain, CreditCard, Gift, ArrowRight, Check } from 'lucide-react';
import { howItWorksSteps } from '@/data/content';
import { useApp } from '@/context/AppContext';

const HowItWorks = () => {
  const { openSkillModal } = useApp();

  const icons = {
    Ticket,
    Brain,
    CreditCard,
    Gift,
  };

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-dark-50">
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
              How It Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Entering is simple and secure. Follow these four easy steps 
              for your chance to win.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {howItWorksSteps.map((step, index) => {
              const Icon = icons[step.icon];
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-dark-100 -translate-x-1/2 z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold" />
                    </div>
                  )}

                  <div className="relative z-10 h-full p-6 rounded-2xl bg-dark border border-dark-100 hover:border-gold/30 transition-colors">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-6 w-8 h-8 rounded-full gold-gradient flex items-center justify-center">
                      <span className="text-sm font-bold text-dark">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-4 mt-2">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Left: Visual */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-dark-100">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gold/10 to-dark">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-dark" />
                  </div>
                  <p className="text-xl font-bold text-white mb-2">
                    Secure & Transparent
                  </p>
                  <p className="text-gray-400">
                    Every step is verified and protected
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-display">
                What Happens After You Enter?
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'Instant Confirmation',
                    desc: 'Receive your unique ticket numbers via email immediately after purchase.',
                  },
                  {
                    title: 'Live Draw Notification',
                    desc: "We'll email you 48 hours before the live draw with the streaming link.",
                  },
                  {
                    title: 'Winner Announcement',
                    desc: 'Winners are contacted directly and announced on our website and social media.',
                  },
                  {
                    title: 'Prize Transfer',
                    desc: 'Our team handles all legal paperwork and transfer procedures.',
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-dark border border-dark-100"
                  >
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-gold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

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
              Start Your Entry
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
