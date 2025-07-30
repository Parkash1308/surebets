import React from 'react';
import styles from './DashboardShowcaseSection.module.css';
// Using the image you provided: Screenshot 2025-07-28 174700.jpg
import dashboardMockup from '../../../assets/images/Screenshot 2025-07-30 201700.png'
const DashboardShowcaseSection = () => {
  return (
    <section className={styles.dashboardShowcaseSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>See Surebets in Action</h2>
        <p className={styles.subtitle}>
          A glance at our intuitive dashboard, designed to give you clarity and control over your betting strategy.
        </p>
      </div>
      <div className={styles.mockupContainer}>
        <img
          src={dashboardMockup}
          alt="Surebets Dashboard Mockup"
          className={styles.dashboardMockupImage}
        />
      </div>
    </section>
  );
};

export default DashboardShowcaseSection;