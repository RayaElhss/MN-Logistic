// CallButton.js
import React from 'react';
import styles from './CallButton.module.css'; 

const CallButton = () => {
  const handleClick = () => {
    alert('+359 897089094');
  };

  return (
    <button className={styles.callButton} onClick={handleClick}>
      Call Us
    </button>
  );
};

export default CallButton;
