import React, { useState, useEffect } from 'react';
import WOW from 'wowjs';
import Header from './Header/Heeder';
import Reports from './Reports/Reports';
import SectionText from './SectionTexr/SectionText';
import ChooseEnergy from './ChooseEnergy/ChooseEnergy';
const ReportScreen = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        const wow = new WOW.WOW();
        wow.init();
    }, [])
    return (
        <div className='wow fadeInDown' data-wow-duration='1s' style={{backgroundColor:'#E7F0E9'}}>
            <Header/>
            <Reports/>
            <SectionText/>
            <ChooseEnergy/>
        </div>
    );
};

export default ReportScreen;
