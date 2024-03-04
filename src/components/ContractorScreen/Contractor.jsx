import React, { useEffect } from 'react';
import WOW from 'wowjs';
import Header from './Header/Header';
import Effortlessly from './Effortlessly/Effortlessly';
import Network from './Network/Network';
const Contractor = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        const wow = new WOW.WOW();
        wow.init();
    }, [])
    return (
        <div className='wow fadeInDown' data-wow-duration='1s' style={{ backgroundColor: '#E7F0E9' }}>
            <Header/>
            <Effortlessly/>
            <Network/>
        </div>
    );
};

export default Contractor;
