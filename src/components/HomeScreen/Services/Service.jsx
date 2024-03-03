import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import './Service.css';
import HeatPumpOutlinedIcon from '@mui/icons-material/HeatPumpOutlined';
import SolarPowerOutlinedIcon from '@mui/icons-material/SolarPowerOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import EvStationOutlinedIcon from '@mui/icons-material/EvStationOutlined';
import HdrWeakOutlinedIcon from '@mui/icons-material/HdrWeakOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
const Services = () => {

    return (
        <div className='main-service'>

            <Container maxWidth='lg' style={{ padding: '100px 0' }}>

                <div className='service-container'>
                    <div className='contact'>
                        <p> INSTALLATION SERVICES</p>
                        <h1> Your One Stop <br /> Electrification Destination
                        </h1>
                    </div>
                    <div>
                        <p>With us, you can rest assured that all your energy needs will be met under one roof. Say goodbye to the
                            hassle of coordinating multiple contractors.
                        </p>
                        <p>
                            We handle it all for you. From A to Z, Energy Sabal ensures a seamless experience, making
                            your electrification journey smooth and stress free.
                        </p>
                    </div>
                </div>


                <div className='service'>
                    <div>
                        <HeatPumpOutlinedIcon className='service-icon' />
                        <h3>Heat Pump</h3>
                        <ArrowRightAltIcon style={{ color: '#FFF', cursor: 'pointer' }} className='arrow-icon' />
                    </div>

                    <div>
                        <SolarPowerOutlinedIcon className='service-icon' />
                        <h3>Solar</h3>
                        <ArrowRightAltIcon style={{ color: '#FFF', cursor: 'pointer' }} className='arrow-icon' />
                    </div>

                    <div>
                        <WaterDropOutlinedIcon className='service-icon' />
                        <h3>Water Heater</h3>
                        <ArrowRightAltIcon style={{ color: '#FFF', cursor: 'pointer' }} className='arrow-icon' />
                    </div>


                    <div>
                        <DeveloperBoardOutlinedIcon className='service-icon' />
                        <h3>Electrical Panel</h3>
                        <ArrowRightAltIcon style={{ color: '#FFF', cursor: 'pointer' }} className='arrow-icon' />
                    </div>

                    <div>
                        <EvStationOutlinedIcon className='service-icon' />
                        <h3>EV Charger</h3>
                        <ArrowRightAltIcon style={{ color: '#FFF', cursor: 'pointer' }} className='arrow-icon' />
                    </div>

                    <div>
                        <HdrWeakOutlinedIcon className='service-icon' />
                        <h3>Cooktop</h3>
                        <ArrowRightAltIcon style={{ color: '#FFF', cursor: 'pointer' }} className='arrow-icon' />
                    </div>

                    <div>
                        <IndeterminateCheckBoxOutlinedIcon className='service-icon'/>
                        <h3>Oven</h3>
                        <ArrowRightAltIcon style={{ color: '#FFF', cursor: 'pointer' }} className='arrow-icon' />
                    </div>
                    
                    <div>
                        <LocalLaundryServiceOutlinedIcon className='service-icon' />
                        <h3>Clothes Dryer</h3>
                        <ArrowRightAltIcon style={{ color: '#FFF', cursor: 'pointer' }} className='arrow-icon' />
                    </div>


                </div>

            </Container>
        </div>

    )
};

export default Services;
