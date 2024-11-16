import Copyright from "./Copyright";
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <>

            <div className={`container-fluid ${styles.footer} py-5`}>
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className={`${styles.footerItem} d-flex flex-column`}>
                                <h4 className="mb-4 text-white">
                                    Свържете се с нас:
                                </h4>
                                <a href="">
                                    <i className="fas fa-home me-2" />
                                    {' '}Света Троица, бл. 168
                                </a>
                                <a href="">
                                    <i className="fas fa-envelope me-2" />
                                    {' '}hamudibg@neshtosi.com
                                </a>
                                <a href="">
                                    <i className="fas fa-phone me-2" />
                                    {' '}+359 893026546
                                </a>
                                
                                
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className={`${styles.footerItem} d-flex flex-column`}>
                                <h4 className="mb-4 text-white">
                                    MN Logistic
                                </h4>
                                <a href="/transport">
                                    <i className="fas fa-angle-right me-2" />
                                    {' '}Транспорт
                                </a>
                                <a href="">
                                    <i className="fas fa-angle-right me-2" />
                                    {' '}За нас
                                </a>
                                <a href="">
                                    <i className="fas fa-angle-right me-2" />
                                    {' '}Блог
                                </a>
                                <a href="">
                                    <i className="fas fa-angle-right me-2" />
                                    {' '}Контакти
                                </a>
                                <a href="">
                                    <i className="fas fa-angle-right me-2" />
                                    {' '}Въпроси
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className={`${styles.footerItem} d-flex flex-column`}>
                                <h4 className="mb-4 text-white">
                                    Услуги
                                </h4>
                                <a href="">
                                    <i className="fas fa-angle-right me-2" />
                                    {' '}Вносно обмитяване на стоки
                                </a>
                                <a href="">
                                    <i className="fas fa-angle-right me-2" />
                                    {' '}Износно обмитяване на стоки
                                </a>
                                <a href="">
                                    <i className="fas fa-angle-right me-2" />
                                    {' '}Изготвяне на тразитен документ T1
                                </a>
                                <a href="">
                                    <i className="fas fa-angle-right me-2" />
                                    {' '}политика за поверителност
                                </a>
                                
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className={`${styles.footerItem}`}>
                                <div className="row gy-3 gx-2 mb-4">
                                    
                                </div>
                                <h4 className="text-white mb-3">
                                    Работно време:
                                </h4>
                                <h3>4:00</h3>
                                <div className="footer-bank-card">
                                    <a
                                        className="text-white me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-cc-amex fa-2x" />
                                    </a>
                                    <a
                                        className="text-white me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-cc-visa fa-2x" />
                                    </a>
                                    <a
                                        className="text-white me-2"
                                        href="#"
                                    >
                                        <i className="fas fa-credit-card fa-2x" />
                                    </a>
                                    <a
                                        className="text-white me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-cc-mastercard fa-2x" />
                                    </a>
                                    <a
                                        className="text-white me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-cc-paypal fa-2x" />
                                    </a>
                                    <a
                                        className="text-white"
                                        href="#"
                                    >
                                        <i className="fab fa-cc-discover fa-2x" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Copyright />
        </>
    );
}