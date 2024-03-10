import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import './index.css';
import { Container } from '@mui/material';
import img from '../../../until/image/send/Group 196.svg'

const Header = () => {
    return (
        <>
            <div className='header'>
                <div>
                    <Container maxWidth="lg">
                        <div className='content'>
                            <div>
                                <h1> About Us</h1>
                                <p>
                                    At Energy Sabal, our vision is to revolutionize the
                                    electrification industry by providing innovative,
                                    sustainable solutions. We strive to make clean
                                    energy accessible to all, offering easy access to
                                    incentives and rebates for homes and businesses,
                                    paving the way to a greener, more sustainable
                                    world
                                </p>

                            </div>
                            <div>
                                <img style={{ height: '100%' }} src={img} alt='not found' />
                            </div>
                        </div>

                    </Container>
                </div>
            </div>
        </>
    );
};

export default Header;
