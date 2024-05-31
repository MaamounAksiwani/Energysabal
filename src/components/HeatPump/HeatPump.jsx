import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import WOW from 'wowjs';
import img from '../../until/image/DeerfieldWind.jpg'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const HeatPump = () => {


    const paragraphStyle = {
        color: '#76867e',
        marginBottom: '10px',
        fontSize: '13px',
        fontWeight: 300,
        letterSpacing: '1px',
    };

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='wow fadeInDown' data-wow-duration='1s' style={{ backgroundColor: '#E7F0E9', paddingTop: '100px' }}>
            {/* <div> */}
            <h1 style={{ textAlign: 'center', padding: '20px 0 50px 0' }}>Upgrade to an energy-saving heat pump clothes dryer</h1>

            <div style={{ padding: '0 0 50px 0' }}>
                <div>
                    <Container maxWidth="lg">
                        <div className='Energycontent'>
                            <div className='EnergyContentImage'>
                                <img src={img} alt='not found' />
                            </div>
                            <div>
                                <h4 style={{fontWeight:'400'}}>
                                    While we enjoy using all kinds of electric clothes dryers, heat
                                    pump models are our favourites. Heat pump dryers are kinder
                                    on clothing, consume less energy, and don’t require ventilation
                                </h4>

                                <h2> <ElectricBoltIcon style={{color:'#80aa45'}}/> WHY DO IT?</h2>

                                <h4 style={{fontWeight:'400'}}>
                                    The most energy-efficient kind of electric dryers are heat pump
                                    models, which don’t emit carbon dioxide or burn fossil fuels
                                </h4>


                                <h2> <ElectricBoltIcon style={{color:'#80aa45'}}/> WHEN?</h2>

                                <h4 style={{fontWeight:'400'}}>When the life of your existing dryer is almost over.</h4>

                                <h2> <ElectricBoltIcon style={{color:'#80aa45'}}/> WHO IS THIS FOR?</h2>

                                <h4 style={{fontWeight:'400'}}>Homeowners and renters.
                                </h4>
                            </div>
                        </div>

                    </Container>
                </div>
            </div>
        </div>
    )
};

export default HeatPump;
