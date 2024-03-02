import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';

const SectionText = () => {

    return (
        <div style={{ backgroundColor: '#80AA45', padding: '50px 0 ', textAlign: 'center' }} >
            <Container maxWidth='lg'>
                <h1 style={{color:'#10271D', fontSize:'25px', fontWeight:'500' , padding:'25px'}}>Ready to take the first step towards a greener, more sustainable
                    future? Choose the option that best suits your needs and fill out our
                    online form to get started with your free Energy Sabal electrification
                    report today. Our team will generate your report promptly</h1>
            </Container>
        </div>
    );
};

export default SectionText;
