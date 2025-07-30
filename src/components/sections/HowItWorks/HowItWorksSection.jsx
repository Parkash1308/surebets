import React from 'react';
import styles from './HowItWorksSection.module.css';
import { FaDownload, FaChartPie, FaMoneyBillWave } from 'react-icons/fa'; // Example icons for steps

const stepsData = [
  {
    id: 1,
    icon: <FaDownload />,
    title: 'Connect Your Accounts',
    description: 'Securely link your favorite sportsbooks to our platform for real-time data.',
  },
  {
    id: 2,
    icon: <FaChartPie />,
    title: 'Discover Opportunities',
    description: 'Our AI analyzes millions of odds to identify arbitrage, EV, and middle betting opportunities instantly.',
  },
  {
    id: 3,
    icon: <FaMoneyBillWave />,
    title: 'Place & Profit',
    description: 'Follow our clear instructions to place your bets and watch your profits grow.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className={styles.howItWorksSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Simple Steps to Smart Betting</h2>
        <p className={styles.subtitle}>
          Getting started with Surebets is easy. Here's how our platform empowers you in just a few steps.
        </p>
      </div>

      <div className={styles.stepsGrid}>
        {stepsData.map((step) => (
          <div key={step.id} className={styles.stepCard}>
            <div className={styles.stepIcon}>{step.icon}</div>
            <h3 className={styles.stepTitle}>Step {step.id}: {step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;