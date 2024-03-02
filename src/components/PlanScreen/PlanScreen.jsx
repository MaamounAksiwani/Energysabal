import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import WOW from 'wowjs';
import Electrification from './Electrification/Electrification';
import Process from './Process/Process';
import Choose from './Choose/Choose';
import Business from './Business/Business'
const PlanScreen = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        const wow = new WOW.WOW();
        wow.init();
    }, [])
    return (
        <div className='wow fadeInDown' data-wow-duration='1s' style={{backgroundColor:'#E7F0E9'}}>
            <Header />
            <Electrification/>
            <Process/>
            <Choose/>
            <Business/>
        </div>
    );
};

export default PlanScreen;
