import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <a href="#hero" className="nav-logo">Masroor RM</a>

            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#hero" className="nav-link" onClick={toggleMenu}>Home</a></li>
                <li><a href="#skills" className="nav-link" onClick={toggleMenu}>Skills</a></li>
                <li><a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a></li>
                <li><a href="#services" className="nav-link" onClick={toggleMenu}>Services</a></li>
                <li><a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
