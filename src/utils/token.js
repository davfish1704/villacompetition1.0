// Token Generation and Management for Checkout Security

const TOKEN_KEY = 'ldl_checkout_token';
const TOKEN_TIMESTAMP_KEY = 'ldl_token_timestamp';
const TOKEN_EXPIRY_MINUTES = 15;

/**
 * Generates a unique UUID token for checkout validation
 * @returns {string} - UUID token
 */
export const generateToken = () => {
  // Use crypto.randomUUID if available (modern browsers)
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  
  // Fallback UUID generation for older browsers
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

/**
 * Stores a token in sessionStorage with timestamp
 * @param {string} token - The token to store
 */
export const storeToken = (token) => {
  try {
    sessionStorage.setItem(TOKEN_KEY, token);
    sessionStorage.setItem(TOKEN_TIMESTAMP_KEY, Date.now().toString());
    return true;
  } catch (e) {
    console.error('Failed to store token:', e);
    return false;
  }
};

/**
 * Retrieves the stored token from sessionStorage
 * @returns {string|null} - The stored token or null
 */
export const getStoredToken = () => {
  try {
    return sessionStorage.getItem(TOKEN_KEY);
  } catch (e) {
    console.error('Failed to retrieve token:', e);
    return null;
  }
};

/**
 * Checks if the stored token is still valid (not expired)
 * @param {number} expiryMinutes - Token expiry time in minutes
 * @returns {boolean} - Whether token is valid
 */
export const isTokenValid = (expiryMinutes = TOKEN_EXPIRY_MINUTES) => {
  try {
    const token = sessionStorage.getItem(TOKEN_KEY);
    const timestamp = sessionStorage.getItem(TOKEN_TIMESTAMP_KEY);
    
    if (!token || !timestamp) {
      return false;
    }
    
    const now = Date.now();
    const tokenTime = parseInt(timestamp, 10);
    const expiryMs = expiryMinutes * 60 * 1000;
    
    return (now - tokenTime) < expiryMs;
  } catch (e) {
    console.error('Failed to validate token:', e);
    return false;
  }
};

/**
 * Clears the stored token from sessionStorage
 */
export const clearToken = () => {
  try {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(TOKEN_TIMESTAMP_KEY);
    return true;
  } catch (e) {
    console.error('Failed to clear token:', e);
    return false;
  }
};

/**
 * Gets token age in minutes
 * @returns {number|null} - Token age in minutes or null if no token
 */
export const getTokenAge = () => {
  try {
    const timestamp = sessionStorage.getItem(TOKEN_TIMESTAMP_KEY);
    if (!timestamp) return null;
    
    const now = Date.now();
    const tokenTime = parseInt(timestamp, 10);
    return Math.floor((now - tokenTime) / (60 * 1000));
  } catch (e) {
    console.error('Failed to get token age:', e);
    return null;
  }
};

/**
 * Gets remaining token validity time in minutes
 * @param {number} expiryMinutes - Token expiry time in minutes
 * @returns {number|null} - Remaining minutes or null if no token
 */
export const getTokenRemainingTime = (expiryMinutes = TOKEN_EXPIRY_MINUTES) => {
  try {
    const timestamp = sessionStorage.getItem(TOKEN_TIMESTAMP_KEY);
    if (!timestamp) return null;
    
    const now = Date.now();
    const tokenTime = parseInt(timestamp, 10);
    const expiryMs = expiryMinutes * 60 * 1000;
    const remainingMs = expiryMs - (now - tokenTime);
    
    return Math.max(0, Math.ceil(remainingMs / (60 * 1000)));
  } catch (e) {
    console.error('Failed to get token remaining time:', e);
    return null;
  }
};

/**
 * Creates a complete checkout session with token
 * @param {number} ticketCount - Number of tickets being purchased
 * @param {string} userId - Optional user ID
 * @returns {object} - Checkout session data
 */
export const createCheckoutSession = (ticketCount, userId = null) => {
  const token = generateToken();
  storeToken(token);
  
  return {
    token,
    ticketCount,
    userId,
    timestamp: Date.now(),
    expiresAt: Date.now() + (TOKEN_EXPIRY_MINUTES * 60 * 1000),
  };
};

/**
 * Verifies a token against the stored value
 * @param {string} token - Token to verify
 * @returns {boolean} - Whether token matches and is valid
 */
export const verifyToken = (token) => {
  const storedToken = getStoredToken();
  return storedToken === token && isTokenValid();
};

/**
 * Formats token data for Stripe metadata
 * @param {object} session - Checkout session object
 * @returns {object} - Formatted metadata for Stripe
 */
export const formatStripeMetadata = (session) => {
  return {
    token: session.token,
    ticket_count: session.ticketCount.toString(),
    user_id: session.userId || 'guest',
    timestamp: session.timestamp.toString(),
  };
};
