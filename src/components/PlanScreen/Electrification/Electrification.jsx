import React from 'react';
import './Electrification.css';
import { Container } from '@mui/material';
import HeatPumpOutlinedIcon from '@mui/icons-material/HeatPumpOutlined';
import SolarPowerOutlinedIcon from '@mui/icons-material/SolarPowerOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';

const Electrification = () => {
    return (
        <div style={{padding:'50px 0'}}>
            <Container maxWidth="lg">
                <div className='titleTailored'>
                    <h1>Explore Our <span> Electrification</span> Solutions</h1>
                    <h3>Catering to Your Every Electrification Need
                    </h3>
                </div>

                <div className='electrification-need'>
                    <div>
                        <HeatPumpOutlinedIcon className='electrification-icon' />
                        <h3>HeatPump</h3>
                        <p>Upgrade your water heating
                            system to an energy efficient
                            model</p>
                    </div>

                    <div>
                        <SolarPowerOutlinedIcon className='electrification-icon' />
                        <h3>Solar</h3>
                        <p>Harness the power of the sun
                            to generate clean electricity
                            for your home or business</p>
                    </div>

                    <div>
                        <WaterDropOutlinedIcon className='electrification-icon' />

                        <h3>Water Heater</h3>
                        <p>Enjoy hot water efficiently
                            with our modern water
                            heaters</p>
                    </div>



                    <div>
                        <WaterDropOutlinedIcon className='electrification-icon' />

                        <h3>Electrical Panel</h3>
                        <p>Upgrade your electrical panel
                            to pre-wire your home</p>
                    </div>



                    <div>
                        <WaterDropOutlinedIcon className='electrification-icon' />

                        <h3>EV Charger
                        </h3>
                        <p>Charge your electric vehicle
                            conveniently at home
                        </p>
                    </div>


                    <div>
                        <WaterDropOutlinedIcon className='electrification-icon' />

                        <h3>Cooktop
                        </h3>
                        <p>Cook sustainably with electric
                            power, reducing emissions
                            and protecting the
                            environment
                        </p>
                    </div>


                    <div>
                        <WaterDropOutlinedIcon className='electrification-icon' />

                        <h3>Oven
                        </h3>
                        <p>Bake delicious meals while
                            minimizing your
                            environmental impact
                        </p>
                    </div>

                    <div>
                        <WaterDropOutlinedIcon className='electrification-icon' />

                        <h3>Clothes Dryer
                        </h3>
                        <p>Dry your clothes efficiently
                            with a heat pump clothes
                            drye
                        </p>
                    </div>

                </div>

            </Container>

        </div>
    );
};

export default Electrification;
