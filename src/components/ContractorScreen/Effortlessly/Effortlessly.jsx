import React, { useState, useEffect } from 'react';
import WOW from 'wowjs';
import './Effortlessly.css';
import { Container } from '@mui/material';

import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';


const Effortlessly = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        const wow = new WOW.WOW();
        wow.init();
    }, [])

    return (
        <div className='main-Effortlessly'>
            <div className='serviceContact'>
                <Container maxWidth="lg">
                  <h1>Effortlessly Navigate Incentives</h1>
                    <div className='futureMedical'>
                        <div>
                            <MonetizationOnTwoToneIcon style={{ color: "#3b715a", fontSize: '50px' }} />
                            <h3>Access Rebates</h3>
                            <p style={{color:'#76867E'}}>
                                Receive comprehensive
                                information on available
                                rebates and incentives,
                                ensuring maximum savings
                                for your clients.</p>
                        </div>
                        <div>
                            <TipsAndUpdatesTwoToneIcon style={{ color: "#3b715a", fontSize: '50px' }} />
                            <h3>Expert Guidance</h3>
                            <p style={{color:'#76867E'}}>
                                Benefit from in-house experts
                                who ensure eligibility and
                                provide guidance throughout
                                the electrification process.
                            </p>
                        </div>
                        <div>
                            <InfoTwoToneIcon style={{ color: "#3b715a", fontSize: '50px' }} />
                            <h3>Streamlined Support</h3>
                            <p style={{color:'#76867E'}}>
                                Save time and resources with our
                                streamlined processes, including
                                handling paperwork details and
                                offering assistance.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Effortlessly;
