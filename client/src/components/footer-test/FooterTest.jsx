import React from 'react';
import styles from './FooterTest.module.css';

const TestFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <img src="/path/to/logo.png" alt="Customs Point Logo" className={styles.logo} />
        </div>

        {/* Navigation Links */}
        <nav className={styles.navLinks}>
          <a href="/about" className={styles.link}>За нас</a>
          <a href="/services" className={styles.link}>Услуги</a>
          <a href="/contact" className={styles.link}>Контакти</a>
          <a href="/terms" className={styles.link}>Общи условия</a>
        </nav>

        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <p>Телефон: +359 123 456 789</p>
          <p>Имейл: info@customspoint.bg</p>
          <p>Адрес: София, България</p>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialMedia}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default TestFooter;
