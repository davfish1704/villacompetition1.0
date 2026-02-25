import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Users, TrendingUp, Info } from 'lucide-react';
import { companyInfo } from '@/data/content';
import { useApp } from '@/context/AppContext';
import { calculateOdds } from '@/utils/validation';

const OddsCalculator = () => {
  const { ticketsSold, currentPrizeCount } = useApp();
  const [ticketInput, setTicketInput] = useState(5);

  const odds = useMemo(() => {
    return calculateOdds(ticketInput, companyInfo.maxTickets, currentPrizeCount);
  }, [ticketInput, currentPrizeCount]);

  const cost = ticketInput * companyInfo.ticketPrice;

  return (
    <section className="py-20 md:py-32 bg-dark-50">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <Calculator className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Odds Calculator</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Calculate Your Chances
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how your odds improve with each ticket you purchase
            </p>
          </motion.div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-dark border border-dark-100"
          >
            {/* Ticket Slider */}
            <div className="mb-8">
              <label className="block text-sm text-gray-400 mb-4">
                Number of Tickets
              </label>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setTicketInput(Math.max(1, ticketInput - 1))}
                  className="w-12 h-12 rounded-full bg-dark-100 flex items-center justify-center text-white hover:bg-dark-200 transition-colors"
                >
                  -
                </button>
                <div className="flex-1">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={ticketInput}
                    onChange={(e) => setTicketInput(Number(e.target.value))}
                    className="w-full h-2 bg-dark-100 rounded-full appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>1</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>
                <button
                  onClick={() => setTicketInput(Math.min(100, ticketInput + 1))}
                  className="w-12 h-12 rounded-full bg-dark-100 flex items-center justify-center text-white hover:bg-dark-200 transition-colors"
                >
                  +
                </button>
              </div>
              <div className="text-center mt-4">
                <span className="text-4xl font-bold text-white">{ticketInput}</span>
                <span className="text-gray-400 ml-2">tickets</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Odds */}
              <div className="p-6 rounded-xl bg-dark-50 border border-dark-100 text-center">
                <Users className="w-6 h-6 text-gold mx-auto mb-3" />
                <p className="text-sm text-gray-400 mb-1">Your Odds</p>
                <p className="text-2xl font-bold text-white">{odds.oddsRatio}</p>
                <p className="text-xs text-gray-500 mt-1">per ticket</p>
              </div>

              {/* Win Probability */}
              <div className="p-6 rounded-xl bg-dark-50 border border-dark-100 text-center">
                <TrendingUp className="w-6 h-6 text-gold mx-auto mb-3" />
                <p className="text-sm text-gray-400 mb-1">Win Probability</p>
                <p className="text-2xl font-bold text-gold">{odds.formatted}</p>
                <p className="text-xs text-gray-500 mt-1">with {ticketInput} tickets</p>
              </div>

              {/* Total Cost */}
              <div className="p-6 rounded-xl bg-dark-50 border border-dark-100 text-center">
                <Calculator className="w-6 h-6 text-gold mx-auto mb-3" />
                <p className="text-sm text-gray-400 mb-1">Total Cost</p>
                <p className="text-2xl font-bold text-white">${cost.toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">${companyInfo.ticketPrice} per ticket</p>
              </div>
            </div>

            {/* Info Note */}
            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-dark-50 border border-dark-100">
              <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-400">
                Odds are calculated based on {companyInfo.maxTickets.toLocaleString()} total tickets 
                and {currentPrizeCount} prizes. As more tickets are sold and prizes unlock, 
                your odds may improve. These are approximate odds and actual results may vary.
              </p>
            </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <h3 className="text-lg font-semibold text-white mb-4 text-center">
              Quick Reference
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-dark-100">
                    <th className="text-left py-3 px-4 text-sm text-gray-400 font-medium">Tickets</th>
                    <th className="text-center py-3 px-4 text-sm text-gray-400 font-medium">Cost</th>
                    <th className="text-center py-3 px-4 text-sm text-gray-400 font-medium">Odds</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 5, 10, 25, 50, 100].map((tickets) => {
                    const ticketOdds = calculateOdds(tickets, companyInfo.maxTickets, currentPrizeCount);
                    return (
                      <tr
                        key={tickets}
                        className={`border-b border-dark-100 ${
                          ticketInput === tickets ? 'bg-gold/10' : 'hover:bg-dark-50'
                        }`}
                      >
                        <td className="py-3 px-4 text-white">{tickets}</td>
                        <td className="py-3 px-4 text-center text-gray-400">
                          ${(tickets * companyInfo.ticketPrice).toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-center text-gold">
                          {ticketOdds.oddsRatio}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OddsCalculator;
