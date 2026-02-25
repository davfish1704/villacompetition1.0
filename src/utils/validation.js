// Skill Question Validation Logic

/**
 * Validates a user's answer against the correct answer with a tolerance range
 * @param {number} userAnswer - The user's submitted answer
 * @param {number} correctAnswer - The correct answer
 * @param {number} tolerance - Tolerance as a decimal (0.1 = 10%)
 * @returns {boolean} - Whether the answer is within tolerance
 */
export const validateSkillAnswer = (userAnswer, correctAnswer, tolerance = 0.1) => {
  // Convert to numbers to ensure proper comparison
  const userNum = Number(userAnswer);
  const correctNum = Number(correctAnswer);
  
  // Handle edge cases
  if (isNaN(userNum) || isNaN(correctNum)) {
    return false;
  }
  
  // Calculate tolerance bounds
  const lowerBound = correctNum * (1 - tolerance);
  const upperBound = correctNum * (1 + tolerance);
  
  // Check if answer is within bounds (inclusive)
  return userNum >= lowerBound && userNum <= upperBound;
};

/**
 * Gets the tolerance range for display to users
 * @param {number} correctAnswer - The correct answer
 * @param {number} tolerance - Tolerance as a decimal
 * @returns {object} - Object with lower, upper, and formatted strings
 */
export const getToleranceRange = (correctAnswer, tolerance = 0.1) => {
  const lower = Math.round(correctAnswer * (1 - tolerance));
  const upper = Math.round(correctAnswer * (1 + tolerance));
  
  return {
    lower,
    upper,
    formatted: `${lower.toLocaleString()} - ${upper.toLocaleString()}`,
    percentage: `${(tolerance * 100).toFixed(0)}%`,
  };
};

/**
 * Formats a large number for display
 * @param {number} num - The number to format
 * @returns {string} - Formatted number with commas
 */
export const formatNumber = (num) => {
  return Number(num).toLocaleString('en-US');
};

/**
 * Parses a user's input, removing commas and converting to number
 * @param {string} input - User's raw input
 * @returns {number} - Parsed number or NaN
 */
export const parseNumberInput = (input) => {
  if (typeof input !== 'string') return Number(input);
  return Number(input.replace(/,/g, '').trim());
};

/**
 * Validates ticket quantity
 * @param {number} quantity - Number of tickets
 * @param {number} maxTickets - Maximum available tickets
 * @param {number} minTickets - Minimum tickets per purchase (default: 1)
 * @returns {object} - Validation result with isValid and error message
 */
export const validateTicketQuantity = (quantity, maxTickets, minTickets = 1) => {
  const num = Number(quantity);
  
  if (isNaN(num) || num < minTickets) {
    return {
      isValid: false,
      error: `Minimum purchase is ${minTickets} ticket${minTickets > 1 ? 's' : ''}`,
    };
  }
  
  if (num > maxTickets) {
    return {
      isValid: false,
      error: `Only ${maxTickets.toLocaleString()} tickets available`,
    };
  }
  
  if (!Number.isInteger(num)) {
    return {
      isValid: false,
      error: 'Please enter a whole number',
    };
  }
  
  return { isValid: true, error: null };
};

/**
 * Calculates odds of winning based on tickets purchased
 * @param {number} ticketsPurchased - Number of tickets user bought
 * @param {number} totalTickets - Total tickets in draw
 * @param {number} totalPrizes - Number of prizes available
 * @returns {object} - Odds information
 */
export const calculateOdds = (ticketsPurchased, totalTickets, totalPrizes) => {
  if (ticketsPurchased <= 0 || totalTickets <= 0 || totalPrizes <= 0) {
    return {
      oddsRatio: 'N/A',
      winProbability: 0,
      formatted: 'N/A',
    };
  }
  
  // Probability of NOT winning with one ticket
  const loseProbabilityOneTicket = (totalTickets - totalPrizes) / totalTickets;
  
  // Probability of NOT winning with N tickets
  const loseProbability = Math.pow(loseProbabilityOneTicket, ticketsPurchased);
  
  // Probability of winning at least one prize
  const winProbability = 1 - loseProbability;
  
  // Calculate odds ratio (e.g., 1 in X)
  const oddsRatio = Math.round(1 / winProbability);
  
  return {
    oddsRatio: `1 in ${oddsRatio.toLocaleString()}`,
    winProbability: winProbability * 100,
    formatted: `${winProbability < 0.01 ? '<0.01' : winProbability.toFixed(2)}%`,
  };
};

/**
 * Checks if a string is a valid email address
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Checks if user meets age requirement
 * @param {Date|string} birthDate - User's birth date
 * @param {number} minAge - Minimum age required (default: 18)
 * @returns {boolean} - Whether user meets age requirement
 */
export const meetsAgeRequirement = (birthDate, minAge = 18) => {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age >= minAge;
};

/**
 * Validates a promotional code format
 * @param {string} code - Promo code to validate
 * @returns {boolean} - Whether code format is valid
 */
export const isValidPromoCode = (code) => {
  if (!code || typeof code !== 'string') return false;
  // Promo codes are 6-12 alphanumeric characters
  const promoRegex = /^[A-Z0-9]{6,12}$/i;
  return promoRegex.test(code.trim());
};
