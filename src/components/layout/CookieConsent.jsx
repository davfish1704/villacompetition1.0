import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { useApp } from '@/context/AppContext';

const CookieConsent = () => {
  const { showCookieConsent, acceptCookies, declineCookies } = useApp();

  if (!showCookieConsent) return null;

  return (
    <AnimatePresence>
      {showCookieConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[90] p-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="glass border border-dark-100 rounded-2xl p-4 md:p-6 shadow-2xl">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-gold" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">
                    We use cookies
                  </h3>
                  <p className="text-sm text-gray-400">
                    We use cookies to enhance your experience, analyze site traffic, 
                    and for marketing purposes. By continuing to use our site, you 
                    consent to our use of cookies. Read our{' '}
                    <a href="#cookies" className="text-gold hover:underline">
                      Cookie Policy
                    </a>{' '}
                    for more information.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                  <button
                    onClick={acceptCookies}
                    className="px-6 py-2.5 gold-gradient rounded-lg font-semibold text-dark text-sm whitespace-nowrap hover:shadow-gold transition-shadow"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={declineCookies}
                    className="px-6 py-2.5 border border-dark-200 rounded-lg font-medium text-gray-400 text-sm whitespace-nowrap hover:bg-dark-100 hover:text-white transition-colors"
                  >
                    Essential Only
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={declineCookies}
                  className="absolute top-4 right-4 md:static md:hidden text-gray-500 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
