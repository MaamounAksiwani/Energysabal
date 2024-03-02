import React from 'react';
import { Container } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
const Reports = () => {
    return (
        <Container maxWidth='lg' style={{ padding: '50px 0 100px 0' }} >
            <div className='titleTailored'>
                <h1>Our Reports</h1>
                <h3>Take the first step into your electrification project without any obligation. Receive a report to
                    gain valuable insights and take a further step towards a sustainable future
                </h3>
            </div>
            <div className='card'>

                <div style={{ padding: '50px' }}>
                    <h1>Electrification <br />
                        Assessment Report</h1>
                    <h3>Free</h3>
                    <h4> <CheckIcon style={{ color: '#76867e', fontSize: '18px', marginRight: '5px' }} />Preliminary cost estimation</h4>
                    <h4> <CheckIcon style={{ color: '#76867e', fontSize: '18px', marginRight: '5px' }} />  Basic recommendations for energy-efficient upgrades</h4>
                    <h4> <CheckIcon style={{ color: '#76867e', fontSize: '18px', marginRight: '5px' }} /> Overview of available incentives and rebates</h4>
                    <button style={{marginTop:'115px'}}  className='btn'>Get Free Report</button>

                </div>

                <div style={{ padding: '50px' }}>

                    <h1>Comprehensive <br />
                        Electrification Report</h1>
                    <h3>$29.99</h3>
                    <h4> <CheckIcon style={{ color: '#76867e', fontSize: '18px', marginRight: '5px' }} /> Detailed cost estimation for all aspects of
                        your project</h4>

                    <h4> <CheckIcon style={{ color: '#76867e', fontSize: '18px', marginRight: '5px' }} /> Customized recommendations tailored to
                        your needs</h4>
                    <h4> <CheckIcon style={{ color: '#76867e', fontSize: '18px', marginRight: '5px' }} /> Access to exclusive incentives, rebates, and
                        financing options
                    </h4>

                    <h4> <CheckIcon style={{ color: '#76867e', fontSize: '18px', marginRight: '5px' }} /> Assistance in navigating the electrification
                        process</h4>
                    <button style={{marginTop:'35px'}} className='btn'>Purchase Comprehensive Report</button>
                </div>

            </div>
        </Container>
    )
};

export default Reports;
