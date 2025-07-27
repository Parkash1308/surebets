import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <p>&copy; {new Date().getFullYear()} Surebets Platform. All rights reserved.</p>
        {/* Add more footer links or content here */}
      </div>
    </footer>
  );
};

export default Footer;