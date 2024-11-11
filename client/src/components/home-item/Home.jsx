import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "../about/About";
import ExploreTour from "../uslugi/Uslugi";
import FAQ from "../faqs/FAQs";
import StatisticsSection from "../statisticsSection/Statistics";
import ContactSection from '../sections/contactSection';
import CustomInfo from '../custom-info/CutsomInfo.jsx';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll
import Statistic from '../testStatistics/TestStatitics.jsx';

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
                className="hero-header"
                data-aos="fade-in"
                style={{
                    backgroundImage: "url('https://img.freepik.com/premium-vector/red-planet-with-black-background_1065176-5895.jpg?semt=ais_hybrid')",
                }}
            >
                <div className="text-white p-3">
                    <div className="parent-container">
                        <h4 className="comfortaa-example text-uppercase mb-4">
                            Вашият доверен представител<br />пред митническите власти
                        </h4>
                    </div>
                    <div className="d-flex justify-content-center">
                        <ScrollLink
                            to="uslugi" // The id of the section you want to scroll to
                            smooth={true}
                            offset={-70} // Adjust scroll position to avoid any header overlap
                            duration={300} // Duration of the scroll
                            className="cool-button btn btn-lg me-2 d-flex align-items-center"
                        >
                            <span className="arrow-icon">&rarr;</span> {/* Right arrow with heavier font weight */}
                            НАШИТЕ УСЛУГИ
                        </ScrollLink>
                    </div>
                </div>
            </div>

            {/* Other components */}
            <About />
            <Statistic />
            <ExploreTour />
            <StatisticsSection />
            <FAQ />
            <CustomInfo />
            <ContactSection />
        </>
    );
}
