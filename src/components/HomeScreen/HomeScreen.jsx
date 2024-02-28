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
    }, [])
    return (
        <div className='wow fadeInDown' data-wow-duration='1s'>
            <Header/>
            <TailoredInsights />
            <ImageSection/>
            <Energy/>
            <Services />
        </div>
    )
};

export default HomeScreen;
