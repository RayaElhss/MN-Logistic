import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState("/");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    useEffect(() => {
        const navbarEl = document.querySelector(".navbar");
        const height = navbarEl.getBoundingClientRect().height;

        if (location.pathname === "/") {
            const handleScroll = () => {
                if (window.scrollY > height) {
                    navbarEl.style.backgroundColor = "#7e2a2a";
                } else {
                    navbarEl.style.backgroundColor = "transparent";
                }
            };

            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [location.pathname]);

    useEffect(() => {
        const navbarEl = document.querySelector(".navbar");
        if (location.pathname === "/") {
            navbarEl.style.backgroundColor = "transparent";
        } else {
            navbarEl.style.backgroundColor = "#7e2a2a";
        }
    }, [location.pathname]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <Link to="/" className="navbar-brand p-0" onClick={scrollToTop}>
                    <div className="logo-text-container">
                        <img src="img/logo.png" alt="Logo" />
                        <h1 style={{ color: "white" }}>MN Logistics</h1>
                    </div>
                </Link>

                <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/" className={`nav-item nav-link ${activeLink === "/" ? "active" : ""}`} onClick={scrollToTop}>
                            НАЧАЛО
                        </Link>
                        <Link to="/transport" className={`nav-item nav-link ${activeLink === "/transport" ? "active" : ""}`} onClick={scrollToTop}>
                            ТРАНСПОРТ
                        </Link>

                        {/* Dropdown for Услуги */}
                        <div
                            className={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}
                            onMouseEnter={() => window.innerWidth >= 992 && setIsDropdownOpen(true)}
                            onMouseLeave={() => window.innerWidth >= 992 && setIsDropdownOpen(false)}
                        >
                            <span
                                className={`nav-link dropdown-toggle ${activeLink.includes("/uslugi") ? "active" : ""}`}
                                onClick={() => {
                                    if (window.innerWidth < 992) toggleDropdown();
                                }}
                            >
                                УСЛУГИ
                            </span>
                            {isDropdownOpen && (
                                <div className="dropdown-menu show">
                                    <Link to="/hero/1" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                                    Вносно обмитяване на стоки
                                    </Link>
                                    <Link to="/hero/2" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                                    Износно обмитяване на стоки
                                    </Link>
                                    <Link to="/hero/3" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                                    Изготвяне на транзитен документ T1
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link to="/blog" className={`nav-item nav-link ${activeLink === "/blog" ? "active" : ""}`}>
                            БЛОГ
                        </Link>
                        <Link to="/contacts" className={`nav-item nav-link ${activeLink === "/contacts" ? "active" : ""}`}>
                            КОНТАКТИ
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
