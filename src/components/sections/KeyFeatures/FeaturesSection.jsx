import React from 'react';
import styles from './FeaturesSection.module.css';
import {
  FaSearch,        // For Surebet Detection Engine
  FaBell,          // For Instant Notifications
  FaCalculator,    // For Profit Calculator
  FaChartBar,      // For Bankroll Tracker
  FaBookOpen,      // For Guides & Tips (FaLightbulb or FaQuestionCircle could also work)
  // Keep other icons if they are still relevant or for future use, but only import what's used
} from 'react-icons/fa';

const featuresData = [
  {
    id: 1,
    icon: <FaSearch />,
    title: 'Surebet Detection Engine',
    description: 'Continuously scans all outcomes across all sports for price mismatches.',
  },
  {
    id: 2,
    icon: <FaBell />,
    title: 'Instant Notifications',
    description: 'Alerts you in real-time when an opportunity appears.',
  },
  {
    id: 3,
    icon: <FaCalculator />,
    title: 'Profit Calculator',
    description: 'Automatically calculates how much to bet and what you\'ll earn.',
  },
  {
    id: 4,
    icon: <FaChartBar />,
    title: 'Bankroll Tracker',
    description: 'Monitor your total ROI and profits over time.',
  },
  {
    id: 5,
    icon: <FaBookOpen />,
    title: 'Guides & Tips',
    description: 'Resources for both beginners and experienced bettors.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Key Features</h2> {/* Updated title to match image */}
        <p className={styles.subtitle}>
          Our cutting-edge tools provide the insights you need to turn sports betting into a consistent source of income.
        </p>
      </div>

      <div className={styles.featuresGrid}>
        {featuresData.map((feature) => (
          <div key={feature.id} className={styles.featureCard}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;