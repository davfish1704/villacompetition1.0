import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Brain, AlertCircle, Check, RotateCcw, Lock, Sparkles } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { skillQuestions, companyInfo } from '@/data/content';
import { validateSkillAnswer, getToleranceRange, formatNumber, parseNumberInput } from '@/utils/validation';
import { createCheckoutSession } from '@/utils/token';

const SkillQuestionModal = () => {
  const { showSkillModal, closeSkillModal, addToCart } = useApp();
  const [step, setStep] = useState('tickets'); // 'tickets', 'question', 'success', 'error'
  const [ticketCount, setTicketCount] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [maxAttempts] = useState(3);
  const [validationResult, setValidationResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkoutSession, setCheckoutSession] = useState(null);

  // Reset state when modal opens
  useEffect(() => {
    if (showSkillModal) {
      setStep('tickets');
      setTicketCount(1);
      setUserAnswer('');
      setAttempts(0);
      setValidationResult(null);
      setIsSubmitting(false);
      setCheckoutSession(null);
      
      // Select random question
      const randomIndex = Math.floor(Math.random() * skillQuestions.length);
      setCurrentQuestion(skillQuestions[randomIndex]);
    }
  }, [showSkillModal]);

  // Handle ticket selection
  const handleTicketChange = (delta) => {
    setTicketCount(prev => {
      const newCount = prev + delta;
      return Math.min(Math.max(1, newCount), 100);
    });
  };

  // Proceed to question
  const proceedToQuestion = () => {
    setStep('question');
  };

  // Handle answer submission
  const handleSubmitAnswer = async () => {
    if (!userAnswer || isSubmitting) return;

    setIsSubmitting(true);
    const parsedAnswer = parseNumberInput(userAnswer);
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    const isCorrect = validateSkillAnswer(
      parsedAnswer,
      currentQuestion.correctAnswer,
      currentQuestion.tolerance
    );

    if (isCorrect) {
      // Generate checkout token
      const session = createCheckoutSession(ticketCount);
      setCheckoutSession(session);
      setValidationResult({ isCorrect: true });
      setStep('success');
      addToCart(ticketCount);
    } else {
      setValidationResult({ 
        isCorrect: false, 
        message: newAttempts >= maxAttempts 
          ? 'Maximum attempts reached. Please try again later.' 
          : `Incorrect. You have ${maxAttempts - newAttempts} attempt${maxAttempts - newAttempts !== 1 ? 's' : ''} remaining.` 
      });
      
      if (newAttempts >= maxAttempts) {
        setStep('error');
      }
    }

    setIsSubmitting(false);
  };

  // Handle checkout redirect
  const handleCheckout = () => {
    // [PLACEHOLDER: Redirect to Stripe checkout with token]
    console.log('Redirecting to checkout with session:', checkoutSession);
    alert('[PLACEHOLDER] Redirecting to Stripe checkout...\n\nToken: ' + checkoutSession?.token);
    closeSkillModal();
  };

  // Close and reset
  const handleClose = () => {
    closeSkillModal();
  };

  // Get tolerance range for display
  const toleranceRange = currentQuestion ? getToleranceRange(
    currentQuestion.correctAnswer,
    currentQuestion.tolerance
  ) : null;

  if (!showSkillModal || !currentQuestion) return null;

  return (
    <AnimatePresence>
      {showSkillModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/95 backdrop-blur-xl p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-lg"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                  {step === 'tickets' && <Sparkles className="w-6 h-6 text-dark" />}
                  {step === 'question' && <Brain className="w-6 h-6 text-dark" />}
                  {(step === 'success' || step === 'error') && <Lock className="w-6 h-6 text-dark" />}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {step === 'tickets' && 'Select Tickets'}
                    {step === 'question' && 'Skill Question'}
                    {step === 'success' && 'Access Granted'}
                    {step === 'error' && 'Access Denied'}
                  </h2>
                  <p className="text-sm text-gray-400">
                    {step === 'tickets' && 'Step 1 of 2'}
                    {step === 'question' && `Step 2 of 2 • Attempt ${attempts + 1}/${maxAttempts}`}
                    {step === 'success' && 'Ready to checkout'}
                    {step === 'error' && 'Please try again later'}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-full bg-dark-50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="bg-dark-50 border border-dark-100 rounded-2xl p-6">
              {/* Step 1: Ticket Selection */}
              {step === 'tickets' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="text-center mb-8">
                    <p className="text-gray-400 mb-2">How many tickets?</p>
                    <div className="flex items-center justify-center gap-6">
                      <button
                        onClick={() => handleTicketChange(-1)}
                        disabled={ticketCount <= 1}
                        className="w-14 h-14 rounded-full bg-dark border border-dark-100 flex items-center justify-center text-white hover:border-gold transition-colors disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="text-5xl font-bold text-white w-24 text-center">
                        {ticketCount}
                      </span>
                      <button
                        onClick={() => handleTicketChange(1)}
                        disabled={ticketCount >= 100}
                        className="w-14 h-14 rounded-full bg-dark border border-dark-100 flex items-center justify-center text-white hover:border-gold transition-colors disabled:opacity-50"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-gold mt-4 text-xl font-semibold">
                      ${(ticketCount * companyInfo.ticketPrice).toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={proceedToQuestion}
                    className="w-full py-4 gold-gradient rounded-xl font-semibold text-dark hover:shadow-gold transition-shadow"
                  >
                    Continue
                  </button>
                </motion.div>
              )}

              {/* Step 2: Skill Question */}
              {step === 'question' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="mb-6">
                    <p className="text-white text-lg mb-4">
                      {currentQuestion.question}
                    </p>
                    <p className="text-sm text-gray-400 mb-4">
                      Hint: {currentQuestion.hint}
                    </p>
                    <div className="p-3 rounded-lg bg-gold/10 border border-gold/30 mb-4">
                      <p className="text-sm text-gold">
                        Answer within {toleranceRange?.percentage} tolerance
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm text-gray-400 mb-2">
                      Your Answer ({currentQuestion.unit})
                    </label>
                    <input
                      type="text"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="Enter your estimate..."
                      className="w-full px-4 py-4 bg-dark border border-dark-100 rounded-xl text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
                      onKeyDown={(e) => e.key === 'Enter' && handleSubmitAnswer()}
                    />
                  </div>

                  {validationResult && !validationResult.isCorrect && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-400">{validationResult.message}</p>
                    </motion.div>
                  )}

                  <button
                    onClick={handleSubmitAnswer}
                    disabled={!userAnswer || isSubmitting}
                    className="w-full py-4 gold-gradient rounded-xl font-semibold text-dark hover:shadow-gold transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Checking...' : 'Submit Answer'}
                  </button>
                </motion.div>
              )}

              {/* Success State */}
              {step === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Correct Answer!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    You've successfully answered the skill question. 
                    Your checkout session is ready.
                  </p>

                  <div className="p-4 rounded-xl bg-dark border border-dark-100 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Tickets</span>
                      <span className="text-white font-semibold">{ticketCount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Total</span>
                      <span className="text-gold font-semibold">
                        ${(ticketCount * companyInfo.ticketPrice).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full py-4 gold-gradient rounded-xl font-semibold text-dark hover:shadow-gold transition-shadow"
                  >
                    Proceed to Checkout
                  </button>
                </motion.div>
              )}

              {/* Error State */}
              {step === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
                    <X className="w-10 h-10 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Maximum Attempts Reached
                  </h3>
                  <p className="text-gray-400 mb-6">
                    You've used all {maxAttempts} attempts. You can try again 
                    with a new session after 24 hours.
                  </p>

                  <button
                    onClick={handleClose}
                    className="w-full py-4 border border-dark-100 rounded-xl font-semibold text-white hover:bg-dark-100 transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </div>

            {/* Footer Info */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                This is a skill-based question. No purchase necessary. 
                See our <a href="#terms" className="text-gold hover:underline">Terms</a> for free entry method.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SkillQuestionModal;
