import React, { useEffect, useState } from 'react';

import img from '../../until/image/DeerfieldWind.jpg'
import OurProcess from '../Shared/OurProcess'


import WOW from 'wowjs';
import { Container } from '@mui/material';

import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
const Solar = () => {


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
        document.title = "Solar | Energy Sabal";
        return () => {
            document.title = "";
        };
    }, []);


    return (
        <div className='wow fadeInDown' data-wow-duration='1s' style={{ backgroundColor: '#E7F0E9', paddingTop: '100px' }}>
            <h1 style={{ textAlign: 'center', padding: '20px 0 50px 0' }}>Utilise sustainable, renewable energy to power your home</h1>
            <div style={{ padding: '0 0 50px 0' }}>
                <div>
                    <Container maxWidth="lg">
                        <div className='Energycontent'>
                            <div className='EnergyContentImage'>
                                <img src={img} alt='not found' />
                            </div>
                            <div>
                                <h4 style={{ fontWeight: '400', color: "#76867e" }}>
                                    Solar photovoltaic (PV) panels on rooftops convert sunshine into electricity. You can put
                                    PV panels in your yard or even on your roof. They can save you thousands of dollars year and emit
                                    no carbon. Should rooftop solar power
                                    prove unsatisfactory, you might be eligible to partake in a Community Solar initiative.
                                </h4>

                                <div style={{ margin: '40px 0' }}>

                                    <h2> <FlashOnOutlinedIcon style={{ color: '#3b715a' }} /> WHY DO IT?</h2>

                                    <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>
                                        Produces carbon-free energy for your house and save money doing so.

                                    </h4>

                                </div>


                                <div style={{ margin: '40px 0' }}>

                                    <h2> <FlashOnOutlinedIcon style={{ color: '#3b715a' }} /> WHEN?</h2>

                                    <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>

                                        You can, as long as you intend to replace your roof very soon or install one for the first time.
                                    </h4>
                                </div>


                                <div style={{ margin: '40px 0' }}>


                                    <h2> <FlashOnOutlinedIcon style={{ color: '#3b715a' }} /> WHO IS THIS FOR?</h2>

                                    <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>For homeowners: rooftop solar. For renters: community solar.</h4>
                                </div>
                            </div>
                        </div>


                        <div className='Energycontent'>
                            <div className='EnergyContentImage'>
                                <img src={img} alt='not found' />
                            </div>


                            <div>


                                <div style={{ margin: '10px 0' }}>
                                    <h2 style={{ fontWeight: 'bold' }}> Battery Storage at Home</h2>
                                </div>
                                <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>
                                    Rooftop solar can power your house during blackouts in the case that your home is
                                    equipped with home battery storage.
                                    You can also store solar energy for use at night with home battery storage.
                                </h4>







                            </div>

                        </div>



                        <div style={{ backgroundColor: "#FFF", padding: "30px", marginTop: "40px", borderRadius: "15px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
                            <div className='box-price'>
                                <div>
                                    <h3> UPFRONT COST</h3>
                                    <h1 style={{ marginBottom: '0' }}> $17,000–$24,000</h1>
                                    <h3 style={{ margin: '0' }}>(after tax credits)</h3>
                                </div>
                                <div>
                                    <h3> AVERAGE LIFESPAN</h3>
                                    <h1> 20 - 30 years</h1>
                                </div>
                                <div>
                                    <h3> AVERAGE ANNUAL ENERGY SAVINGS</h3>
                                    <h1> $1,000+</h1>
                                </div>

                                <div>
                                    <h3>FEATURES</h3>

                                    <h4> Carbon-free, free electricity.</h4>
                                </div>

                                <div>
                                    <h3>DIFFICULTY</h3>

                                    <h4 >

                                        Moderate, we will hire a solar installer.
                                    </h4>
                                </div>

                                <div>
                                    <h3>ENERGY SAVINGS</h3>

                                    <h4> Carbon-free electricity.</h4>
                                </div>
                            </div>


                            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#3b715a', color: "#FFF", borderRadius: '10px' }}>
                                <div>
                                    <FlashOnOutlinedIcon style={{ color: '#fff', fontSize: '42px' }} />
                                    <FlashOnOutlinedIcon style={{ color: '#fff', fontSize: '42px' }} />
                                </div>

                                <h2> Our Conclusion</h2>

                                <p style={{ color: "#C7CCCA" }}>

                                    Rooftop solar can save you hundreds of dollars annually and emits no carbon emissions
                                </p>
                            </div>
                        </div>




                        {/*  END */}
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
                                    <h2>30% off Battery Storage</h2>

                                    <h4 style={{ margin: '10px 0', color: "#76867e", fontWeight: "BOLD" }}> Federal Residential Clean Energy Credit (25D)</h4>

                                    <h4 style={{ color: "#76867e" }}>A 30% uncapped tax credit, valued at $4,800 on average, is available for battery storage systems.</h4>


                                    <button> TAX CREDIT</button>

                                    {/* <SystemSecurityUpdateWarningIcon style={{fontSize:'13px' , marginTop:'2px'}}/>  */}
                                    {/* <button> EXPECTED IN 2025</button> */}
                                </div>}

                                {activeTab == 'Federal' && <div className='des-option'>
                                    <h2>$4,100 off Rooftop Solar</h2>

                                    <h4 style={{ margin: '10px 0', color: "#76867e", fontWeight: "BOLD" }}> Federal Residential Clean Energy Credit (25D)</h4>

                                    <h4 style={{ color: "#76867e" }}>

                                        Rooftop solar offers a 30% tax credit (uncapped, $4,600 average); panel upgrades also qualify. Leased or community solar may qualify
                                        for bonuses of 10%–20% in low-income areas.
                                    </h4>


                                    <button> TAX CREDIT</button>
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

export default Solar;
