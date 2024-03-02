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
                            <li><a href="#">+49 176 20092661</a></li>
                            <li><a href="#">Hello@Energysabal.com</a></li>
                            <li ><a> <LinkedInIcon style={{color:'#1976d2'}}/></a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="#">Plan</a></li>
                            <li><a href="#">Report</a></li>
                            <li><a href="#">Contractor</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Installation</h4>
                        <ul>
                            <li><a href="#">Heat Pump</a></li>
                            <li><a href="#">Solar</a></li>
                            <li><a href="#">Water Heater</a></li>
                            <li><a href="#">Electrical Panel</a></li>
                            <li><a href="#">EV Charging</a></li>
                            <li><a href="#">Cooktop</a></li>
                            <li><a href="#">Oven</a></li>
                            <li><a href="#">Clothes Dryer</a></li>

                        </ul>

                    </div>
             

                    <div class="footer-col">
                        <h4>Information</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            {/* <li><a href="#">Contact</a></li> */}

                        </ul>
                    </div>

                </div>

                <div style={{ textAlign: 'center', color: "#ddd", fontSize: '8px' }}>
                    <h1 style={{ marginTop: '100px' }}>© 2024 Energy Sabal. All Rights Reserved</h1>
                </div>

            </Container>
        </footer>



    )
}

export default Footer;
