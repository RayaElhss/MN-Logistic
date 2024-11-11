import React, { useEffect } from 'react';
import styles from './CustomInfo.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CustomInfo = () => {
    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-in-out', once: false });
    }, []);

    return (
        <div className={styles.background}> {/* New wrapper for background */}
            <div className={styles.container}>
                <h2 className={styles.title} data-aos="fade-down">
                    Доверете се на МН ЛОДЖИСТИК за вашето<br />митническо представителство!
                </h2>

                <p className={styles.description} data-aos="fade-up" data-aos-delay="100">
                    Открийте нови възможности за вашия бизнес, като оставите сложността на митническите процедури в наши ръце! С нас вие получавате не само експертно управление на вашите пратки, но и спокойствие, знаейки, че всичко е под контрол.
                </p>

                <div className={styles.steps}>
                    <div className={styles.step} data-aos="fade-up" data-aos-delay="200">
                        <div className={styles.stepNumber}>1</div>
                        <div>
                            <h3 className={styles.stepTitle}>Фактура</h3>
                            <p className={styles.stepDescription}>
                                с информация за количествата и стойностите на стоките.
                            </p>
                        </div>
                    </div>

                    <div className={styles.step} data-aos="fade-up" data-aos-delay="300">
                        <div className={styles.stepNumber}>2</div>
                        <div>
                            <h3 className={styles.stepTitle}>Товарителница</h3>
                            <p className={styles.stepDescription}>
                                за удостоверяване на транспортните условия.
                            </p>
                        </div>
                    </div>

                    <div className={styles.step} data-aos="fade-up" data-aos-delay="400">
                        <div className={styles.stepNumber}>3</div>
                        <div>
                            <h3 className={styles.stepTitle}>Сертификати</h3>
                            <p className={styles.stepDescription}>
                                ако вашите стоки изискват специфични сертификации за качество или произход.
                            </p>
                        </div>
                    </div>

                    <div className={styles.step} data-aos="fade-up" data-aos-delay="500">
                        <div className={styles.stepNumber}>4</div>
                        <div>
                            <h3 className={styles.stepTitle}>EORI номер</h3>
                            <p className={styles.stepDescription}>
                                важен за идентификацията при митнически операции.
                            </p>
                        </div>
                    </div>

                    <div className={styles.step} data-aos="fade-up" data-aos-delay="600">
                        <div className={styles.stepNumber}>5</div>
                        <div>
                            <h3 className={styles.stepTitle}>Пълномощно</h3>
                            <p className={styles.stepDescription}>
                                за упълномощаване на МН ЛОДЖИСТИК да представлява вашия бизнес пред митниците.
                            </p>
                        </div>
                    </div>

                    <div className={styles.step} data-aos="fade-up" data-aos-delay="500">
                        <div className={styles.stepNumber}>6</div>
                        <div>
                            <h3 className={styles.stepTitle}>Вашето търпение</h3>
                            <p className={styles.stepDescription}>
                                за да ви осигурим най-доброто обслужване!
                            </p>
                        </div>
                    </div>

                </div>

                <p className={styles.conclusion} data-aos="fade-up" data-aos-delay="700">
                    С нашия екип от професионалисти, ние осигуряваме бързо и ефективно управление на всички митнически задължения. Ние познаваме специфичните изисквания за различните стоки и сме готови да предложим индивидуални решения, които отговарят на вашите нужди.
                </p>
                <p className={styles.conclusion} data-aos="fade-up" data-aos-delay="800">
                    Не позволявайте на митническите процедури да ви затрудняват! Свържете се с нас и нека заедно да направим вашето бизнес пътуване по-гладко!
                </p>
            </div>
        </div>
    );
};

export default CustomInfo;
