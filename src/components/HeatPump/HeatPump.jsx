import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import WOW from 'wowjs';
import img from '../../until/image/DeerfieldWind.jpg'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import Process from '../PlanScreen/Process/Process';

import SystemSecurityUpdateWarningIcon from '@mui/icons-material/SystemSecurityUpdateWarning';
const HeatPump = () => {

    const [activeTab, setActiveTab] = useState('Federal');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
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


    useEffect(() => {
        document.title = "HeatPump | Energy Sabal";
        return () => {
            document.title = "";
        };
    }, []);

    return (
        <div className='wow fadeInDown' data-wow-duration='1s' style={{ backgroundColor: '#E7F0E9', paddingTop: '100px' }}>
            <h1 style={{ textAlign: 'center', padding: '20px 0 50px 0' }}>Upgrade to an energy-saving heat pump clothes dryer</h1>

            <div style={{ padding: '0 0 50px 0' }}>
                <div>
                    <Container maxWidth="lg">
                        <div className='Energycontent'>
                            <div className='EnergyContentImage'>
                                <img src={img} alt='not found' />
                            </div>
                            <div>
                                <h4 style={{ fontWeight: '400' }}>
                                    While we enjoy using all kinds of electric clothes dryers, heat
                                    pump models are our favourites. Heat pump dryers are kinder
                                    on clothing, consume less energy, and don’t require ventilation
                                </h4>

                                <h2> <ElectricBoltIcon style={{ color: '#80aa45' }} /> WHY DO IT?</h2>

                                <h4 style={{ fontWeight: '400' }}>
                                    The most energy-efficient kind of electric dryers are heat pump
                                    models, which don’t emit carbon dioxide or burn fossil fuels
                                </h4>


                                <h2> <ElectricBoltIcon style={{ color: '#80aa45' }} /> WHEN?</h2>

                                <h4 style={{ fontWeight: '400' }}>When the life of your existing dryer is almost over.</h4>

                                <h2> <ElectricBoltIcon style={{ color: '#80aa45' }} /> WHO IS THIS FOR?</h2>

                                <h4 style={{ fontWeight: '400' }}>Homeowners and renters.
                                </h4>
                            </div>
                        </div>



                        <div style={{ backgroundColor: "#FFF", padding: "30px", marginTop: "40px", borderRadius: "15px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
                            <div className='box-price'>
                                <div>
                                    <h3> UPFRONT COST</h3>
                                    <h4> $1,000+</h4>
                                </div>
                                <div>
                                    <h3> UPFRONT COST</h3>
                                    <h4> $1,000+</h4>
                                </div>
                                <div>
                                    <h3> UPFRONT COST</h3>
                                    <h4> $1,000+</h4>
                                </div>

                                <div>
                                    <h3>FEATURES</h3>

                                    <h4> Place it anywhere
                                        in the house; no
                                        ventilation is
                                        needed</h4>
                                </div>

                                <div>
                                    <h3>FEATURES</h3>

                                    <h4> Place it anywhere
                                        in the house; no
                                        ventilation is
                                        needed</h4>
                                </div>

                                <div>
                                    <h3>FEATURES</h3>

                                    <h4> Place it anywhere
                                        in the house; no
                                        ventilation is
                                        needed</h4>
                                </div>
                            </div>


                            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#3b715a', color: "#FFF", borderRadius: '10px' }}>
                                <div>
                                    <ElectricBoltIcon style={{ color: '#fff', fontSize: '42px' }} />
                                    <ElectricBoltIcon style={{ color: '#fff', fontSize: '42px' }} />
                                </div>

                                <h2> Our Conclusion</h2>

                                <p>
                                    Heat Pump clothes dryers are environmentally friendly and highly
                                    effective
                                </p>
                            </div>
                        </div>


                        <div style={{ textAlign: 'center', backgroundColor: "#fff", borderRadius: '15px' }}>

                            <h1 style={{ padding: '20px 0 20px 0' }}>Rebates and Credits</h1>

                            <div className='Tabs-option'>
                                <div className='Tabs'>

                                    {['Federal', 'State', 'Local', 'Utility'].map((tab) => (
                                        <span
                                            key={tab}
                                            className={activeTab === tab ? 'active' : ''}
                                            onClick={() => handleTabClick(tab)}
                                        >
                                            {tab}
                                        </span>
                                    ))}

                                </div>



                                {activeTab == 'Federal' && <div className='des-option'>
                                    <h2> $840 off Heat Pump Clothes Dryer</h2>

                                    <h4> Federal Home Electrification and Appliance Rebates (HEAR)</h4>

                                    <h4>Rebate for heat pump dryers of up to $840. Low-income households: 100% rebate, Moderate income: 50% rebate.</h4>


                                    <button>REBATE</button>

{/* <SystemSecurityUpdateWarningIcon style={{fontSize:'13px' , marginTop:'2px'}}/>  */}
                                    <button> EXPECTED IN 2025</button>
                                </div>}



                                <div className='Request'>

                                    <h1> Request a personalized plan to access more incentives</h1>

                                    <h3> Make an electrification plan in order to see a tailored list of federal</h3>
                                    <h3> state, utility, and local incentives.</h3>

                                    <button> Make Plan</button>

                                </div>
                            </div>
                        </div>




                    </Container>
                    {/* <Process /> */}
                </div>
            </div>


        </div>
    )
};

export default HeatPump;
