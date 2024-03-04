import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import home from '../../../until/image/send/shutterstock_1561073777.jpg'
const Header = () => {
    return (
        <>
            <div className='header'>
                <div>
                    <Container maxWidth="lg">
                        <div className='content'>
                            <div>
                                <h1>Your Partner in Electrification</h1>
                                <p>Join our contractor network and empower clients
                                    with efficient, eco friendly electrification solutions.
                                    Optimize incentives and financing, ensuring
                                    prompt payment while we handle administrative
                                    tasks
                                </p>
                            </div>
                            <div>
                                <img src={home} alt='not found' />
                            </div>
                        </div>

                    </Container>
                </div>
            </div>
        </>
    )
};

export default Header;
