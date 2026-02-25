import React from 'react';
import { AppProvider } from '@/context/AppContext';

// Layout Components
import AgeGate from '@/components/layout/AgeGate';
import CookieConsent from '@/components/layout/CookieConsent';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// UI Components
import SkillQuestionModal from '@/components/ui/SkillQuestionModal';

// Section Components
import HeroSection from '@/components/sections/HeroSection';
import ValueStack from '@/components/sections/ValueStack';
import Benefits from '@/components/sections/Benefits';
import RevenueScale from '@/components/sections/RevenueScale';
import GallerySection from '@/components/sections/GallerySection';
import Location from '@/components/sections/Location';
import Trust from '@/components/sections/Trust';
import LegalCompliance from '@/components/sections/LegalCompliance';
import HowItWorks from '@/components/sections/HowItWorks';
import Timeline from '@/components/sections/Timeline';
import OddsCalculator from '@/components/sections/OddsCalculator';
import Winners from '@/components/sections/Winners';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-dark text-white">
        {/* Age Verification Gate */}
        <AgeGate />
        
        {/* Cookie Consent */}
        <CookieConsent />
        
        {/* Skill Question Modal */}
        <SkillQuestionModal />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          <HeroSection />
          <ValueStack />
          <Benefits />
          <RevenueScale />
          <GallerySection />
          <Location />
          <Trust />
          <LegalCompliance />
          <HowItWorks />
          <Timeline />
          <OddsCalculator />
          <Winners />
          <FAQ />
          <FinalCTA />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
