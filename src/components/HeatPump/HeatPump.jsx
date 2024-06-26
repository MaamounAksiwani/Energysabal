import React, { useEffect, useState } from 'react';

import img from '../../until/image/DeerfieldWind.jpg'
import OurProcess from '../Shared/OurProcess'


import WOW from 'wowjs';
import { Container } from '@mui/material';

import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
const HeatPump = () => {


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
        document.title = "Heat Pump | Energy Sabal";
        return () => {
            document.title = "";
        };
    }, []);


    return (
        <div className='wow fadeInDown' data-wow-duration='1s' style={{ backgroundColor: '#E7F0E9', paddingTop: '100px' }}>
            <h1 style={{ textAlign: 'center', padding: '20px 0 50px 0' }}>
                Use a heat pump to improve your heating and cooling system

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
                                    A heat pump is the most effective way to cool your house in the summer and heat it in
                                    the winter. Compared to alternative heating and conditioning
                                    systems like gas furnaces, oil heat, and central air, heat pumps are more energy-efficient.
                                </h4>

                                <div style={{ margin: '40px 0' }}>

                                    <h2> <FlashOnOutlinedIcon style={{ color: '#3b715a' }} /> WHY DO IT?</h2>

                                    <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>

                                        Heat pump-equipped homes use less energy and pay lower electric bills.

                                    </h4>

                                </div>


                                <div style={{ margin: '40px 0' }}>

                                    <h2> <FlashOnOutlinedIcon style={{ color: '#3b715a' }} /> WHEN?</h2>

                                    <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>

                                        When the life of your present HVAC system is almost over (typically about 15 years).

                                    </h4>
                                </div>


                                <div style={{ margin: '40px 0' }}>


                                    <h2> <FlashOnOutlinedIcon style={{ color: '#3b715a' }} /> WHO IS THIS FOR?</h2>

                                    <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>
                                        For homeowners: Whole-home heat pump systems. For renters: portable and window units.
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
                                    <h2 style={{ fontWeight: 'bold' }}> Weatherization</h2>
                                </div>
                                <h4 style={{ fontWeight: '400', margin: '0', color: "#76867e" }}>
                                    Weatherizing your house can lower the amount of energy required to keep it comfortable, saving you hundreds on your
                                    energy costs. Improvements to doors and windows, insulation, and air sealing are all part of weatherization initiatives.
                                </h4>







                            </div>

                        </div>



                        <div style={{ backgroundColor: "#FFF", padding: "30px", marginTop: "40px", borderRadius: "15px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
                            <div className='box-price'>
                                <div>
                                    <h3> UPFRONT COST</h3>
                                    <h1 style={{ marginBottom: '0' }}> $5,000 (one mini-
                                        split) to $30,000 </h1>
                                        <h3  style={{ margin: '0' }}>(a
                                        large home’s
                                        whole-home
                                        system)</h3>
                                </div>
                                <div>
                                    <h3> AVERAGE LIFESPAN</h3>
                                    <h1> 10-20 years</h1>
                                </div>
                                <div>
                                    <h3> FEATURES</h3>
                                    <h1> Your house is both heated and cooled</h1>
                                </div>

                                <div>
                                    <h3>REDUCTION IN AVERAGE ANNUAL EMISSIONS</h3>

                                    <h4> 2.8 tons</h4>
                                </div>

                                <div>
                                    <h3>DIFFICULTY</h3>

                                    <h4 >
                                    Moderate, we will hire an HVAC contractor
                                    </h4>
                                </div>

                                <div>
                                    <h3>SAVINGS ON ENERGY</h3>

                                    <h4> About three times as efficient are heat pumps as typical fossil fuel heating systems</h4>
                                </div>
                            </div>


                            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#3b715a', color: "#FFF", borderRadius: '10px' }}>
                                <div>
                                    <FlashOnOutlinedIcon style={{ color: '#fff', fontSize: '42px' }} />
                                    <FlashOnOutlinedIcon style={{ color: '#fff', fontSize: '42px' }} />
                                </div>

                                <h2> Our Conclusion</h2>

                                <p style={{ color: "#C7CCCA" }}>
                                An annual savings of approximately $1,000 can be realised by homeowners that
                                 replace inefficient HVAC systems with propane, fuel oil, 
                                or traditional electric resistance (such as electric furnaces or baseboard heat).
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
                                    <h2>30% off installation of geothermal heating</h2>

                                    <h4 style={{ margin: '10px 0', color: "#76867e", fontWeight: "BOLD" }}> 

                                    Federal Residential Clean Energy Credit (25D)                   
                                                     </h4>

                                    <h4 style={{ color: "#76867e" }}>
                                    Uncapped 30% tax credit for installing geothermal equipment. valued, on average, $7,200.
                                        </h4>


                                    <button> TAX CREDIT</button>
                                </div>}



                                {activeTab == 'Federal' && <div className='des-option'>
                                    <h2>A $2,000 air source heat pump discount</h2>

                                    <h4 style={{ margin: '10px 0', color: "#76867e", fontWeight: "BOLD" }}> 
                                    Federal Energy Efficient Home Improvement Credit (25C)
                                    </h4>

                                    <h4 style={{ color: "#76867e" }}>
                                    A 30% tax credit, up to $2,000, is available for water heaters with heat pumps. annually reset.
                                    </h4>


                                    <button> TAX CREDIT</button>
                                </div>}



                                {activeTab == 'Federal' && <div className='des-option'>
                                    <h2>$1,200 in savings on weatherization</h2>

                                    <h4 style={{ margin: '10px 0', color: "#76867e", fontWeight: "BOLD" }}>
                                    Credit for Home Improvements with Low Energy Use (25C)
                                                                                 </h4>

                                    <h4 style={{ color: "#76867e" }}>


                                    Incentives for weatherization projects, such as air sealing, insulation, doors, and windows, are 30% up to $1,200. annually reset.
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

export default HeatPump;
