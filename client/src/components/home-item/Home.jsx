import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "../about/About";
import ExploreTour from "../uslugi/Uslugi";
import FAQ from "../faqs/FAQs";
import CustomInfo from '../custom-info/CutsomInfo.jsx';
import Statistic from '../testStatistics/TestStatitics.jsx';
import ContactForm from '../contact-form/ContactForm.jsx';
import { Link as ScrollLink } from 'react-scroll';
import styles from './Home.module.css'; // Import the CSS module

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <>
            <div
                className={styles.heroHeader}
                data-aos="fade-in"
                style={{
                    backgroundImage: "url('https://i.pinimg.com/originals/2a/a7/8a/2aa78a2c8fbe91b37bfed0fbb32fae82.jpg')",
                }}
            >
                <div className={`${styles.textWhite} p-3`}>
                    <div className="parent-container">
                        <h4 className={`${styles.comfortaaExample} text-uppercase mb-4`}>
                            Вашият доверен представител<br />пред митническите власти
                        </h4>
                    </div>
                    <div className="d-flex justify-content-center">
                        <ScrollLink
                            to="uslugi"
                            smooth={true}
                            offset={-70}
                            duration={300}
                            className={`${styles.coolButton} btn btn-lg me-2 d-flex align-items-center`}
                        >
                            <span className={styles.arrowIcon}>&rarr;</span>
                            НАШИТЕ УСЛУГИ
                        </ScrollLink>
                    </div>
                </div>
            </div>

            <About />
            <ExploreTour />
            <Statistic />
            <FAQ />
            <CustomInfo />
            <ContactForm />
        </>
    );
}
