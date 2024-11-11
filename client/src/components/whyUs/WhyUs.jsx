import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const CharityComponent = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration
    }, []);

    return (
        <div
            style={{
                backgroundColor: '#f0f0f0',
                paddingBottom: '90px',
                borderRadius: '8px',
            }}
            data-aos="fade-up" // Apply the desired animation to the entire component
        >
            <div
                className="mx-auto text-center mb-5"
                style={{
                    maxWidth: '700px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginTop: '50px',
                    padding: '20px',
                    borderRadius: '8px',
                }}
            >
                <div data-aos="fade-bottom">
                    <h2 style={{ margin: 0, textAlign: 'center' }}>
                        Защо да изберете митническо представителство от МН ЛОДЖИСТИК?
                    </h2>
                </div>
            </div>

            <div className="charity-container">
                <div className="image-section">
                    <img
                        src={'https://media.licdn.com/dms/image/v2/D4D12AQGZCNv789WhwA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698037839644?e=2147483647&v=beta&t=8COEzcvhDNS8nZNojRcwAfCqmcz8KojOKkqcqt-_eGk'}
                        alt="Volunteer"
                        className="volunteer-image"
                    />
                </div>

                <div className="text-section">
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li>✔ Доказан опит и знания - Нашият екип от квалифицирани митнически агенти притежава значителен опит в индустрията и винаги е наясно с последните промени в нормативната уредба.</li>
                        <li>✔ Спестяване на време и ресурси - Доверявайки се на МН ЛОДЖИСТИК за митническите процедури, вие освободите ценни ресурси и време, които можете да насочите към стратегическото развитие на бизнеса си.</li>
                        <li>✔ Висока точност и ангажираност - Поемаме отговорност за детайлната подготовка на документите и стриктното спазване на законовите изисквания, минимизирайки риска от грешки, санкции и забавяния.</li>
                        <li>✔ Оптимизация на разходите - Чрез правилно тарифиране и класиране на вашите стоки, ние оптимизираме митата и данъците, което води до значителни спестявания за вас.</li>
                        <li>✔ Индивидуализиран подход - Подходът ни към клиентите е персонализиран, съобразявайки се с уникалните нужди на бизнеса и партньорите му, като предоставяме консултации за най-добрите митнически решения.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CharityComponent;
