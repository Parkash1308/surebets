import React from 'react';
import styles from './Footer.module.css';
// Import payment icons - assuming you've placed them in assets/images
import visaLogo from '../../../assets/images/visa.png'; // Placeholder, replace with actual path or use SVGs
import mastercardLogo from '../../../assets/images/mastercard.png'; // Placeholder
import paypalLogo from '../../../assets/images/paypal.png'; // Placeholder

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <h3 className={styles.footerLogo}>Surebets</h3>
          <p className={styles.tagline}>Profit is the expectation.</p>
        </div>

        <div className={styles.footerNav}>
          <div className={styles.navColumn}>
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div className={styles.navColumn}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className={styles.navColumn}>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerPaymentIcons}>
          <h4>Secure Payments</h4>
          <div className={styles.paymentIcons}>
            {/* Replace src with your actual payment icon paths */}
            <img src={visaLogo} alt="Visa" />
            <img src={mastercardLogo} alt="Mastercard" />
            <img src={paypalLogo} alt="PayPal" />
            {/* Add more icons as needed */}
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Surebets. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;