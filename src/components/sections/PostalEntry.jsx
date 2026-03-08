import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, AlertCircle, CheckCircle } from 'lucide-react';

const PostalEntry = () => {
  const steps = [
    {
      icon: Mail,
      title: "Write Your Details",
      description: "Include your full name, postal address, email address, and phone number on a postcard."
    },
    {
      icon: AlertCircle,
      title: "Answer the Question",
      description: "Include the correct answer to the skill question. This ensures we're a competition, not a lottery."
    },
    {
      icon: MapPin,
      title: "Send to Us",
      description: "Mail your entry to our free entry department. Must be received before the closing date."
    }
  ];

  const requirements = [
    "One entry per postcard",
    "Multiple entries must be on separate postcards",
    "Clear handwriting required",
    "Must include all requested information",
    "Received at least 14 days before draw"
  ];

  return (
    <section id="postal-entry" className="py-20 bg-dark">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
              <Mail className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold tracking-wider uppercase">
                Free Entry Available
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
              Enter by <span className="gold-text">Post</span>
            </h2>
            <p className="text-lg text-gray-400">
              No purchase necessary. Enter completely free by postal mail. 
              Everyone has an equal chance to win.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {steps.map((step, index) => (
                <div 
                  key={step.title}
                  className="flex gap-4 p-6 rounded-2xl bg-dark-50 border border-dark-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gold font-semibold">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-dark-50 rounded-2xl p-8 border border-dark-100 h-full">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Send Your Entry To:
                </h3>
                
                <div className="p-6 rounded-xl bg-dark border border-dark-100 mb-6">
                  <p className="font-semibold text-gold mb-2">Free Entry Department</p>
                  <p className="text-white">Villa Competition</p>
                  <p className="text-gray-400">123 Example Street</p>
                  <p className="text-gray-400">London, EC1A 1BB</p>
                  <p className="text-gray-400">United Kingdom</p>
                </div>

                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  Requirements
                </h4>
                <ul className="space-y-3">
                  {requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 rounded-xl bg-gold/5 border border-gold/20">
                  <p className="text-xs text-gold">
                    <strong>Important:</strong> Postal entries are treated exactly the same as paid entries in the draw. 
                    Everyone has an equal chance of winning.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostalEntry;
