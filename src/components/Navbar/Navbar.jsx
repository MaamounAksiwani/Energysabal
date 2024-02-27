import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router';
import './Navbar.css';
import logo from '../../until/image/energysabal-black.svg'

import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };


    const navbarStyle = {
        position: 'fixed',
        width: '100%',
        zIndex: 10000000,
    };
    return (
        <>
            <div style={navbarStyle}>
                <div className='navBar'>
                    <Container maxWidth='xl'>
                        <div className='navbarLinks'>
                            <img src={logo} alt='logo not found' />

                            {/* <div className='burgerIcon' onClick={toggleMenu}>
                                {menuVisible ? <MenuIcon className='menuIcon' /> : null}
                            </div>
                            <h1>HELLo</h1> */}
                           <div>
                           <MenuIcon className='menuIcon' />
                           </div>

                            <div className={`menuItems ${menuVisible ? 'visible' : ''}`}>
                                <span>Plan</span>
                                <span>Install</span>
                                <span>Report</span>
                                <span>Contact</span>
                                <span>About</span>
                                <button className='getStartBtn'>Make Plan</button>
                                <button className='SignIn'>Receive Report</button>
                            </div>
                        </div>
                    </Container>

                </div>
            </div>
        </>
    )
};

export default Navbar;
