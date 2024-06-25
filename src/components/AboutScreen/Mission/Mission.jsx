import React from 'react';
import { Container } from '@mui/material';
import HeatPumpOutlinedIcon from '@mui/icons-material/HeatPumpOutlined';
import SolarPowerOutlinedIcon from '@mui/icons-material/SolarPowerOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';


import SpaTwoToneIcon from '@mui/icons-material/SpaTwoTone';
import PowerTwoToneIcon from '@mui/icons-material/PowerTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';


const Mission = () => {
    return (
        <div style={{ paddingBottom: '50px', backgroundColor:'#3b715a' }}>
            <Container maxWidth="lg">
                <div className='titleTailored MissionCardTitle'>
                    <h1> Our Mission
                    </h1>

                </div>

                <div className='electrification-need MissionCard'>
                    <div>
                        <SpaTwoToneIcon className='Mission-icon' />
                        <h3>Empowerment</h3>
                        <p> Empower individuals and
                            businesses to embrace
                            sustainable electrification
                            solutions, with easy access to
                            incentives and rebates.</p>
                    </div>

                    <div>
                        <PowerTwoToneIcon className='Mission-icon' />
                        <h3>Accessibility</h3>
                        <p> Provide reliable, cost effective
                            products and services to
                            streamline the transition to
                            clean energy, making
                            sustainable electrification
                            accessible to all.
                        </p>

                    </div>

                    <div>
                        <PublicTwoToneIcon className='Mission-icon' />

                        <h3>Sustainability</h3>
                        <p>
                            Foster a greener future by
                            ensuring easy access to
                            incentives and rebates, making
                            sustainable electrification
                            attainable for everyone.
                        </p>

                    </div>
                </div>

            </Container>

        </div>
    );
};

export default Mission;
