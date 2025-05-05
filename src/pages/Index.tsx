
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TrustedBySection from '@/components/sections/TrustedBySection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import HomePage from './Home';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-futura">
    
      <Header />

      <main>
        <HomePage />
        <HeroSection />
        {/* <TrustedBySection /> */}
        <FeaturesSection />
        <HowItWorksSection />
        {/* <TestimonialsSection /> */}
        <CallToActionSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
