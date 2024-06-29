import React, { useEffect, useState } from 'react';

import img from '../../until/image/DeerfieldWind.jpg'
import OurProcess from '../Shared/OurProcess'


import WOW from 'wowjs';
import { Container } from '@mui/material';

import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
const WaterHeater = () => {


    const [activeTab, setActiveTab] = useState('Federal');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
        const wow = new WOW.WOW();
        wow.init();
    }, [])


    
    useEffect(() => {
        document.title = "Water Heater | Energy Sabal";
        return () => {
            document.title = "";
        };
    }, []);


    return (
        <div className='wow fadeInDown' data-wow-duration='1s' style={{ backgroundColor: '#E7F0E9', paddingTop: '100px' }}>
            <h1 style={{ textAlign: 'center', padding: '20px 0 50px 0' }}>A heat pump water heater can help you save energy and money</h1>
            <div style={{ padding: '0 0 50px 0' }}>
                <div>
                    <Container maxWidth="lg">
                        <div className='Energycontent'>
                            <div className='EnergyContentImage'>
                                <img src={img} alt='not found' />
                            </div>
                            <div>
                                <h4 style={{ fontWeight: '400', color: "#76867e" }}>
                                The most energy-efficient water heaters available are heat pump hot water heaters (HPWHs),
                                 sometimes known as hybrid hot water heaters or electric heat pump water heaters. Similar to heat pumps, HPWHs effectively transfer 
                                heat rather than producing it, saving the typical family hundreds of dollars annually.
                                </h4>

                                <div style={{ margin: '40px 0' }}>

                                    <h2> <FlashOnOutlinedIcon style={{ color: '#3b715a' }} /> WHY DO IT?</h2>

                                    <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>
                                    Heat pump water heaters function in all climates and are three to four times more efficient than conventional water heaters!

                                    </h4>

                                </div>


                                <div style={{ margin: '40px 0' }}>

                                    <h2> <FlashOnOutlinedIcon style={{ color: '#3b715a' }} /> WHEN?</h2>

                                    <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>

When your present water heater is around ten years old, in order to prevent an urgent replacement.

                                    </h4>
                                </div>


                                <div style={{ margin: '40px 0' }}>


                                    <h2> <FlashOnOutlinedIcon style={{ color: '#3b715a' }} /> WHO IS THIS FOR?</h2>

                                    <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>
                                    Homeowners
                                        </h4>
                                </div>
                            </div>
                        </div>


                  


                        <div style={{ backgroundColor: "#FFF", padding: "30px", marginTop: "40px", borderRadius: "15px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
                            <div className='box-price'>
                                <div>
                                    <h3> UPFRONT COST</h3>
                                    <h1 style={{ marginBottom: '0' }}> $3,600–$4,800 </h1>
                                    <h3 style={{ margin: '0' }}>(not including wiring)</h3>
                                </div>
                                <div>
                                    <h3> AVERAGE LIFESPAN</h3>
                                    <h1> 10–15 years</h1>
                                </div>
                                <div>
                                    <h3> AVERAGE ANNUAL ENERGY SAVINGS</h3>
                                    <h1> $80–$230 annually</h1>
                                </div>

                                <div>
                                    <h3>FEATURES</h3>

                                    <h4> Heat pump water heaters cool and remove humidity from the surrounding area</h4>
                                </div>

                                <div>
                                    <h3>DIFFICULTY</h3>

                                    <h4 >
                                    Moderate, we will get an HVAC or plumber to do the installation
                                    </h4>
                                </div>

                                <div>
                                    <h3>ENERGY SAVINGS</h3>

                                    <h4> Three to four times as efficient as traditional water heaters</h4>
                                </div>
                            </div>


                            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#3b715a', color: "#FFF", borderRadius: '10px' }}>
                                <div>
                                    <FlashOnOutlinedIcon style={{ color: '#fff', fontSize: '42px' }} />
                                    <FlashOnOutlinedIcon style={{ color: '#fff', fontSize: '42px' }} />
                                </div>

                                <h2> Our Conclusion</h2>

                                <p style={{ color: "#C7CCCA" }}>

                                Water heaters with heat pumps are safer, more efficient, and cleaner. Switching
                                 to a heat pump water heater will save you money on utility bills and be better for the environment.       
                                                          </p>
                            </div>
                        </div>


                        <h1 style={{ padding: '40px 0 40px 0', textAlign: 'center' }}>Rebates and Credits</h1>
                        <div style={{ textAlign: 'center', backgroundColor: "#fff", borderRadius: '15px', margin: "20px 0" }}>


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
                                    <h2>$2,000 off a water heater with a heat pump</h2>

                                    <h4 style={{ margin: '10px 0', color: "#76867e", fontWeight: "BOLD" }}> 

                                    Federal Energy Efficient Home Improvement Credit (25C)                                    </h4>

                                    <h4 style={{ color: "#76867e" }}>
                                    A 30% tax credit, up to $2,000, is available for water heaters with heat pumps. annually reset.
                                        
                                        </h4>


                                    <button> TAX CREDIT</button>

                                    {/* <SystemSecurityUpdateWarningIcon style={{fontSize:'13px' , marginTop:'2px'}}/>  */}
                                    {/* <button> EXPECTED IN 2025</button> */}
                                </div>}

                          



                                <div className='Request'>

                                    <h1> Request a personalized plan to access more incentives</h1>

                                    <h3> Make an electrification plan in order to see a tailored list of federal, state, utility, and local incentives.</h3>

                                    <button> Make Plan</button>

                                </div>
                            </div>
                        </div>




                    </Container>
                    <OurProcess />
                    {/* <Process /> */}
                </div>
            </div>


        </div>
    );
};

export default WaterHeater;
