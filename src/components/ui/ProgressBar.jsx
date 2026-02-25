import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ 
  progress, 
  showMilestone = false, 
  milestoneAt = 80, 
  milestoneLabel = '',
  height = 'h-3',
  animated = true,
  showPercentage = false,
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  const milestonePosition = Math.min(Math.max(milestoneAt, 0), 100);

  return (
    <div className="w-full">
      {/* Progress Bar Container */}
      <div className={`relative w-full ${height} bg-dark-100 rounded-full overflow-hidden`}>
        {/* Fill */}
        <motion.div
          initial={animated ? { width: 0 } : { width: `${clampedProgress}%` }}
          animate={{ width: `${clampedProgress}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute inset-y-0 left-0 gold-gradient rounded-full"
        />

        {/* Milestone Marker */}
        {showMilestone && (
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white/50"
            style={{ left: `${milestonePosition}%` }}
          >
            {/* Milestone Indicator */}
            <div className="absolute -top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-gold" />
          </div>
        )}

        {/* Shimmer Effect */}
        {animated && (
          <div className="absolute inset-0 shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        )}
      </div>

      {/* Labels */}
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm text-gray-400">
          {clampedProgress.toFixed(1)}% Sold
        </span>
        
        {showMilestone && milestoneLabel && (
          <span className="text-sm text-gold">
            {milestoneLabel}
          </span>
        )}
        
        {showPercentage && (
          <span className="text-sm text-gray-500">
            {Math.round(100 - clampedProgress)}% Remaining
          </span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
