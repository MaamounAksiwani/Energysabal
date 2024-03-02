import React  from 'react';
import { Container } from '@mui/material';
import './Tailored.css';
const TailoredInsights = () => {
    return (
        <Container maxWidth='lg' style={{ padding: '50px 0 100px 0' }} >
            <div className='titleTailored'>
                <h1>Tailored Insights for <span>Your Electrification</span> Journey</h1>
                <h3>Not sure yet? Receive a report first, before making a project plan</h3>
            </div>


            <div className='card'>

                <div>
                    <h1>Electrification <br/> Assessment Report</h1>
                    <h3>Free</h3>
                    <p>Get started on your journey towards
                        sustainable energy with our complimentary
                        Electrification Assessment Report. Simply
                        provide us with some basic information about
                        your home or business location, and we’ll
                        provide you with valuable insights and
                        recommendations to kickstart your
                        electrification project.</p>
                    <button className='btn'>Receive Free Report</button>

                </div>

                <div>

                    <h1>Comprehensive <br/> Electrification Plan</h1>
                    <h3>$19.99</h3>
                    <p>Ready to take your electrification project to
                        the next level? Our Comprehensive
                        Electrification Plan offers detailed cost
                        estimations, customized recommendations,
                        and access to all available incentives and
                        governmental assistance. With this
                         report, you’ll be able to make informed decisions and
                        maximize your savings.</p>
                    <button className='btn'>Receive Comprehensive Report</button>
                </div>


            </div>
        </Container>
    )
};

export default TailoredInsights;
