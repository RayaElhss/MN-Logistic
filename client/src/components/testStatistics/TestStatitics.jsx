import React from 'react';
import CountUp from 'react-countup';
import styles from './Statistics.module.css';

const statisticsData = [
    { label: 'ОФИС', value: 1 },
    { label: 'МИТНИЧЕСКИ ОПЕРАЦИИ', value: 45 },
    { label: 'ДОВОЛНИ КЛИЕНТА', value: 100 },
    { label: 'НА РАЗПОЛОЖЕНИЕ', value: 7 } // Set value as 7 for counting, and add "/7" as static text
];

const Statistics = () => {
    return (
        <div className={styles.statisticsContainer}>
            {statisticsData.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                    <div className={styles.value}>
                        {stat.label === 'НА РАЗПОЛОЖЕНИЕ' ? (
                            <>
                                <CountUp start={1} end={stat.value} duration={2.5} />
                                /7
                            </>
                        ) : (
                            <CountUp start={1} end={stat.value} duration={2.5} />
                        )}
                    </div>
                    <div className={styles.label}>{stat.label}</div>
                </div>
            ))}
        </div>
    );
};

export default Statistics;
