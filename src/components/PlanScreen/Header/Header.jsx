import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import './index.css';
import { Container } from '@mui/material';
import img from '../../../until/image/shutterstock_2206914231.jpg'

const Header = () => {
    return (
        <>
            <div className='header'>
                <div>
                    <Container maxWidth="lg">
                        <div className='content'>
                            <div>
                                <h1>Turn Your Vision into Reality</h1>
                                <p>
                                    Energy Sabal is here to make your electrification
                                    project a seamless experience. Our
                                    comprehensive services cover everything from
                                    planning to installation, ensuring a hassle free
                                    journey. Ready to get started? Take the first step
                                    with us today.

                                </p>
                                <button>Make Plan
                                </button>
                            </div>
                            <div>
                                <img src={img} alt='not found' />
                            </div>
                        </div>

                    </Container>
                </div>
            </div>
        </>
    );
};

export default Header;
