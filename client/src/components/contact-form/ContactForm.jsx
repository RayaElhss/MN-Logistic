import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_h2oe1zq', // Replace with your EmailJS Service ID
                'template_xxx', // Replace with your EmailJS Template ID
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                'user_xxx' // Replace with your EmailJS User ID
            )
            .then(
                (result) => {
                    setSuccessMessage('Благодарим ви, че се свързахте с нас!');
                    setFormData({ name: '', email: '', message: '' }); // Reset the form
                },
                (error) => {
                    console.error('Email send failed:', error);
                }
            );
    };

    return (
        <section
            className={styles.sectionBg}
            style={{ backgroundImage: 'url(https://img.sdcexec.com/files/base/acbm/scn/image/2022/06/AdobeStock_382940021.62b9ce4762e71.png?auto=format%2Ccompress&q=70)' }}
            data-scroll-index="7"
        >
            <div className={styles.overlay}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className={styles.contactInfo}>
                                <h2 className={styles.contactTitle}>Имате Въпроси?</h2>
                                <p>
                                    Ако имате въпроси или се нуждаете от повече информация за нашите услуги, не се колебайте да се свържете с нас. Ние сме тук, за да помогнем и да ви предоставим нужната подкрепа.
                                </p>
                                <ul className={styles.contactInfoList}>
                                    <li>
                                        <div className={styles.infoLeft}>
                                            <i className="fas fa-mobile-alt"></i>
                                        </div>
                                        <div className={styles.infoRight}>
                                            <h4>+359 897089094</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.infoLeft}>
                                            <i className="fas fa-at"></i>
                                        </div>
                                        <div className={styles.infoRight}>
                                            <h4>nqkuvemail@example.com</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.infoLeft}>
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className={styles.infoRight}>
                                            <h4>София, Света Троица, бл. 168</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex align-items-center">
                            <div className={styles.contactForm}>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className={styles.formGroup}>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className={styles.formControl}
                                                    placeholder="Вашето име *"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className={styles.formGroup}>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className={styles.formControl}
                                                    placeholder="Вашия имейл *"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className={styles.formGroup}>
                                                <textarea
                                                    rows="4"
                                                    name="message"
                                                    className={styles.formControl}
                                                    placeholder="Питайте ни! *"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button 
                                                className={`${styles.btn} ${styles.btnBig}`} 
                                                type="submit"
                                            >
                                                Изпрати <i className="fas fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                    {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;