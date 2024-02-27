import React, { useState, useEffect } from 'react';
import Header from './Header/Header'
import WOW from 'wowjs';

const HomeScreen = () => {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, [])
    return (
        <div className='wow fadeInDown' data-wow-duration='1s'>
            <Header />
        </div>
    )
};

export default HomeScreen;
