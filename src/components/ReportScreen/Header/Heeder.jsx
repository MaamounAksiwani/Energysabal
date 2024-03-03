import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import home from '../../../until/image/shutterstock_2040549122.jpg'

const Header = () => {
    return (
        <>
            <div className='header'>
                <div>
                    <Container maxWidth="lg">
                        <div className='content'>
                            <div>
                                <h1>All the Insights You Need
                                </h1>
                                <p>
                                    Our reports provide comprehensive insights and
                                    recommendations to guide you through your
                                    electrification project. Whether you’re seeking
                                    basic insights or in depth analysis, we have the
                                    solution for you

                                </p>
                                <button style={{backgroundColor:' #80aa45'}}>Receive Report
                                </button>
                            </div>
                            <div>
                                <img src={home} alt='not found' />
                            </div>
                        </div>

                    </Container>
                </div>
            </div>
        </>
    );
};

export default Header;
