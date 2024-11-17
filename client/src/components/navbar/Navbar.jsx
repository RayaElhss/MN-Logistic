import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState("/");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 992);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const navbarEl = document.querySelector(".navbar");
        const height = navbarEl.getBoundingClientRect().height;

        const handleScroll = () => {
            if (location.pathname !== "/" || isSmallScreen || window.scrollY > height) {
                navbarEl.style.backgroundColor = "#174d82"; // Blue for small screens, when scrolled, or not on homepage
            } else {
                navbarEl.style.backgroundColor = "transparent"; // Transparent for large screens on homepage
            }
        };

        handleScroll(); // Initial call to set correct color on load
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isSmallScreen, location.pathname]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        if (isSmallScreen) {
            setIsMenuOpen(false); // Close menu only on small screens
        }
    };

    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0"
                style={{
                    backgroundColor: isSmallScreen || location.pathname !== "/" ? "#174d82" : "transparent",
                }}
            >
                <Link to="/" className="navbar-brand p-0" onClick={scrollToTop}>
                    <div className="logo-text-container">
                        <img
                            src="img/mama.png"
                            alt="Logo"
                        />
                    </div>
                </Link>

                <div className="hamburger-icon" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/" className={`nav-item nav-link ${activeLink === "/" ? "active" : ""}`} onClick={() => { scrollToTop(); closeMenu(); }}>
                            НАЧАЛО
                        </Link>
                        <Link to="/transport" className={`nav-item nav-link ${activeLink === "/transport" ? "active" : ""}`} onClick={closeMenu}>
                            ТРАНСПОРТ
                        </Link>

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
                                    <Link to="/hero/1" className="dropdown-item" onClick={closeMenu}>
                                        Вносно обмитяване на стоки
                                    </Link>
                                    <Link to="/hero/2" className="dropdown-item" onClick={closeMenu}>
                                        Износно обмитяване на стоки
                                    </Link>
                                    <Link to="/hero/3" className="dropdown-item" onClick={closeMenu}>
                                        Изготвяне на транзитен документ T1
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link to="/blog" className={`nav-item nav-link ${activeLink === "/blog" ? "active" : ""}`} onClick={closeMenu}>
                            БЛОГ
                        </Link>
                        <Link to="/contacts" className={`nav-item nav-link ${activeLink === "/contacts" ? "active" : ""}`} onClick={closeMenu}>
                            КОНТАКТИ
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
