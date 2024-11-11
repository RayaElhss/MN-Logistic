import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState("/");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navbarBg, setNavbarBg] = useState("transparent");

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    useEffect(() => {
        // Function to handle scroll for navbar background
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setNavbarBg("#7e2a2a");
            } else {
                setNavbarBg("transparent");
            }
        };

        // Only add scroll listener on the homepage
        if (location.pathname === "/") {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        } else {
            setNavbarBg("#7e2a2a"); // Static color for non-home pages
        }
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header" style={{ backgroundColor: navbarBg }}>
            <Link to="/" className="logo-text-container logo" onClick={() => setIsMenuOpen(false)}>
                <img src="img/logo.png" alt="Logo" />
                <h1 style={{ color: 'white' }}>MN Logistics</h1>
            </Link>
            <input type="checkbox" className="menu-btn" id="menu-btn" checked={isMenuOpen} onChange={toggleMenu} />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
            </label>
            <ul className={`menu ${isMenuOpen ? "show" : ""}`}>
                <li><Link to="/" className={activeLink === '/' ? 'active' : ''} onClick={toggleMenu}>НАЧАЛО</Link></li>
                <li><Link to="/transport" className={activeLink === '/transport' ? 'active' : ''} onClick={toggleMenu}>ТРАНСПОРТ</Link></li>
                <li>
                    <Link to="/uslugi" className={activeLink === '/uslugi' ? 'active' : ''} onClick={toggleMenu}>
                        УСЛУГИ
                    </Link>
                </li>
                <li><Link to="/blog" className={activeLink === '/blog' ? 'active' : ''} onClick={toggleMenu}>БЛОГ</Link></li>
                <li><Link to="/contacts" className="btn btn-primary rounded-pill" onClick={toggleMenu}>КОНТАКТИ</Link></li>
            </ul>
        </header>
    );
}
