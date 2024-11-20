import "aos/dist/aos.css"; // Ensure AOS styles are imported
import AOS from "aos"; // Import AOS
import { useEffect } from "react";
import UslugiCards from "./UslugiCards";
import styles from "./Uslugi.module.css"; // Import the module CSS

export default function ExploreTour() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Set duration for animations
    }, []);

    return (
        <div id="uslugi" className={`container-fluid ${styles.ExploreTour} py-5`}>
            <div className="container py-5">
                <div className={`mx-auto text-center mb-5 ${styles["text-center"]}`}>
                    <div className={styles.text} data-aos="fade-bottom">
                        <h2>УСЛУГИ</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mb-4">
                        <div
                            className={styles["text-container"]}
                            data-aos="fade-up"
                        >
                            <h3>Митническо обслужване</h3>
                            <p>
                            Задачата на отдела за митническо обслужване на МН ЛОДЖИСТИК е да бъде винаги в крак с най-новите законови изисквания и нормативни уредби за внос и износ на стоки, за да Ви предложим адекватни и бързи решения. Спестяваме Ви от потенциални глоби и санкции, като осигуряваме стриктно спазване на всички необходими регулации. Познаваме специфичните изисквания за всяка пратка и се грижим те да бъдат изпълнени до най-малкия детайл. Така Вие сте спокойни, а стоките Ви – напълно изрядни.
                            </p>
                        </div>
                    </div>

                    <div className="col-12 mb-4">
                        <div
                            className={styles["text-container"]}
                            data-aos="fade-up"
                        >
                            <h3>Надеждност и партньорства</h3>
                            <p>
                            В МН ЛОДЖИСТИК вярваме, че успешното митническо обслужване е основа за сигурни и дългосрочни партньорства. Нашият екип е ангажиран с това да улеснява Вашите бизнес процеси, като предлага гъвкави и адаптивни решения, съобразени с динамичните нужди на пазара. Поставяме клиента в центъра на нашата дейност и се стремим да осигурим надеждност и спокойствие на всяка стъпка от процеса. С нас можете да сте сигурни, че стоките Ви са в добри ръце, а бизнесът Ви се развива уверено.
                            </p>
                        </div>
                    </div>
                </div>

                <UslugiCards />
            </div>
        </div>
    );
}
