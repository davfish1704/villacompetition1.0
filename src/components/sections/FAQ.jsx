import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { faqItems } from '@/data/content';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-dark-50">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <HelpCircle className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about entering and winning
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl bg-dark border border-dark-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-dark-50 transition-colors"
                >
                  <span className="font-medium text-white pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5">
                        <div className="pt-2 border-t border-dark-100">
                          <p className="text-gray-400 pt-4">{item.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-2xl bg-dark border border-dark-100 text-center"
          >
            <MessageCircle className="w-8 h-8 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-4">
              Our support team is here to help you with any questions you may have.
            </p>
            <a
              href="mailto:support@luckydipluxury.com"
              className="inline-flex items-center gap-2 text-gold hover:underline"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
