import React, { useState } from 'react';
import styles from './PricingSection.module.css';
import Button from '../../common/Button/Button';
import { FaCheck, FaTimes } from 'react-icons/fa'; // Icons for features

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false); // State for monthly/annual toggle

  const pricingPlans = [
    {
      id: 1,
      name: 'Starter',
      monthlyPrice: 29,
      annualPrice: 299, // Approx 17% discount
      features: [
        { text: 'Access to Basic Arbitrage', included: true },
        { text: '50 Bookmakers Monitored', included: true },
        { text: 'Email Support', included: true },
        { text: 'Advanced EV Finder', included: false },
        { text: 'Middle & Correlated Bets', included: false },
        { text: 'Dedicated Account Manager', included: false },
      ],
      isPopular: false,
    },
    {
      id: 2,
      name: 'Pro',
      monthlyPrice: 79,
      annualPrice: 799, // Approx 16% discount
      features: [
        { text: 'Access to Basic Arbitrage', included: true },
        { text: '150 Bookmakers Monitored', included: true },
        { text: 'Email & Chat Support', included: true },
        { text: 'Advanced EV Finder', included: true },
        { text: 'Middle & Correlated Bets', included: false },
        { text: 'Dedicated Account Manager', included: false },
      ],
      isPopular: true, // Highlight this plan
    },
    {
      id: 3,
      name: 'VIP',
      monthlyPrice: 149,
      annualPrice: 1499, // Approx 16% discount
      features: [
        { text: 'Access to All Arbitrage', included: true },
        { text: 'All Bookmakers Monitored', included: true },
        { text: 'Priority 24/7 Support', included: true },
        { text: 'Advanced EV Finder', included: true },
        { text: 'Middle & Correlated Bets', included: true },
        { text: 'Dedicated Account Manager', included: true },
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Flexible Plans for Every Bettor</h2>
        <p className={styles.subtitle}>
          Choose the plan that fits your ambition. Unlock powerful tools designed to maximize your profits.
        </p>
      </div>

      <div className={styles.toggleContainer}>
        <span className={`${styles.toggleOption} ${!isAnnual ? styles.active : ''}`}>Monthly</span>
        <label className={styles.switch}>
          <input type="checkbox" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
          <span className={styles.slider}></span>
        </label>
        <span className={`${styles.toggleOption} ${isAnnual ? styles.active : ''}`}>Annually <span className={styles.discountBadge}>(Save up to 17%)</span></span>
      </div>

      <div className={styles.pricingGrid}>
        {pricingPlans.map((plan) => (
          <div key={plan.id} className={`${styles.pricingCard} ${plan.isPopular ? styles.popularCard : ''}`}>
            {plan.isPopular && <div className={styles.popularBadge}>Most Popular</div>}
            <h3 className={styles.planName}>{plan.name}</h3>
            <div className={styles.price}>
              ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
              <span className={styles.billingCycle}>/{isAnnual ? 'year' : 'month'}</span>
            </div>
            <ul className={styles.featuresList}>
              {plan.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  {feature.included ? <FaCheck className={styles.checkIcon} /> : <FaTimes className={styles.timesIcon} />}
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.isPopular ? 'accent' : 'primary'}
              size="large"
              className={styles.choosePlanButton}
            >
              Choose {plan.name}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;