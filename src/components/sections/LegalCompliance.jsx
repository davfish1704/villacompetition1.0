import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Mail, Globe, Shield, AlertTriangle, CheckCircle, FileText, Lock } from 'lucide-react';
import { legalCompliance, companyInfo } from '@/data/content';

const LegalCompliance = () => {
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
              <Scale className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Legal & Compliance</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Why This Is Legal
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We operate as a skill-based competition, fully compliant with regulations 
              in all our operating markets
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Skill-Based Explanation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-dark-50 border border-dark-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                    <BrainIcon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Skill-Based, Not Gambling</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  {legalCompliance.skillBasedExplanation}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      Requires skill to answer estimation questions within 10% tolerance
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      Questions are AI-resistant and require human judgment
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      No element of pure chance in the entry process
                    </p>
                  </div>
                </div>
              </div>

              {/* Free Entry */}
              <div className="p-6 rounded-2xl bg-dark-50 border border-dark-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white">No Purchase Necessary</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Free entry is available via postal entry. Everyone has an equal 
                  chance to win regardless of purchase.
                </p>
                <div className="p-4 rounded-xl bg-dark border border-dark-100">
                  <p className="text-sm text-gray-400 mb-2">Free Entry Address:</p>
                  <p className="text-sm text-gray-300 font-mono">
                    {legalCompliance.freeEntry.address}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {legalCompliance.freeEntry.restrictions}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Compliance Badges */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Market Compliance */}
              <div className="p-6 rounded-2xl bg-dark-50 border border-dark-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Operating Markets</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {companyInfo.markets.map((market) => (
                    <div
                      key={market}
                      className="flex items-center gap-3 p-3 rounded-lg bg-dark border border-dark-100"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-white font-medium">{market}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Badges */}
              <div className="p-6 rounded-2xl bg-dark-50 border border-dark-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Compliance & Security</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Lock, label: 'GDPR Compliant', desc: 'Your data is protected' },
                    { icon: FileText, label: 'Transparent Rules', desc: 'Clear terms & conditions' },
                    { icon: Shield, label: 'SSL Secured', desc: '256-bit encryption' },
                    { icon: AlertTriangle, label: '18+ Only', desc: 'Age verification required' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 p-3 rounded-lg bg-dark border border-dark-100"
                    >
                      <item.icon className="w-5 h-5 text-gold" />
                      <div>
                        <p className="font-medium text-white">{item.label}</p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Age Warning */}
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-400 mb-1">
                      {companyInfo.minAge}+ Adults Only
                    </p>
                    <p className="text-sm text-gray-400">
                      You must be {companyInfo.minAge} years or older to participate. 
                      Age verification is required before entry.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom: Responsible Gaming */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-2xl bg-dark border border-dark-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Responsible Participation</h3>
                <p className="text-gray-400">
                  {legalCompliance.responsibleGaming} If you feel you may have a 
                  problem with gambling, please contact{' '}
                  <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                    BeGambleAware
                  </a>{' '}
                  or your local support organization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Custom Brain Icon since Lucide doesn't have one
const BrainIcon = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const Heart = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export default LegalCompliance;
