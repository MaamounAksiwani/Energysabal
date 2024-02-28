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
const Services = () => {

    return (
        <div className='main-service'>

            <Container maxWidth='lg' style={{ padding: '150px 0' }}>

                <div className='service-container'>
                    <div className='contact'>
                        <p>YOUR ONE-STOP</p>
                        <h1>ELECTRIFICATION DESTINATION
                        </h1>
                    </div>
                    <div>
                        <p>With us, you can rest assured that all your energy needs will be met under one roof. Say goodbye to the hascontractors—we handle it all for you
                            From A to Z, Energy Sabal ensures a seamless experience, making ysmooth and stress free.</p>
                    </div>
                </div>


                <div className='service'>
                    <div>
                        <HeatPumpOutlinedIcon className='service-icon' />
                        <h3>HeatPumpOutlinedIcon</h3>
                        <ArrowRightAltIcon style={{color:'#FFF' , cursor:'pointer'}}/>
                    </div>

                    <div>
                        <SolarPowerOutlinedIcon className='service-icon'/>
                        <h3>Solar</h3>
                        <ArrowRightAltIcon style={{color:'#FFF' , cursor:'pointer'}}/>
                    </div>

                    <div>
                        <WaterDropOutlinedIcon  className='service-icon'/>
                        <h3>Water Heater</h3>
                        <ArrowRightAltIcon style={{color:'#FFF' , cursor:'pointer'}}/>
                    </div>


                    <div>
                        <DeveloperBoardOutlinedIcon  className='service-icon'/>
                        <h3>Panel Upgrade</h3>
                        <ArrowRightAltIcon style={{color:'#FFF' , cursor:'pointer'}}/>
                    </div>

                    <div>
                        <EvStationOutlinedIcon className='service-icon' />
                        <h3>EV Charging</h3>
                        <ArrowRightAltIcon style={{color:'#FFF' , cursor:'pointer'}}/>
                    </div>

                    <div>
                        <HdrWeakOutlinedIcon className='service-icon' />
                        <h3>Kitchen</h3>
                        <ArrowRightAltIcon style={{color:'#FFF' , cursor:'pointer'}}/>
                    </div>

                    <div>
                        <LocalLaundryServiceOutlinedIcon className='service-icon' />
                        <h3>Clothes Dryer</h3>
                        <ArrowRightAltIcon style={{color:'#FFF' , cursor:'pointer'}}/>
                    </div>


                </div>

            </Container>
        </div>

    )
};

export default Services;
