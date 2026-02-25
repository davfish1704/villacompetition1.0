import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard, Lock, Mail, MapPin, Phone } from 'lucide-react';
import { navigation, companyInfo } from '@/data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-dark-100">
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                <span className="text-xl font-bold text-dark">LD</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-white text-lg">
                  Luck Dip Luxury
                </h3>
                <p className="text-xs text-gray-500">Items Limited</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Win life-changing luxury prizes through skill-based competitions. 
              Established {companyInfo.established} with ${(companyInfo.totalPrizesAwarded / 1000).toFixed(0)}k+ in prizes awarded.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-gold" />
                <span>support@luckydipluxury.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-gold" />
                <span>[PLACEHOLDER: Company Address]</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-gold" />
                <span>[PLACEHOLDER: Support Phone]</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#whitepaper"
                  className="text-sm text-gray-400 hover:text-gold transition-colors"
                >
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>

          {/* Security & Payment */}
          <div>
            <h4 className="font-semibold text-white mb-6">Secure & Trusted</h4>
            
            {/* Security Badges */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-dark-50 border border-dark-100">
                <Shield className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-sm font-medium text-white">SSL Secured</p>
                  <p className="text-xs text-gray-500">256-bit encryption</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-dark-50 border border-dark-100">
                <Lock className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-sm font-medium text-white">GDPR Compliant</p>
                  <p className="text-xs text-gray-500">Your data is protected</p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <p className="text-sm text-gray-400 mb-3">Payment Methods</p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-8 rounded bg-dark-100 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-gray-400" />
              </div>
              <div className="px-3 py-1.5 rounded bg-dark-100">
                <span className="text-xs font-medium text-gray-400">Stripe</span>
              </div>
              <div className="px-3 py-1.5 rounded bg-dark-100">
                <span className="text-xs font-medium text-gray-400">Visa</span>
              </div>
              <div className="px-3 py-1.5 rounded bg-dark-100">
                <span className="text-xs font-medium text-gray-400">MC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-100">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>

            {/* Age Warning */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
              <span className="text-sm font-semibold text-red-400">18+</span>
              <span className="text-xs text-gray-400">Adults Only</span>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-600 text-center md:text-right max-w-md">
              This is a skill-based competition. No purchase necessary. 
              See Terms & Conditions for free entry method.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
