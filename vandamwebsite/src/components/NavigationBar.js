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
                    <li><a href="#LottieSection" onClick={toggleMobileMenu}>HOME</a></li>
                    <li><a href="#AboutSection" onClick={toggleMobileMenu}>ABOUT</a></li>
                    <li><a href='#FirstSectionContainer' onClick={toggleMobileMenu}>SAMPLES</a></li>
                    <li><a href="#contact" onClick={toggleMobileMenu}>CONTACT</a></li>
                    <li><button id='resumeButton' href="#resume" onClick={toggleMobileMenu}>RESUME</button></li>
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
