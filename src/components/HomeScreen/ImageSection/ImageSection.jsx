import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import './ImageSection.css';
const ImageSection = () => {
    return (
        <div className="background-container">
            <div className="overlay">
                <Container maxWidth='lg'>
                    <div className="centered-text">
                        <h1>STILL PREFER DIRECT CONTACT? TALK TO <br />
                            ONE OF OUR ELECTRIFICATION ADVISORS</h1>
                        <button>Contact Us</button>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default ImageSection;
