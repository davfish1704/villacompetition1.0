import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Ticket, ChevronRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { navigation } from '@/data/content';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { ticketsSold, cartTickets, openSkillModal } = useApp();

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass border-b border-dark-100'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <img 
                src="/favicon.png" 
                alt="Luck Dip Luxury Logo" 
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="hidden sm:block font-display font-semibold text-white text-lg">
                Luck Dip Luxury
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.main.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Mini Ticket Counter (Desktop) */}
              <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-dark-50 border border-dark-100">
                <Ticket className="w-4 h-4 text-gold" />
                <span className="text-sm text-gray-400">
                  <span className="text-white font-semibold">
                    {ticketsSold.toLocaleString()}
                  </span>{' '}
                  / 150,000
                </span>
              </div>

              {/* CTA Button */}
              <a
                href="https://buy.stripe.com/cNi7sL9xtfGR5X532Y2Fa05"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 gold-gradient rounded-full font-semibold text-dark text-sm hover:shadow-gold transition-shadow"
              >
                Enter Now
                <ChevronRight className="w-4 h-4" />
              </a>

              {/* Cart Indicator */}
              {cartTickets > 0 && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/20 border border-gold/30">
                  <Ticket className="w-4 h-4 text-gold" />
                  <span className="text-sm font-semibold text-gold">
                    {cartTickets}
                  </span>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-dark-50 border border-dark-100"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-dark/90 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-dark border-l border-dark-100"
            >
              <div className="pt-24 pb-8 px-6">
                {/* Ticket Counter */}
                <div className="mb-8 p-4 rounded-xl bg-dark-50 border border-dark-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Ticket className="w-5 h-5 text-gold" />
                    <span className="text-sm text-gray-400">Tickets Sold</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {ticketsSold.toLocaleString()}{' '}
                    <span className="text-gray-500 text-lg">/ 150,000</span>
                  </div>
                  <div className="mt-2 h-2 bg-dark-100 rounded-full overflow-hidden">
                    <div
                      className="h-full gold-gradient rounded-full transition-all"
                      style={{ width: `${(ticketsSold / 150000) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2">
                  {navigation.main.map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.href)}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-dark-50 border border-dark-100 hover:border-gold/50 transition-colors"
                    >
                      <span className="font-medium text-white">{item.label}</span>
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    </motion.button>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://buy.stripe.com/cNi7sL9xtfGR5X532Y2Fa05"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full mt-6 py-4 gold-gradient rounded-xl font-semibold text-dark block text-center"
                >
                  Enter Now
                </a>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-dark-100">
                  <div className="flex flex-wrap gap-3">
                    {navigation.legal.slice(0, 3).map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-xs text-gray-500 hover:text-gold transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-gray-600">
                    18+ Only. T&Cs Apply. This is a competition, not a lottery.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
