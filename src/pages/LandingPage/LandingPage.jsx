import React from 'react';
import Header from '../../components/layout/Header/Header';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import FeaturesSection from '../../components/sections/KeyFeatures/FeaturesSection'; // Corrected path
import DashboardShowcaseSection from '../../components/sections/DashboardShowcaseSection/DashboardShowcaseSection';
import HowItWorksSection from '../../components/sections/HowItWorks/HowItWorksSection'; // Corrected path
import PricingSection from '../../components/sections/PricingSection/PricingSection';
import TrustSection from '../../components/sections/TrustSection/TrustSection';
import Footer from '../../components/layout/Footer/Footer';
import FAQsection from '../../pages/LandingPage/FAQSection'

import styles from './LandingPage.module.css';

const LandingPage = () => {
  console.log('LandingPage loaded');
  return (
    <div className={styles.landingPage}>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DashboardShowcaseSection />
        <HowItWorksSection />
        <PricingSection />
        <TrustSection />
        <FAQsection/>

      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;