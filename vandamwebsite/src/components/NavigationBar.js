import React, { useState } from 'react';
import './NavigationBar.css'

const NavigationBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav>
            <div className="logo">MIGUEL SABATER</div>
            <div className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#portfolio">PORTFOLIO</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li><a href="#resume">RESUME</a></li>
                </ul>
            </div>
            <div className="hamburger" onClick={toggleMobileMenu}>
                <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
            </div>
        </nav>
    );
};

export default NavigationBar;
