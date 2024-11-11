import React from 'react';
import styles from './Transport.module.css';
import TransportCards from './transportCards';

const Transport = () => {
  

  return (
    <div className={styles.container}>
      {/* Main content */}
      <h1 className={styles.title}>ТРАНСПОРТ</h1>


      <p className={styles.intro}>
        Ние сме екип със сериозен опит и задълбочено познаване на нормативната база. Ние сме гъвкави и креативни. Натрупаните знания и професионализъм ни позволяват да Ви предложим компетентно, коректно и качествено обслужване в най-кратки срокове.
      </p>

      <TransportCards />


      <section className={styles.section}>
        <h3 className={styles.heading}>Запитване за транспорт</h3>
        <p>
          Запитване за превозвач (от 3 до 5) по съответните изисквания на клиента. Изпращане на оферти на клиента от превозвачи за избор. Подготвяне на всички необходими документи и осъществяване условия за безопасното транспортиране на товара.
        </p>
        <p>
          Разполагаме с широк кръг от контакти, които ни позволяват да организираме експресни превози, без да губим излишно време в оформяне на документацията или намирането на транспорт, с който да бъде извършен превозът.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>Запитване за митнически складове</h3>
        <p>
          Запитване за митнически складове (до 3) района, в който се намира пратката. Изпращане на клиента за избор на оферта.
        </p>
        <p>
          Режим „Митническо складиране“ се квалифицира като режим с отложено плащане. Под този режим могат да бъдат поставяни необщностни стоки за неопределен срок от време, които не се облагат с вносни сборове и не подлежат на мерките на търговската политика.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>Нужни транспортни документи при ВНОС/ИЗНОС</h3>
        <p>
          При превозването на стоките, свързани с външноикономическите сделки, се изисква издаването на специални документи, които зависят от вида на транспортното средство. С тях се удостоверява приемането на стоките за товарене, натоварването и тяхното изпращане (експедиране).
        </p>
      </section>

      {/* Card Section */}
      {/* <h2 className={styles.cardSectionTitle}>Demo 1</h2>

      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card} style={{ backgroundImage: `url(${card.imageUrl})` }}>
            <div className={styles.overlay}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Transport;
