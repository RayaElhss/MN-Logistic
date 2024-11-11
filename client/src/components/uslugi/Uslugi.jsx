import "aos/dist/aos.css"; // Ensure AOS styles are imported
import AOS from "aos"; // Import AOS
import { useEffect } from "react";
import UslugiCards from "./UslugiCards";

export default function ExploreTour() {
    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Set duration for animations
    }, []);

    return (
        <div id="uslugi" className="container-fluid ExploreTour py-5" style={{ backgroundColor: '#f3f3f3' }}>
            <div className="container py-5">
                <div
                    className="mx-auto text-center mb-5"
                    style={{
                        maxWidth: '700px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <div className="text" data-aos="fade-bottom">
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#333' }}>УСЛУГИ</h2>
                    </div>
                </div>

                <div className="row">
                    {/* First Block with Burgundy Gradient */}
                    <div className="col-lg-6 mb-4">
                        <div
                            className="text-container p-5"
                            style={{
                                background: "linear-gradient(135deg, rgba(128, 0, 32, 1) 0%, rgba(105, 0, 26, 1) 100%)", // Burgundy gradient
                                borderRadius: '12px',
                                height: '100%',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                                padding: '30px',
                            }}
                            data-aos="fade-up"
                        >
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#fff' }}>Митническо обслужване</h3> {/* White text for better contrast */}
                            <p className="mb-0" style={{ fontSize: '1.1rem', color: '#fff', lineHeight: '1.8' }}> {/* White text for better contrast */}
                                Задачата на отдела за митническо обслужване на МН ЛОДЖИСТИК е да бъде винаги в крак с най-новите законови изисквания и нормативни уредби за внос и износ на стоки, за да Ви предложим адекватни и бързи решения. Спестяваме Ви от потенциални глоби и санкции, като осигуряваме стриктно спазване на всички необходими регулации. Познаваме специфичните изисквания за всяка пратка и се грижим те да бъдат изпълнени до най-малкия детайл. Така Вие сте спокойни, а стоките Ви – напълно изрядни.
                            </p>
                        </div>
                    </div>

                    {/* Second Block with Burgundy Gradient */}
                    <div className="col-lg-6 mb-4">
                        <div
                            className="text-container p-5"
                            style={{
                                background: "linear-gradient(90deg, rgba(128, 0, 32, 1) 0%, rgba(105, 0, 26, 1) 100%)", // Burgundy gradient
                                borderRadius: '12px',
                                height: '100%',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                                padding: '30px',
                            }}
                            data-aos="fade-up"
                        >
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#fff' }}>Надеждност и партньорства</h3> {/* White text for better contrast */}
                            <p className="mb-0" style={{ fontSize: '1.1rem', color: '#fff', lineHeight: '1.8' }}> {/* White text for better contrast */}
                                В МН ЛОДЖИСТИК вярваме, че успешното митническо обслужване е основа за сигурни и дългосрочни партньорства. Нашият екип е ангажиран с това да улеснява Вашите бизнес процеси, като предлага гъвкави и адаптивни решения, съобразени с динамичните нужди на пазара. Поставяме клиента в центъра на нашата дейност и се стремим да осигурим надеждност и спокойствие на всяка стъпка от процеса. С нас можете да сте сигурни, че стоките Ви са в добри ръце, а бизнесът Ви се развива уверено.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ paddingBottom: '35px' }}></div>

                <UslugiCards />
            </div>
        </div>
    );
}
