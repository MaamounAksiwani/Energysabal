import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import './ImageSection.css';
import { useNavigate } from 'react-router';
const ImageSection = () => {




  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };
    return (
        <div className="background-container">
            <div className="overlay">
                <Container maxWidth='lg'>
                    <div className="centered-text">
                        <p>Still prefer direct contact? </p>
                        <h1>
                        Talk to One of Our Electrification Advisors</h1>
                        <button onClick={()=>{handleLinkClick('/Contact')}}>Contact Us</button>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default ImageSection;
