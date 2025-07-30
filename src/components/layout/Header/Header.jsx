import React from 'react';
import styles from './Header.module.css';
import Button from '../../common/Button/Button'; // Assuming common Button component
import surebetsLogo from '../../../assets/images/surebets-logo.png'; // Import your logo image

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Replaced text span with an img tag */}
        <img src={surebetsLogo} alt="Surebets Logo" className={styles.logoImage} />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#features" className={styles.navLink}>Features</a></li>
          <li className={styles.navItem}><a href="#how-it-works" className={styles.navLink}>How It Works</a></li>
          <li className={styles.navItem}><a href="#pricing" className={styles.navLink}>Pricing</a></li>
          <li className={styles.navItem}><a href="#reviews" className={styles.navLink}>Reviews</a></li>
        </ul>
      </nav>
      <div className={styles.authButtons}>
        <Button variant="text" className={styles.loginButton}>Login</Button>
        <Button variant="primary" size="small">Get Started</Button>
      </div>
      {/* Mobile Menu Icon (Hamburger) would go here for responsive design */}
    </header>
  );
};

export default Header;