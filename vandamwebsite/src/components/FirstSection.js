

import './FirstSection.css';

import Contents from '../assets/ContentsandLinks.json'

import Carousel from './Carousel';

const FirstSection = () => {


    const  BrandItems=  Contents

    return (
        <div className='firstSectionContainer' id="FirstSectionContainer">

            <h1 className='H1Container'>SAMPLE WORKS</h1>

            <Carousel items={BrandItems} 
            
            
            />

        </div>
    );
};

export default FirstSection;
