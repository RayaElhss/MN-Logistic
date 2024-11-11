import React from 'react';
import CountUp from 'react-countup';

const StatisticsSection = () => {
  const stats = [
    { number: 1, label: "Офис" },
    { number: 50, label: "Митнически операции" },
    { number: 48, label: "Повече от 100 доволни клиента" },
    { number: 7, label: "На разположение", suffix: "/7" },
  ];

  return (
    <div className="statistics-section">
      {stats.map((stat, index) => (
        <div key={index} className="stat">
          <div className="stat-circle">
            <span className="stat-number">
              <CountUp 
                end={stat.number} 
                duration={10} 
                suffix={stat.suffix || ""}
              />
            </span>
          </div>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatisticsSection;
