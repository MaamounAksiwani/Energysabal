import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import './Tailored.css';
const TailoredInsights = () => {
    useEffect(() => {
        // const wow = new WOW.WOW();
        // wow.init();
    }, [])
    return (
        <Container maxWidth='lg' style={{ paddingBottom: '50px' }}>
            <div className='titleTailored'>
                <h3>Tailored Insights for <span>Your Electrification</span> Journey</h3>
                <h1>Not sure yet? Receive a report first, before making a project plan</h1>
            </div>


            <div className='card'>

                <div>
                    <h1>Electrification Assessment Report</h1>
                    <h3>Free</h3>
                    <p>Get started on your journey towards
                        sustainable energy with our complimentary
                        Electrification Assessment Report. Simply
                        provide us with some basic information about
                        your home or business location, and we’ll
                        provide you with valuable insights and
                        recommendations to kickstart your
                        electrification projec</p>
                    <button className='btn'>Receive Free Report</button>

                </div>

                <div>

                    <h1>Comprehensive Electrification Plan</h1>
                    <h3>$19.99</h3>
                    <p>Ready to take your electrification project to
                        the next level? Our Comprehensive
                        Electrification Plan offers detailed cost
                        estimations, customized recommendations,
                        and access to all available incentives and
                        governmental assistance. With this
                        comprehensive report, you’ll have everything
                        you need to make informed decisions and
                        maximize your savings.</p>
                    <button className='btn'>Receive Comprehensive Report</button>
                </div>


            </div>
        </Container>
    )
};

export default TailoredInsights;
