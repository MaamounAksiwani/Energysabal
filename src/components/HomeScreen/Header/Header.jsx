import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import './Header.css';
import home from '../../../until/image/home1.jpg'
const Header = () => {
    return (
        <>
            <div className='header'>
                <div>
                    <Container maxWidth="lg">
                        <div className='content'>
                            <div>
                                <h1>Electrify <br/> Your Home</h1>
                                <p>Embrace the power of electrification and
                                    sustainable energy solutions. Cut annual energy
                                    costs and make a meaningful impact against
                                    climate change
                                </p>
                                <button>Make Plan</button>
                            </div>
                            <div>
                                <img src='https://www.vgx.nl/wp-content/uploads/2022/11/post-image5-1024x1024.jpg' alt='not found' />
                            </div>
                        </div>
                   
                    </Container>
                </div>
            </div>
        </>
    )
};

export default Header;
