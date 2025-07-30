import React from 'react';
import styles from './HeroSection.module.css';
import Button from '../../common/Button/Button'; // Import the Button component
import { FaCheckCircle } from 'react-icons/fa'; // Import the checkmark icon

const heroDetailsData = [
  'Exact odds',
  'Bookmakers to use',
  'Which bets to place',
  'What amount to stake',
  'And your exact risk-free profit',
];

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          Unlock Your Betting Edge <br /> with <span className={styles.highlight}>Smart Analytics</span>
        </h1>
        {/* Slogan Element */}
        <p className={styles.slogan}>
          _Where Data Beats Luck_
        </p>
        <p className={styles.subtext}>
          Our software tracks millions of odds across dozens of bookmakers 24/7. When it detects one of these opportunities, we notify our users instantly.
        </p>

        {/* New Hero Details List */}
        <ul className={styles.heroDetailsList}>
          {heroDetailsData.map((item, index) => (
            <li key={index} className={styles.heroDetailItem}>
              <FaCheckCircle className={styles.heroDetailIcon} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className={styles.ctaButtons}>
          <Button variant="accent" size="large">
            Start Free Trial
          </Button>
          <Button variant="secondary" size="large">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;