import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import './ImageSection.css';
const ImageSection = () => {
    return (
        <div className="background-container">
            <div className="overlay">
                <Container maxWidth='lg'>
                    <div className="centered-text">
                        <p>Still prefer direct contact? </p>
                        <h1>
                        talk to one of our electrification advisors</h1>
                        <button>Contact Us</button>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default ImageSection;
