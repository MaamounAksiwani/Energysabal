import React, { useState, useEffect } from 'react';
import Header from './Header/Header'
import WOW from 'wowjs';
import TailoredInsights from './TailoredInsights/Tailored';
import Services from './Services/Service';
import Energy from './Energy/Energy';
import ImageSection from './ImageSection/ImageSection';
const HomeScreen = () => {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='wow fadeInDown' data-wow-duration='1s' style={{backgroundColor:'#E7F0E9'}}>
            <Header/>
            <TailoredInsights />
            <Services />
            <Energy/>
            <ImageSection/>
        </div>
    )
};

export default HomeScreen;
