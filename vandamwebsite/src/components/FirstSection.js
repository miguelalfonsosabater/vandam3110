import React from 'react';
import './FirstSection.css';
import Carousel from './Carousel';

const FirstSection = () => {
    const divItems = [
        <div>Div 1</div>,
        <div>Div 2</div>,
        <div>Div 3</div>,
        <div>Div 4</div>,
        <div>Div 5</div>,
    ];

    return (
        <div className='firstSectionContainer' id="FirstSectionContainer">
            <h1 className='H1Container'>PORTFOLIO</h1>
            <Carousel items={divItems} />
        </div>
    );
};

export default FirstSection;
