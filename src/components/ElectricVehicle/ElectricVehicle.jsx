import React, { useEffect, useState } from 'react';

import img from '../../until/image/DeerfieldWind.jpg'
import OurProcess from '../Shared/OurProcess'


import WOW from 'wowjs';
import { Container } from '@mui/material';

import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
const ElectricVehicle = () => {


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
        document.title = "Electric Vehicle | Energy Sabal";
        return () => {
            document.title = "";
        };
    }, []);


    return (
        <div className='wow fadeInDown' data-wow-duration='1s' style={{ backgroundColor: '#E7F0E9', paddingTop: '100px' }}>
            <h1 style={{ textAlign: 'center', padding: '20px 0 50px 0' }}>
                Use a better, quicker, and cleaner vehicle when driving an electric one
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

                                    In addition to being more environmentally friendly,
                                    electric vehicles (EVs) are more efficient than gas-powered automobiles and
                                    trucks. Investing in an electric vehicle is a fantastic starting point for electrifying everything!
                                </h4>

                                <div style={{ margin: '40px 0' }}>

                                    <h2> <FlashOnOutlinedIcon style={{ color: '#3b715a' }} /> WHY DO IT?</h2>

                                    <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>
                                        Compared to gas-powered cars, electric vehicles (EVs) offer lower fuel expenses per year, require less maintenance, and emit no tailpipe emissions.

                                    </h4>

                                </div>


                                <div style={{ margin: '40px 0' }}>

                                    <h2> <FlashOnOutlinedIcon style={{ color: '#3b715a' }} /> WHEN?</h2>

                                    <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>

                                        When your present gas-powered car is ready to be replaced.

                                    </h4>
                                </div>


                                <div style={{ margin: '40px 0' }}>


                                    <h2> <FlashOnOutlinedIcon style={{ color: '#3b715a' }} /> WHO IS THIS FOR?</h2>

                                    <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>
                                        Every owner of a vehicle.
                                    </h4>
                                </div>
                            </div>
                        </div>


                        <div className='Energycontent'>
                            <div className='EnergyContentImage'>
                                <img src={img} alt='not found' />
                            </div>


                            <div>


                                <div style={{ margin: '10px 0' }}>
                                    <h2 style={{ fontWeight: 'bold' }}> EV Charger</h2>
                                </div>
                                <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>
                                    Your EV can be charged considerably more quickly using a Level 2 EV charger than it can with a
                                    regular outlet, but it is not necessary. A 240 volt circuit is needed to install a Level 2 charger.
                                </h4>







                            </div>

                        </div>



                        <div style={{ backgroundColor: "#FFF", padding: "30px", marginTop: "40px", borderRadius: "15px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
                            <div className='box-price'>
                                <div>
                                    <h3> USED EV UPFRONT COST</h3>
                                    <h1 style={{ marginBottom: '0' }}> $10,000+</h1>
                                </div>
                                <div>
                                    <h3> NEW EV UPFRONT COST</h3>
                                    <h1> $27,500+</h1>
                                </div>
                                <div>
                                    <h3> AVERAGE ANNUAL ENERGY SAVINGS</h3>
                                    <h1> $1,100+</h1>
                                </div>

                                <div>
                                    <h3>ANNUAL AVERAGE EMISSIONS REDUCTIONS</h3>

                                    <h4> 4.6+ tons</h4>
                                </div>

                                <div>
                                    <h3>HEALTH BENEFITS</h3>

                                    <h4 >
                                        No tailpipe emissions
                                    </h4>
                                </div>

                                <div>
                                    <h3>DIFFICULTY</h3>

                                    <h4> Easy</h4>
                                </div>
                            </div>


                            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#3b715a', color: "#FFF", borderRadius: '10px' }}>
                                <div>
                                    <FlashOnOutlinedIcon style={{ color: '#fff', fontSize: '42px' }} />
                                    <FlashOnOutlinedIcon style={{ color: '#fff', fontSize: '42px' }} />
                                </div>

                                <h2> Our Conclusion</h2>

                                <p style={{ color: "#C7CCCA" }}>
                                    With just one charge, several EVs on the market now can travel more than 250 miles. Electrifying your vehicle can result in annual savings exceeding $1,000!
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
                                    <h2>$7,500 off of a brand-new electric car</h2>

                                    <h4 style={{ margin: '10px 0', color: "#76867e", fontWeight: "BOLD" }}>

                                        Federal Clean Vehicle Credit (30D)                                    </h4>

                                    <h4 style={{ color: "#76867e" }}>

                                        For new EVs with a maximum MSRP of $55,000 and vans, pickup trucks, and SUVs with a maximum MSRP of $80,000, there is a tax credit of up to $7,500.

                                    </h4>


                                    <button> TAX CREDIT</button>
                                </div>}



                                {activeTab == 'Federal' && <div className='des-option'>
                                    <h2>$4,000 off a secondhand electric car</h2>

                                    <h4 style={{ margin: '10px 0', color: "#76867e", fontWeight: "BOLD" }}> 
                                    Federal Credit for Previously-Owned Clean Vehicles (25E)
                                    </h4>

                                    <h4 style={{ color: "#76867e" }}>

                                    For a used EV weighing up to 14,000 pounds and with an MSRP of up to $25,000, there is a 30% tax credit of up to $4,000.
                                    </h4>


                                    <button> TAX CREDIT</button>
                                </div>}

                                {activeTab == 'Federal' && <div className='des-option'>
                                    <h2>Save $1,000 on an electric vehicle charger.</h2>

                                    <h4 style={{ margin: '10px 0', color: "#76867e", fontWeight: "BOLD" }}> 
                                    Federal Alternative Fuel Vehicle Refueling Property Credit (30C)
                                    </h4>

                                    <h4 style={{ color: "#76867e" }}>
                                    Tax credit for EV chargers up to $1,000. accessible in low-income or rural areas.

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

export default ElectricVehicle;
