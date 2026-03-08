import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Check, X, Shield } from 'lucide-react';
import { useApp } from '@/context/AppContext';

const AgeGate = () => {
  const { showAgeGate, verifyAge, acceptTerms, leaveSite, ageVerified, termsAccepted } = useApp();
  const [localAgeChecked, setLocalAgeChecked] = useState(false);
  const [localTermsChecked, setLocalTermsChecked] = useState(false);

  if (!showAgeGate) return null;

  const handleContinue = () => {
    if (localAgeChecked) verifyAge();
    if (localTermsChecked) acceptTerms();
  };

  const canContinue = localAgeChecked && localTermsChecked;

  return (
    <AnimatePresence>
      {showAgeGate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/95 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg mx-4"
          >
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gold-gradient mb-4">
                <span className="text-3xl font-bold text-dark">VC</span>
              </div>
              <h1 className="text-2xl font-bold text-white font-display">
                Villa Competition
              </h1>
              <p className="text-gray-400 mt-1">Age Verification Required</p>
            </div>

            {/* Main Card */}
            <div className="bg-dark-50 border border-dark-100 rounded-2xl p-6 md:p-8">
              {/* Age Warning */}
              <div className="flex items-start gap-4 mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-400 mb-1">
                    18+ Adults Only
                  </h3>
                  <p className="text-sm text-gray-400">
                    This website contains content related to prize competitions. 
                    You must be 18 years or older to enter.
                  </p>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4 mb-8">
                {/* Age Checkbox */}
                <label 
                  className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    localAgeChecked 
                      ? 'border-gold bg-gold/10' 
                      : 'border-dark-100 hover:border-dark-200'
                  }`}
                >
                  <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                    localAgeChecked ? 'bg-gold' : 'border-2 border-gray-500'
                  }`}>
                    {localAgeChecked && <Check className="w-4 h-4 text-dark" />}
                  </div>
                  <input
                    type="checkbox"
                    checked={localAgeChecked}
                    onChange={(e) => setLocalAgeChecked(e.target.checked)}
                    className="hidden"
                  />
                  <div>
                    <p className="font-medium text-white">
                      I am 18 years or older
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      I confirm that I meet the minimum age requirement
                    </p>
                  </div>
                </label>

                {/* Terms Checkbox */}
                <label 
                  className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    localTermsChecked 
                      ? 'border-gold bg-gold/10' 
                      : 'border-dark-100 hover:border-dark-200'
                  }`}
                >
                  <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                    localTermsChecked ? 'bg-gold' : 'border-2 border-gray-500'
                  }`}>
                    {localTermsChecked && <Check className="w-4 h-4 text-dark" />}
                  </div>
                  <input
                    type="checkbox"
                    checked={localTermsChecked}
                    onChange={(e) => setLocalTermsChecked(e.target.checked)}
                    className="hidden"
                  />
                  <div>
                    <p className="font-medium text-white">
                      I agree to the Terms & Conditions
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      I have read and agree to the{' '}
                      <a href="#terms" className="text-gold hover:underline">
                        Terms & Conditions
                      </a>{' '}
                      and{' '}
                      <a href="#privacy" className="text-gold hover:underline">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </label>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleContinue}
                  disabled={!canContinue}
                  className={`w-full py-4 rounded-xl font-semibold text-dark transition-all ${
                    canContinue
                      ? 'gold-gradient hover:shadow-gold-lg transform hover:-translate-y-0.5'
                      : 'bg-gray-600 cursor-not-allowed'
                  }`}
                >
                  Enter Website
                </button>

                <button
                  onClick={leaveSite}
                  className="w-full py-4 rounded-xl font-semibold text-gray-400 hover:text-white hover:bg-dark-100 transition-all flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Leave Site
                </button>
              </div>

              {/* Security Note */}
              <div className="mt-6 pt-6 border-t border-dark-100">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield className="w-4 h-4" />
                  <span>GDPR Compliant • Secure • Verified</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <p className="text-center text-xs text-gray-500 mt-6">
              Villa Competition © 2025. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AgeGate;
