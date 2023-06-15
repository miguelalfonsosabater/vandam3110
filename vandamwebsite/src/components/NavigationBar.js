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
                    <li><a href="#LottieSection" >HOME</a></li>
                    <li><a href="#AboutSection">ABOUT</a></li>
                    <li><a href='#FirstSectionContainer'>SAMPLES</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li><button id='resumeButton' href="#resume">RESUME</button></li>
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
