import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { companyInfo, prizeStructure } from '@/data/content';

// Create context
const AppContext = createContext(null);

// Custom hook for using the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// Age verification storage key
const AGE_VERIFIED_KEY = 'ldl_age_verified';
const TERMS_ACCEPTED_KEY = 'ldl_terms_accepted';
const COOKIE_CONSENT_KEY = 'ldl_cookie_consent';

export const AppProvider = ({ children }) => {
  // Age gate state
  const [ageVerified, setAgeVerified] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showAgeGate, setShowAgeGate] = useState(false);
  
  // Cookie consent state
  const [cookieConsent, setCookieConsent] = useState(null);
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  
  // Ticket counter state - Static until launch
  const [ticketsSold, setTicketsSold] = useState(0); // Will start from 0 at launch
  const [isLive, setIsLive] = useState(false); // Live counting disabled until launch
  
  // Cart state
  const [cartTickets, setCartTickets] = useState(0);
  const [showSkillModal, setShowSkillModal] = useState(false);
  
  // Current prize count (scales at 120k)
  const [currentPrizeCount, setCurrentPrizeCount] = useState(prizeStructure.current.count);
  
  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  // Check localStorage on mount
  useEffect(() => {
    const checkStorage = () => {
      try {
        const ageCheck = localStorage.getItem(AGE_VERIFIED_KEY) === 'true';
        const termsCheck = localStorage.getItem(TERMS_ACCEPTED_KEY) === 'true';
        const cookieCheck = localStorage.getItem(COOKIE_CONSENT_KEY);
        
        setAgeVerified(ageCheck);
        setTermsAccepted(termsCheck);
        setCookieConsent(cookieCheck);
        
        // Show age gate if not verified
        if (!ageCheck || !termsCheck) {
          setShowAgeGate(true);
        }
        
        // Show cookie consent if not set
        if (!cookieCheck) {
          setShowCookieConsent(true);
        }
      } catch (e) {
        console.error('Error reading localStorage:', e);
        setShowAgeGate(true);
        setShowCookieConsent(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkStorage();
  }, []);

  // Live ticket updates - DISABLED until official launch
  // Uncomment below to enable live counting when competition goes live
  /*
  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(() => {
      setTicketsSold(prev => {
        // Random increment between 1-5 tickets every 30 seconds
        const increment = Math.floor(Math.random() * 5) + 1;
        const newTotal = Math.min(prev + increment, companyInfo.maxTickets);
        
        // Update prize count if threshold reached
        if (newTotal >= prizeStructure.threshold && currentPrizeCount < prizeStructure.maxPrizes) {
          setCurrentPrizeCount(prizeStructure.maxPrizes);
        }
        
        return newTotal;
      });
    }, 30000);
    
    return () => clearInterval(interval);
  }, [isLive, currentPrizeCount]);
  */

  // Age verification handlers
  const verifyAge = useCallback(() => {
    try {
      localStorage.setItem(AGE_VERIFIED_KEY, 'true');
      setAgeVerified(true);
      if (termsAccepted) {
        setShowAgeGate(false);
      }
    } catch (e) {
      console.error('Error saving age verification:', e);
    }
  }, [termsAccepted]);

  const acceptTerms = useCallback(() => {
    try {
      localStorage.setItem(TERMS_ACCEPTED_KEY, 'true');
      setTermsAccepted(true);
      if (ageVerified) {
        setShowAgeGate(false);
      }
    } catch (e) {
      console.error('Error saving terms acceptance:', e);
    }
  }, [ageVerified]);

  const leaveSite = useCallback(() => {
    window.location.href = 'https://www.google.com';
  }, []);

  // Cookie consent handlers
  const acceptCookies = useCallback(() => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
      setCookieConsent('accepted');
      setShowCookieConsent(false);
    } catch (e) {
      console.error('Error saving cookie consent:', e);
    }
  }, []);

  const declineCookies = useCallback(() => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
      setCookieConsent('declined');
      setShowCookieConsent(false);
    } catch (e) {
      console.error('Error saving cookie consent:', e);
    }
  }, []);

  // Cart handlers
  const addToCart = useCallback((count) => {
    setCartTickets(prev => prev + count);
  }, []);

  const removeFromCart = useCallback((count) => {
    setCartTickets(prev => Math.max(0, prev - count));
  }, []);

  const clearCart = useCallback(() => {
    setCartTickets(0);
  }, []);

  // Skill modal handlers
  const openSkillModal = useCallback(() => {
    setShowSkillModal(true);
  }, []);

  const closeSkillModal = useCallback(() => {
    setShowSkillModal(false);
  }, []);

  // Calculate progress percentage
  const ticketProgress = (ticketsSold / companyInfo.maxTickets) * 100;
  
  // Check if extended prizes are unlocked
  const extendedPrizesUnlocked = ticketsSold >= prizeStructure.threshold;

  // Context value
  const value = {
    // Age verification
    ageVerified,
    termsAccepted,
    showAgeGate,
    verifyAge,
    acceptTerms,
    leaveSite,
    
    // Cookie consent
    cookieConsent,
    showCookieConsent,
    acceptCookies,
    declineCookies,
    
    // Tickets
    ticketsSold,
    ticketProgress,
    isLive,
    setIsLive,
    
    // Prizes
    currentPrizeCount,
    extendedPrizesUnlocked,
    
    // Cart
    cartTickets,
    addToCart,
    removeFromCart,
    clearCart,
    
    // Skill modal
    showSkillModal,
    openSkillModal,
    closeSkillModal,
    
    // Loading
    isLoading,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
