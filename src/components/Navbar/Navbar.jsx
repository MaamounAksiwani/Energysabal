import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../until/image/energysabal-black.svg'

import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const [menuVisible, setMenuVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleMenuClick = () => {
        setMenuVisible(!menuVisible);
    };


    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
        console.log('handleToggleMenu',);
    }

    const navbarStyle = {
        position: 'fixed',
        width: '100%',
        zIndex: 10000000,
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <>
            <div style={navbarStyle}>
                <div style={{
                    background: !isScrolled && (currentPath === '/') ? '#fff' : '#E7F0E9',
                    transition: 'background 0.3s ease',
                    boxShadow: !isScrolled && (currentPath !== '/') ? `0 4px 10px rgba(0, 0, 0, 0.1)` : ''
                }} className='navBar'>
                    <Container maxWidth='lg'>
                        <div className='navbarLinks'>
                            <img src={logo} alt='logo not found' />
                            <div>
                                <MenuIcon className='menuIcon' onClick={handleToggleMenu} />
                            </div>

                            <div className={`menuItems`}>
                                <span>Plan</span>
                                <span>Install</span>
                                <span>Report</span>
                                <span>Contact</span>
                                <span>About</span>
                                <button className='getStartBtn'>Make Plan</button>
                                <button className='SignIn'>Receive Report</button>
                            </div>
                        </div>


                        {/* {isOpen && <div className='menuSidebar'>

                            <Link to='/search/' className='menuNavBarLink' >Find Programs </Link>
                            <div style={{ width: '100%', height: '0.5px', background: '#fff' }} />

                            <Link to='/students/' className='menuNavBarLink' onClick={handleToggleMenu}>Students</Link>
                            <div style={{ width: '100%', height: '0.5px', background: '#fff' }} />

                            <Link to='/study-agents/' className='menuNavBarLink' onClick={handleToggleMenu}>Study Agents</Link>
                            <div style={{ width: '100%', height: '0.5px', background: '#fff' }} />

                            <Link to='/schools/' className='menuNavBarLink' onClick={handleToggleMenu}>School</Link>
                            <div style={{ width: '100%', height: '0.5px', background: '#fff' }} />
                        </div>
                        } */}
                    </Container>
                </div>
            </div>
        </>
    )
};

export default Navbar;
