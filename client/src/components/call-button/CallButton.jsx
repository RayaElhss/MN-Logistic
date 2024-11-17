import React from 'react';
import styles from './CallButton.module.css';

const CallButton = () => {
  return (
    <a href="tel:+359897089094" className={styles.callButton}>
      Call Us
    </a>
  );
};

export default CallButton;

