import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Container } from '@mui/material';

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
                                <button>Receive Report
                                </button>
                            </div>
                            <div>
                                <img src='https://soleil.axiomthemes.com/wp-content/uploads/2022/11/portfolio-image8.jpg' alt='not found' />
                            </div>
                        </div>

                    </Container>
                </div>
            </div>
        </>
    );
};

export default Header;
