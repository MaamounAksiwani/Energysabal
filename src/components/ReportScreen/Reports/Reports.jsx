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

                <div>
                    <h1>Electrification <br />
                        Assessment Report</h1>
                    <h3>Free</h3>
                    <h4>  Preliminary cost estimation <CheckIcon style={{ color: '#80aa45', fontSize: '18px' }} /> </h4>
                    <h4> Basic recommendations for energy-efficient upgrades <CheckIcon style={{ color: '#80aa45', fontSize: '18px' }} />  </h4>
                    <h4>  Overview of available incentives and rebates <CheckIcon style={{ color: '#80aa45', fontSize: '18px' }} /></h4>
                    <button style={{ marginTop: '80px' }} className='btn'>Get Free Report</button>

                </div>
                <div>
                    <h1>Comprehensive <br />
                        Electrification Report</h1>
                    <h3>$29.99</h3>
                    <h4>  Detailed cost estimation for all aspects of
                        your project <CheckIcon style={{ color: '#80aa45', fontSize: '18px' }} /></h4>

                    <h4> Customized recommendations tailored to
                        your needs <CheckIcon style={{ color: '#80aa45', fontSize: '18px' }} /></h4>
                    <h4>Access to exclusive incentives, rebates, and
                        financing options <CheckIcon style={{ color: '#80aa45', fontSize: '18px' }} />
                    </h4>

                    <h4> Assistance in navigating the electrification
                        process <CheckIcon style={{ color: '#80aa45', fontSize: '18px' }} /></h4>
                    <button style={{ marginTop: '35px' }} className='btn'>Purchase Comprehensive Report</button>
                </div>

            </div>
        </Container>
    )
};

export default Reports;
