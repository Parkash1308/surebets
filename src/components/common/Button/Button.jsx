import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', size = 'medium', onClick, className, ...props }) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className || ''}`;
  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;