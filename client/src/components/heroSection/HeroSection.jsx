// HeroSection.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import uslugiData from '../uslugi/uslugiData'; // Adjust path if needed
import AccordionComponent from '../question-accordion/QuestionAccordion';

export default function HeroSection() {
    const { id } = useParams();
    const heroData = uslugiData.find((item) => item.id === Number(id));

    // If no data is found, display a fallback message
    if (!heroData) {
        return <p>Item not found</p>;
    }

    return (
        <div className="hero-section">
            {/* Background image and title section */}
            <div className="hero-banner">
                <div className="hero-content">
                    <h1 className="hero-title">{heroData.name}</h1>
                </div>
            </div>

            {/* Content section */}
            <div className="hero-description">
                <div className="description-left">
                    <h2>{heroData.title1}</h2>
                    <p>{heroData.subtitle}</p>
                </div>
                <div className="description-right">
                    {/* Conditionally render the main text */}
                    {id !== "6" && <p>{heroData.mainText}</p>}
                </div>
            </div>

            {/* Conditionally render the AccordionComponent */}
            {id === "6" && <AccordionComponent />}
        </div>
    );
}
