import React, { useState } from 'react';
import styles from './TransportCards.module.css';

export default function TransportCards() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const cards = [
        {
            id: 1,
            title: "Сухопътен транспорт",
            imageUrl: "https://actointernational.com/wp-content/uploads/2016/02/parallax-featured-service.jpg",
            description: "Нашите услуги по сухопътен транспорт предлагат максимална гъвкавост и адаптивност към нуждите на всеки клиент. С транспортни средства от различни видове и размери – от малки товарни автомобили до големи камиони, ние гарантираме бърза и безопасна доставка на вашите стоки, независимо от тяхната специфика и обем. Осигуряваме индивидуални решения за логистика, като покриваме кратки и дълги разстояния и предлагаме обслужване от врата до врата. Сухопътният транспорт е подходящ както за регулярни доставки, така и за спешни доставки, като ви предоставя оптимално съотношение между цена и качество. Нашата мрежа и партньори позволяват ефективно управление на времето за доставка, за да бъдете сигурни, че вашите стоки ще пристигнат навреме и в отлично състояние."
        },
        {
            id: 2,
            title: "Морски  транспорт",
            imageUrl: "https://www.lagermax.com/cache-buster-5/Content%20Lagermax/Dienstleistungen/Transporte/Seefracht/22/image-thumb__22__headerElement/william-william-NndKt2kF1L4-unsplash.jpg",
            description: "Със своите предимства за пренасяне на големи количества товари на дълги разстояния, морският транспорт е отличен избор за компании, които търсят икономично и надеждно решение. Ние работим с водещи морски превозвачи, като предлагаме пълен спектър от услуги – от контейнерен транспорт и складиране до цялостно митническо обслужване и обработка на документи. Нашите специалисти ще се погрижат за избора на най-оптималния маршрут и превозно средство, за да ви осигурим икономично решение, без компромис в сигурността. Възможностите за проследяване на товарите и ефикасното управление на времето ви позволяват да имате пълна прозрачност на доставките по всяко време, което е особено важно при международни пратки и дълги маршрути."
        },
        {
            id: 3,
            title: "Въздушен  транспорт",
            imageUrl: "https://despred.com/wp-content/uploads/2023/12/predimstva-na-vazdushnia-transport-sofia-1.jpg",
            description: "Когато времето е критичен фактор, въздушният транспорт е най-добрият избор за експресни и сигурни доставки. Нашите партньорства с утвърдени авиокомпании и стратегическите ни транспортни решения осигуряват бързо и ефективно придвижване на вашите стоки от един континент до друг. С въздушния транспорт получавате не само най-бързото решение за доставка, но и високо ниво на сигурност. Нашият екип ще координира всички необходими документи и митнически процедури, така че вашата пратка да стигне до крайния си получател в най-кратък срок. Осигуряваме и услуги за експресни пратки и по-специфични логистични решения, съобразени с особеностите на различните видове товари."
        },
    ];

    const openModal = (card) => {
        setSelectedCard(card);
        setIsModalOpen(true);

    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null)
    }
    return (
        <div className={styles.cardSection}>

            <div className={styles.cardContainer}>
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={styles.card}
                        style={{ backgroundImage: `url(${card.imageUrl})` }}
                        onClick={() => openModal(card)}
                    >
                        <div className={styles.overlay}>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && selectedCard && (
                <div className={styles.modalBackdrop} onClick={closeModal}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()} // Prevent clicking inside the modal from closing it
                    >
                        <button className={styles.closeButton} onClick={closeModal}>X</button>
                        <h2 className={styles.modalTitle}>{selectedCard.title}</h2>
                        <p className={styles.modalDescription}>{selectedCard.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
