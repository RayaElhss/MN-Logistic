import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './About.module.css'; // Import the CSS module

export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: false,     // whether animation should happen only once
        });
    }, []);

    return (
        <section className={styles['about-us']} data-aos="fade-up">
            <div className={styles.about} data-aos="fade-right">
                <img
                    src="https://softwareplanetgroup.co.uk/wp-content/uploads/2023/01/%D0%9CLogistics-_-Transportation-1024x1024.png"
                    alt="About Us"
                    className={styles.pic}
                />
                <div className={styles.text} data-aos="fade-left">
                    <h2>ЗА НАС:</h2>
                    <p>
                        МН ЛОДЖИСТИК е екип от висококвалифицирани специалисти в областта на митническото представителство. Нашата мисия е да осигурим на клиентите си ефективни и надеждни решения, съобразени с индивидуалните нужди и специфики на бизнеса им. Стремим се да изведем митническото представителство на по-високо ниво, предоставяйки персонализирани услуги и професионално съдействие във всеки етап на митническите процеси. С индивидуален подход и ангажимент към качеството, МН ЛОДЖИСТИК гарантира сигурност и ефективност за Вашия бизнес.
                    </p>
                </div>
            </div>
        </section>
    );
}
