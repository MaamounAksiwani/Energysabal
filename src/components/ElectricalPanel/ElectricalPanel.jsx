import React, { useEffect, useState } from 'react';

import img from '../../until/image/DeerfieldWind.jpg'
import OurProcess from '../Shared/OurProcess'


import WOW from 'wowjs';
import { Container } from '@mui/material';

import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
const ElectricalPanel = () => {


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
        document.title = "Electrical Panel | Energy Sabal";
        return () => {
            document.title = "";
        };
    }, []);


    return (
        <div className='wow fadeInDown' data-wow-duration='1s' style={{ backgroundColor: '#E7F0E9', paddingTop: '100px' }}>
            <h1 style={{ textAlign: 'center', padding: '20px 0 50px 0' }}>
                Prepare your house for electrification
            </h1>
            <div style={{ padding: '0 0 50px 0' }}>
                <div>
                    <Container maxWidth="lg">
                        <div className='Energycontent'>
                            <div className='EnergyContentImage'>
                                <img src={img} alt='not found' />
                            </div>
                            <div>
                                <h4 style={{ fontWeight: '400', color: "#76867e" }}>
                                    An electrician is probably going to be needed to pre-wire your home, regardless of
                                    how many appliances you electrify. With careful planning, most
                                    houses can use their current panel to electrify every room in their house.
                                </h4>

                                <div style={{ margin: '40px 0' }}>

                                    <h2> <FlashOnOutlinedIcon style={{ color: '#3b715a' }} /> WHY DO IT?</h2>

                                    <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>

                                        Your home’s electricity consumption will rise when you convert your
                                        fossil fuel-burning appliances to electric ones, and many of them will require a new electrical circuit.
                                    </h4>

                                </div>


                                <div style={{ margin: '40px 0' }}>

                                    <h2> <FlashOnOutlinedIcon style={{ color: '#3b715a' }} /> WHEN?</h2>

                                    <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>
                                        To save you time and money, consider this before beginning any home electrical tasks.

                                    </h4>
                                </div>


                                <div style={{ margin: '40px 0' }}>


                                    <h2> <FlashOnOutlinedIcon style={{ color: '#3b715a' }} /> WHO IS THIS FOR?</h2>

                                    <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>
                                        Homeowners.
                                    </h4>
                                </div>
                            </div>
                        </div>





                        <div style={{ backgroundColor: "#FFF", padding: "30px", marginTop: "40px", borderRadius: "15px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
                            <div className='box-price_'>
                                <div>
                                    <h3> PANEL UPGRADE UPFRONT COST</h3>
                                    <h1 style={{ marginBottom: '0' }}> $2,000+</h1>
                                </div>
                                <div>
                                    <h3> WIRING UPFRONT COST</h3>
                                    <h1> $800–$1,500 per circuit</h1>
                                </div>
                             
                                <div>
                                    <h3>DIFFICULTY</h3>

                                    <h4>

                                        Moderate, we will hire an electrician
                                    </h4>
                                </div>

                                <div>
                                    <h3>BENEFITS</h3>

                                    <h4 >

                                        permits all other electrification initiatives
                                    </h4>
                                </div>


                            </div>


                            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#3b715a', color: "#FFF", borderRadius: '10px' }}>
                                <div>
                                    <FlashOnOutlinedIcon style={{ color: '#fff', fontSize: '42px' }} />
                                    <FlashOnOutlinedIcon style={{ color: '#fff', fontSize: '42px' }} />
                                </div>

                                <h2> Our Conclusion</h2>

                                <p style={{ color: "#C7CCCA" }}>
                                    By preparing ahead of time and performing electrical work up front,
                                    you can expedite, simplify, and lower the cost of electrification.


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
                                    <h2>$600 off an electric panel</h2>

                                    <h4 style={{ margin: '10px 0', color: "#76867e", fontWeight: "BOLD" }}>

                                        Federal Energy Efficient Home Improvement Credit (25C)

                                    </h4>

                                    <h4 style={{ color: "#76867e" }}>

                                        When combined with another 25C or 25D improvement, a 30% tax credit (up to $600) is available for electrical panel upgrades. annually reset.
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

export default ElectricalPanel;
