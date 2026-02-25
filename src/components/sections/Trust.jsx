import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Trophy, Star, Shield, Heart, TrendingUp, CheckCircle } from 'lucide-react';
import { trustMetrics, companyInfo, testimonials } from '@/data/content';
import CountUp from '@/components/ui/CountUp';

const Trust = () => {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Trust & Transparency</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Why Trust Us?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're committed to complete transparency in every draw. 
              Our track record speaks for itself.
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {trustMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-dark border border-dark-100 text-center hover:border-gold/30 transition-colors"
              >
                <p className="text-3xl md:text-4xl font-bold text-gold mb-2">
                  <CountUp
                    end={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    decimals={metric.decimals || 0}
                    duration={2}
                  />
                </p>
                <p className="text-sm text-gray-400">{metric.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Company Story */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display">
                Our Story
              </h3>
              <p className="text-gray-400 mb-4">
                Founded in {companyInfo.established}, {companyInfo.name} was born from a 
                simple idea: make luxury accessible through skill-based competitions. 
                We've since awarded over ${(companyInfo.totalPrizesAwarded / 1000).toFixed(0)}k in prizes across {companyInfo.campaignsCompleted} successful campaigns.
              </p>
              <p className="text-gray-400 mb-6">
                Every draw is conducted live with an independent adjudicator, ensuring 
                complete fairness and transparency. We're registered and compliant in 
                all operating markets.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: CheckCircle, label: 'Verified Draws' },
                  { icon: Shield, label: 'GDPR Compliant' },
                  { icon: Award, label: 'Licensed' },
                  { icon: TrendingUp, label: 'Secure Payments' },
                ].map((badge, index) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-dark-50 border border-dark-100"
                  >
                    <badge.icon className="w-4 h-4 text-gold" />
                    <span className="text-sm text-gray-300">{badge.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-dark-100">
                {/* [PLACEHOLDER: Company/Team Image] */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gold/10 to-dark">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
                      <Trophy className="w-12 h-12 text-dark" />
                    </div>
                    <p className="text-2xl font-bold text-white mb-2">
                      {companyInfo.campaignsCompleted} Campaigns
                    </p>
                    <p className="text-gray-400">
                      Successfully completed with happy winners
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center font-display">
              What Our Community Says
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-dark border border-dark-100 hover:border-gold/30 transition-colors"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-green-500 fill-green-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 text-sm mb-4">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-sm font-semibold text-gold">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Charity Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-2xl bg-dark border border-dark-100 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="font-semibold text-white">Giving Back</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              [PLACEHOLDER: Charity partnership information. A portion of every ticket 
              sale goes toward our charity partners making a difference in Bali and beyond.]
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
