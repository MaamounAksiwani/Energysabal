import React, { useState } from 'react';
import { Container } from '@mui/material';
import img from '../../../until/image/send/pexels-scott-webb-136740.jpg'
const Story = () => {
    const paragraphStyle = {
        color: '#76867e',
        marginBottom: '10px',
        fontSize: '13px',
        fontWeight: 300,
        letterSpacing: '1px',
    };
    return (
        <>
            <div className='Energyheader'>
                <div>
                    <Container maxWidth="lg">
                        <div className='Energycontent'>
                            <div className='EnergyContentImage'>
                                <img src={img} alt='not found' />
                            </div>
                            <div>
                                <p style={paragraphStyle}>
                                    OUR STORY

                                </p>
                                <h2>
                                    Energy Sabal draws inspiration from the sabal palm, a
                                    resilient symbol of growth and strength. Our journey
                                    began with a vision to revolutionize the energy
                                    landscape, embracing renewable solutions for a
                                    greener future.
                                </h2>



                                <h2>
                                    Today, we stand committed to integrity, innovation,
                                    and sustainability, empowering individuals and
                                    businesses to embrace clean energy. Join us in
                                    shaping a brighter tomorrow, powered by Energy
                                    Sabal.
                                </h2>
                            </div>
                        </div>

                    </Container>
                </div>
            </div>
        </>
    )
};

export default Story;
