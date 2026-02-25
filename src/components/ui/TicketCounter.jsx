import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, TrendingUp, Users } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { companyInfo, prizeStructure } from '@/data/content';
import ProgressBar from './ProgressBar';

const TicketCounter = ({ variant = 'full', className = '' }) => {
  const { ticketsSold, currentPrizeCount, extendedPrizesUnlocked } = useApp();

  const progress = (ticketsSold / companyInfo.maxTickets) * 100;
  const milestoneProgress = (prizeStructure.threshold / companyInfo.maxTickets) * 100;
  const remaining = companyInfo.maxTickets - ticketsSold;
  const odds = Math.round(companyInfo.maxTickets / currentPrizeCount);

  if (variant === 'mini') {
    return (
      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-50 border border-dark-100 ${className}`}>
        <Ticket className="w-4 h-4 text-gold" />
        <span className="text-sm">
          <span className="text-white font-semibold">
            {ticketsSold.toLocaleString()}
          </span>
          <span className="text-gray-500"> / {companyInfo.maxTickets.toLocaleString()}</span>
        </span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`p-4 rounded-xl bg-dark-50 border border-dark-100 ${className}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-gold" />
            <span className="font-medium text-white">Tickets Sold</span>
          </div>
          <span className="text-sm text-gray-400">
            {remaining.toLocaleString()} remaining
          </span>
        </div>
        <ProgressBar progress={progress} height="h-2" />
      </div>
    );
  }

  // Full variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-6 rounded-2xl bg-dark-50 border border-dark-100 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
            <Ticket className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Ticket Sales</h3>
            <p className="text-sm text-gray-400">Live Updates</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm text-green-400">Live</span>
        </div>
      </div>

      {/* Counter */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl md:text-5xl font-bold text-white">
            {ticketsSold.toLocaleString()}
          </span>
          <span className="text-xl text-gray-500">
            / {companyInfo.maxTickets.toLocaleString()}
          </span>
        </div>
        <p className="text-sm text-gray-400 mt-1">
          {remaining.toLocaleString()} tickets remaining
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <ProgressBar
          progress={progress}
          showMilestone={!extendedPrizesUnlocked}
          milestoneAt={milestoneProgress}
          milestoneLabel={extendedPrizesUnlocked ? 'Unlocked!' : `${prizeStructure.threshold.toLocaleString()} to unlock 3 more prizes`}
          height="h-4"
        />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Odds */}
        <div className="p-4 rounded-xl bg-dark border border-dark-100">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-gold" />
            <span className="text-sm text-gray-400">Your Odds</span>
          </div>
          <p className="text-xl font-bold text-white">
            1 in {odds.toLocaleString()}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Per ticket purchased
          </p>
        </div>

        {/* Prize Count */}
        <div className="p-4 rounded-xl bg-dark border border-dark-100">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-gold" />
            <span className="text-sm text-gray-400">Prizes</span>
          </div>
          <p className="text-xl font-bold text-white">
            {currentPrizeCount} Prizes
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {extendedPrizesUnlocked 
              ? 'All prizes unlocked!' 
              : `${prizeStructure.maxPrizes - currentPrizeCount} more at ${prizeStructure.threshold.toLocaleString()}`}
          </p>
        </div>
      </div>

      {/* FOMO Message */}
      {progress > 75 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 p-3 rounded-lg bg-gold/10 border border-gold/30"
        >
          <p className="text-sm text-gold text-center">
            Almost sold out! Don't miss your chance to win!
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TicketCounter;
