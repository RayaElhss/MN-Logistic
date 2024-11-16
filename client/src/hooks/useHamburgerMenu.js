import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to manage the state of the hamburger menu.
 */
const useHamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for tracking the menu open/close
  const isMenuOpenRef = useRef(isMenuOpen);  // Ref to persist state across renders
  const [isSmallScreen, setIsSmallScreen] = useState(false);  // State for responsive behavior

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Close the menu (for example, after navigation)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Detect screen size for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Sync ref with the state on every render
  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    isSmallScreen,
    isMenuOpenRef,
  };
};

export default useHamburgerMenu;
