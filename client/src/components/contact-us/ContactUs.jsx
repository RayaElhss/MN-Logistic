// ContactUs.js
import React, { useEffect, useRef } from 'react';
import styles from './ContactUs.module.css'; // Import styles from the CSS module

const ContactUs = () => {
    const buttonRef = useRef(null); // Create a ref for the button

    useEffect(() => {
        const button = buttonRef.current;

        const handleMouseMove = (e) => {
            const x = e.offsetX;
            const y = e.offsetY;
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        };

        button.addEventListener('mousemove', handleMouseMove);

        // Clean up the event listener on component unmount
        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>СВЪРЖЕТЕ СЕ С НАС!</h2>
                <p className={styles.subtitle}>
                    Свържете се с нас още днес! Очакваме Вашите въпроси на електронната ни поща или посочения телефон. Ние сме на Ваше разположение.
                </p>

                

                {/* Fancy Button */}
                <a href="/contacts" className={styles.button} ref={buttonRef}>
                    Контакти
                </a>

                
            </div>
        </section>
    );
};

export default ContactUs;
