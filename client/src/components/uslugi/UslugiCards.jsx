import React from "react";
import { useNavigate } from "react-router-dom";
import uslugiData from "./uslugiData";

export default function UslugiCards() {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/hero/${id}`);
    };

    const handleMouseOver = (id) => {
        // Update the status bar with the intended path
        window.status = `/hero/${id}`;
    };

    const handleMouseOut = () => {
        // Clear the status bar when the mouse leaves
        window.status = "";
    };

    return (
        <div className="row">
            {uslugiData.map((tour) => (
                <div className="col-md-4 mb-4" key={tour.id}>
                    <div
                        className="card tour-card"
                        onClick={() => handleCardClick(tour.id)}
                        onMouseOver={() => handleMouseOver(tour.id)}
                        onMouseOut={handleMouseOut}
                        style={{ cursor: "pointer" }}
                    >
                        <img
                            className="card-img-top"
                            src={tour.imageUrl}
                            alt="Card image cap"
                        />
                        <div className="card-body d-flex align-items-center">
                            <img
                                src={tour.logoUrl}
                                alt="Logo"
                                className="card-logo me-3"
                                style={{ width: "40px", height: "40px" }}
                            />
                            <div className="text-container">
                                <h5 className="card-title mb-0">{tour.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
