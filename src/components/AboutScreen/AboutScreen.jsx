import React, { useEffect } from 'react';
import WOW from 'wowjs'; 
import Header from './Header/Header';
import Mission from './Mission/Mission';
import Story from './Story/Story';
const AboutScreen = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        const wow = new WOW.WOW();
        wow.init();
    }, [])
    return (
        <div className='wow fadeInDown' data-wow-duration='1s' style={{ backgroundColor: '#E7F0E9' }}>
           <Header/>
           <Mission/>
           <Story/>
        </div>
    );
};

export default AboutScreen;
