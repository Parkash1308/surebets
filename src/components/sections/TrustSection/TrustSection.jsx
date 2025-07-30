import React from 'react';
import styles from './TrustSection.module.css';
import { FaStar, FaUsers, FaChartBar, FaMoneyBillAlt } from 'react-icons/fa'; // Example icons
// Import payment icons - you'll need actual SVG/PNGs or use a payment icon library
import visaLogo from '../../../assets/images/visa.png'; // Placeholder, replace with actual path
import mastercardLogo from '../../../assets/images/mastercard.png'; // Placeholder
import paypalLogo from '../../../assets/images/paypal.png'; // Placeholder

const reviewsData = [
  {
    id: 1,
    rating: 5,
    text: 'Surebets completely changed my approach to betting. The insights are unparalleled!',
    author: 'Sarah M.',
    location: 'Texas, USA',
  },
  {
    id: 2,
    rating: 5,
    text: 'I\'ve tried many tools, but Surebets is the only one that consistently delivers real profit.',
    author: 'David P.',
    location: 'London, UK',
  },
  {
    id: 3,
    rating: 5,
    text: 'User-friendly interface and highly accurate data. A must-have for serious bettors.',
    author: 'Emily R.',
    location: 'Sydney, AUS',
  },
  {
    id: 4,
    rating: 5,
    text: 'The arbitrage finder is a game-changer. I\'m seeing consistent returns for the first time.',
    author: 'John T.',
    location: 'Ontario, CAN',
  },
];

const statsData = [
  {
    id: 1,
    icon: <FaUsers />,
    value: '15,000+',
    label: 'Active Users',
  },
  {
    id: 2,
    icon: <FaChartBar />,
    value: '92%',
    label: 'Success Rate',
  },
  {
    id: 3,
    icon: <FaMoneyBillAlt />,
    value: '$5M+',
    label: 'Total Profit Generated',
  },
];

const TrustSection = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} className={i < rating ? styles.starFilled : styles.starEmpty} />
    ));
  };

  return (
    <section id="reviews" className={styles.trustSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Trusted by Thousands of Smart Bettors</h2>
        <p className={styles.subtitle}>
          Hear from our community and see the impact Surebets has made on their betting journey.
        </p>
      </div>

      <div className={styles.reviewsGrid}>
        {reviewsData.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.starRating}>
              {renderStars(review.rating)}
            </div>
            <p className={styles.reviewText}>"{review.text}"</p>
            <p className={styles.reviewAuthor}>- {review.author}, <span className={styles.reviewLocation}>{review.location}</span></p>
          </div>
        ))}
      </div>

      <div className={styles.statsContainer}>
        {statsData.map((stat) => (
          <div key={stat.id} className={styles.statItem}>
            <div className={styles.statIcon}>{stat.icon}</div>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.paymentIconsContainer}>
        <h3>Secure & Verified Payments</h3>
        <div className={styles.paymentIcons}>
          {/* Replace with actual payment processor logos or SVGs */}
          <img src={visaLogo} alt="Visa" className={styles.paymentIcon} />
          <img src={mastercardLogo} alt="Mastercard" className={styles.paymentIcon} />
          <img src={paypalLogo} alt="PayPal" className={styles.paymentIcon} />
          {/* Add more as needed */}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;