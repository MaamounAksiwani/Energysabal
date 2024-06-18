import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';
import logo from '../../until/image/energysabal-white.svg'
const Footer = () => {
    return (
        <footer class="footer">
            <Container maxWidth='lg'>

                <div class="container row">
                    <div class="footer-col">
                        <img src={logo} alt='' />
                        <ul>
                            <li>+49 176 20092661</li>
                            <li>hello@energysabal.com</li>
                            <li > <LinkedInIcon style={{color:'#fff' , cursor:'pointer'}}/></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Installation</h4>
                        <ul>
                            <li>Heat Pump</li>
                            <li>Solar</li>
                            <li>Water Heater</li>
                            <li>Electrical Panel</li>
                            <li>EV Charging</li>
                            <li>Cooktop</li>
                            <li>Oven</li>
                            <li>Clothes Dryer</li>

                        </ul>

                    </div>
                    <div class="footer-col">
                        <h4>Explore</h4>
                        <ul>
                            <li>Plan</li>
                            <li>Report</li>
                            <li>Contractor</li>
                            <li>Contact</li>
                        </ul>
                    </div>
              
             

                    <div class="footer-col">
                        <h4>Information</h4>
                        <ul>
                            <li>About Us</li>
                            <li>FAQ</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            {/* <li><a href="#">Contact</a></li> */}

                        </ul>
                    </div>

                </div>

                <div style={{ textAlign: 'center',  color: "#ddd", fontSize: '8px' }}>
                    <h1 style={{ marginTop: '100px' , fontWeight:'300' }}>© 2024 Energy Sabal. All Rights Reserved</h1>
                </div>

            </Container>
        </footer>



    )
}

export default Footer;
