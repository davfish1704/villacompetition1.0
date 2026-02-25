import React from 'react';
import { motion } from 'framer-motion';
import { Home, Maximize, Bed, Car, TrendingUp, DollarSign } from 'lucide-react';
import { villaDetails, companyInfo, prizeStructure } from '@/data/content';
import CountUp from '@/components/ui/CountUp';

const ValueStack = () => {
  const features = [
    {
      icon: DollarSign,
      label: 'Villa Value',
      value: villaDetails.value,
      prefix: '$',
      suffix: '',
      format: 'compact',
    },
    {
      icon: Maximize,
      label: 'Square Footage',
      value: villaDetails.sqft,
      prefix: '',
      suffix: '',
      format: 'number',
    },
    {
      icon: Bed,
      label: 'Bedrooms',
      value: villaDetails.bedrooms,
      prefix: '',
      suffix: '+ Staff Apt',
      format: 'number',
    },
    {
      icon: TrendingUp,
      label: 'Monthly Rental',
      value: villaDetails.rentalIncome,
      prefix: '$',
      suffix: '+',
      format: 'number',
    },
  ];

  return (
    <section id="villa" className="py-20 md:py-32 bg-dark">
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
              The Prize Package
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              More than just a villa—this is a life-changing asset in one of Bali's most desirable locations
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-dark-50 border border-dark-100 hover:border-gold/30 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-gold mb-4" />
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {feature.format === 'compact' ? (
                    <span>{feature.prefix}{(feature.value / 1000000).toFixed(0)}M{feature.suffix}</span>
                  ) : (
                    <CountUp
                      end={feature.value}
                      prefix={feature.prefix}
                      suffix={feature.suffix}
                      duration={2}
                    />
                  )}
                </p>
                <p className="text-sm text-gray-400">{feature.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img
                src="/media/gallery/exterior-1.jpg"
                alt="La Casa De Villa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-display text-2xl">La Casa De Villa</p>
                <p className="text-gray-300">Canggu, Bali</p>
              </div>
            </motion.div>

            {/* Right: Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display">
                A Tropical Paradise Awaits
              </h3>
              <p className="text-gray-400 mb-6">
                {villaDetails.description} This stunning property offers everything 
                you need for the ultimate Bali lifestyle—whether you choose to live in it, 
                rent it out, or sell it for a profit.
              </p>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {villaDetails.features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Prize Scaling Info */}
              <div className="p-4 rounded-xl bg-gold/10 border border-gold/30">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-gold" />
                  <span className="font-semibold text-gold">Prize Scaling Active</span>
                </div>
                <p className="text-sm text-gray-400">
                  Currently {prizeStructure.current.count} prizes of ${prizeStructure.current.value.toLocaleString()}. 
                  At {prizeStructure.threshold.toLocaleString()} tickets, we unlock {prizeStructure.maxPrizes} prizes 
                  totaling ${prizeStructure.extended.total.toLocaleString()}!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStack;
