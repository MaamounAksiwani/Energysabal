import React from 'react';
import './Electrification.css';
import { Container } from '@mui/material';
import HeatPumpOutlinedIcon from '@mui/icons-material/HeatPumpOutlined';
import SolarPowerOutlinedIcon from '@mui/icons-material/SolarPowerOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import { useNavigate } from 'react-router';

import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import EvStationOutlinedIcon from '@mui/icons-material/EvStationOutlined';
import HdrWeakOutlinedIcon from '@mui/icons-material/HdrWeakOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Electrification = () => {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
    };
    return (
        <div style={{ paddingBottom: '50px' }}>
            <Container maxWidth="lg">
                <div className='titleTailored'>
                    <h1>Explore Our <span> Electrification</span> Solutions</h1>
                    <h3>Catering to your every electrification need
                    </h3>
                </div>

                <div className='electrification-need'>
                    <div>
                        <HeatPumpOutlinedIcon className='electrification-icon' />
                        <h3>HeatPump</h3>
                        <p>Upgrade your water heating
                            system to an energy efficient
                            model</p>
                        <ArrowRightAltIcon className='arrow-icon' onClick={() => handleLinkClick('/HeatPump')} />
                    </div>

                    <div>
                        <SolarPowerOutlinedIcon className='electrification-icon' />
                        <h3>Solar</h3>
                        <p>Harness the power of the sun
                            to generate clean electricity
                        </p>

                        <ArrowRightAltIcon className='arrow-icon' />
                    </div>

                    <div>
                        <WaterDropOutlinedIcon className='electrification-icon' />

                        <h3>Water Heater</h3>
                        <p>Enjoy hot water efficiently
                            with our modern water
                            heaters</p>

                        <ArrowRightAltIcon className='arrow-icon' />
                    </div>



                    <div>
                        <DeveloperBoardOutlinedIcon className='electrification-icon' />

                        <h3>Electrical Panel</h3>
                        <p>Upgrade your electrical panel
                            to pre-wire your home</p>

                        <ArrowRightAltIcon className='arrow-icon' />
                    </div>



                    <div>
                        <EvStationOutlinedIcon className='electrification-icon' />

                        <h3>EV Charger
                        </h3>
                        <p>Charge your electric vehicle
                            conveniently at home
                        </p>
                        <ArrowRightAltIcon className='arrow-icon' />
                    </div>


                    <div>
                        <HdrWeakOutlinedIcon className='electrification-icon' />
                        <h3>Cooktop
                        </h3>
                        <p>Cook sustainably with electric
                            power to reduce emissions

                        </p>

                        <ArrowRightAltIcon className='arrow-icon' />
                    </div>


                    <div>
                        <IndeterminateCheckBoxOutlinedIcon className='electrification-icon' />


                        <h3>Oven
                        </h3>
                        <p>Bake delicious meals while
                            minimizing your
                            environmental impact
                        </p>
                        <ArrowRightAltIcon className='arrow-icon' />
                    </div>

                    <div>
                        <LocalLaundryServiceOutlinedIcon className='electrification-icon' />

                        <h3>Clothes Dryer
                        </h3>
                        <p>Dry your clothes efficiently
                            with a heat pump clothes
                            drye
                        </p>

                        <ArrowRightAltIcon className='arrow-icon' />
                    </div>

                </div>

            </Container>

        </div>
    );
};

export default Electrification;
