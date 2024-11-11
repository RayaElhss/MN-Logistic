import React, { useState } from 'react';
import styles from './KathyAccordion.module.css';
import faqData from '../faqData.json'; // Importing the FAQ data from a JSON file

const KathyAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Split data into two columns
  const leftColumnData = faqData.slice(0, Math.ceil(faqData.length / 2));
  const rightColumnData = faqData.slice(Math.ceil(faqData.length / 2));

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.accordionColumn}>
        {leftColumnData.map((item, index) => (
          <div key={item.id} className={styles.accordionItem}>
            <button
              className={`${styles.accordionTitle} ${
                activeIndex === index ? styles.active : ''
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
            </button>
            <div
              className={`${styles.accordionContent} ${
                activeIndex === index ? styles.open : styles.closed
              }`}
            >
              {item.answers.map((answer, answerIndex) => (
                <p key={answerIndex}>{answer}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.accordionColumn}>
        {rightColumnData.map((item, index) => (
          <div key={item.id} className={styles.accordionItem}>
            <button
              className={`${styles.accordionTitle} ${
                activeIndex === index + leftColumnData.length ? styles.active : ''
              }`}
              onClick={() => toggleAccordion(index + leftColumnData.length)}
            >
              {item.question}
            </button>
            <div
              className={`${styles.accordionContent} ${
                activeIndex === index + leftColumnData.length ? styles.open : styles.closed
              }`}
            >
              {item.answers.map((answer, answerIndex) => (
                <p key={answerIndex}>{answer}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KathyAccordion;
