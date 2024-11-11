// CircleCards.js
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

const Conclusion = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

    return (
        <div className="circle-cards" style={{ paddingBottom: '50px' }}> {/* Add paddingBottom here */}
            <div
                className="mx-auto text-center mb-5"
                style={{
                    maxWidth: '700px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginTop: '50px',
                    marginBottom: '50px',
                    padding: '10px',
                    borderRadius: '8px',
                }}
            >
                <div data-aos="fade-bottom">
                    <h2 style={{ margin: 0, textAlign: 'center' }}>
                        Доверете се на МН ЛОДЖИСТИК за вашето митническо представителство! </h2>
                    <h5 style={{ marginTop: '2rem' }}>
                        {/* Adjust margin-top as needed */}
                        Открийте нови възможности за вашия бизнес, като оставите сложността на митническите процедури в наши ръце! С нас вие получавате не само експертно управление на вашите пратки, но и спокойствие, знаейки, че всичко е под контрол.
                        За да стартираме процеса на освобождаване на вашите пратки, ще ни бъдат необходими следните документи:
                    </h5>
                </div>
            </div>
            <ol>
                <li data-aos="fade-up">
                    <div className="title">
                        <span style={{ fontWeight: "bold" }}>Фактура:</span><br /> с информация за количествата и стойностите на стоките.
                    </div>
                </li>
                <li data-aos="fade-up">
                    <div className="title">
                        <span style={{ fontWeight: "bold" }}>Пълномощно:</span><br /> за упълномощаване на МН ЛОДЖИСТИК да представлява вашия бизнес пред митниците.
                    </div>
                </li>
                <li data-aos="fade-up">
                    <div className="title">
                        <span style={{ fontWeight: "bold" }}>EORI номер:</span><br /> важен за идентификацията при митнически операции.
                    </div>
                </li>
            </ol>

        </div>
    );
}

export default Conclusion;
