import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import './Header.css'
const Header = () => {
    return (
        <>
            <div className='header'>
                <div>
                    <Container maxWidth="xl">
                        <div className='content'>
                            <div>
                                <h1>Electrify Your Home</h1>
                                <p>Embrace the power of electrification and
                                    sustainable energy solutions. Cut annual energy
                                    costs and make a meaningful impact against
                                    climate change
                                </p>
                                <button>Make Plan</button>
                            </div>
                            <div>
                                <img src='https://recycalyse.eu/wp-content/uploads/shutterstock_572652394.jpg' alt='not found' />
                            </div>
                        </div>
                   
                    </Container>
                </div>
            </div>
        </>
    )
};

export default Header;
