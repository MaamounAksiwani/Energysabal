import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';
import logo from '../../until/image/energysabal-white.svg';


const Footer = () => {
    const navigate = useNavigate();
    const handleLinkClick = (path) => {
        navigate(path);
      };
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
                            <li onClick={() => handleLinkClick('/HeatPump')}> Heat Pump</li>
                            <li onClick={()=> handleLinkClick('Solar')}>Solar</li>
                            <li onClick={()=>{handleLinkClick('/WaterHeater')}}>Water Heater</li>
                            <li onClick={()=>{handleLinkClick('/ElectricalPanel')}}>Electrical Panel</li>
                            <li onClick={()=>{handleLinkClick('/ElectricVehicle')}}>Electric Vehicle</li>
                            <li>Cooktop</li>
                            <li>Lawn Equipment</li>
                            <li onClick={()=>{handleLinkClick('/ClothesDryer')}}>Clothes Dryer</li>

                        </ul>

                    </div>
                    <div class="footer-col">
                        <h4>Explore</h4>
                        <ul>
                            <li onClick={() => handleLinkClick('/Plan')}>Plan</li>
                            <li onClick={() => handleLinkClick('/Report')}>Report</li>
                            <li onClick={() => handleLinkClick('/Contractor')}>Contractor</li>
                            <li onClick={() => handleLinkClick('/Contact')}>Contact</li>
                        </ul>
                    </div>
              
             

                    <div class="footer-col">
                        <h4>Information</h4>
                        <ul>
                            <li onClick={() => handleLinkClick('/About')}>About Us</li>
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
