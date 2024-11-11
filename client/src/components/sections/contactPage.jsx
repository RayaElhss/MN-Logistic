import React from 'react';

export default function ContactPage() {
    return (
        <div style={{ background: 'rgb(0, 99, 153)', padding: '100px 0' }}> {/* Blue background added here */}
            <div
                className="container text-center text-dark py-5"
                style={{
                    backgroundColor: 'white', // White background for the container
                    borderRadius: '15px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h2 className="mb-4" style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
                    КОНТАКТИ
                </h2>
                <p className="mb-5" style={{ fontSize: '1.2rem', color: '#666' }}>
                    Свържете се с нас!
                </p>
                <p style={{ color: '#666', fontSize: '1rem' }}>
                    Очакваме Вашите въпроси на електронната поща 
                    <a href="mailto:hamudibg@gamil.com" style={{ color: '#007bff', textDecoration: 'none', marginLeft: '5px' }}>
                        hamudibg@gamil.com 
                    </a> 
                    или телефон <a href="tel:+359897089094" style={{ color: '#007bff', textDecoration: 'none' }}>+359 89 7089094</a>.
                </p>

                <div className="row mt-5">
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div>
                            <i className="fas fa-map-marker-alt fa-2x" style={{ color: '#007bff' }}></i>
                            <h5 className="mt-3">гр. София</h5>
                            <p>nqkuv address</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
