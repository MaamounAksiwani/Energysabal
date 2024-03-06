import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../until/image/energysabal-black.svg';
import './Navbar.css';
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [menuVisible, setMenuVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('handleToggleMenu');
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setMenuVisible(false);
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
  }, []);

  const navbarStyle = {
    position: 'fixed',
    width: '100%',
    zIndex: 10000000,
  };

  const sidebarStyle = {
    position: 'fixed',
    top: 0,
    right: isOpen ? 0 : '-100%',
    height: '100%',
    width: '250px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'right 0.3s ease',
  };

  const overlayStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: isOpen ? 'calc(100% - 250px)' : '0%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999999,
  };

  return (
    <div style={navbarStyle}>
      <div
        style={{
          background:
            !isScrolled && (currentPath === '/' || currentPath === '/Plan' || currentPath === '/Report' || currentPath === '/Contact' || currentPath === '/Contractor')
              ? '#E7F0E9'
              : '#D6E2D9',
          transition: 'background 0.3s ease',
          boxShadow:
            !isScrolled && (currentPath !== '/' && currentPath !== '/Plan' && currentPath !== '/Report' && currentPath !== '/Contractor' && currentPath !== '/Contact')
              ? '0 4px 10px rgba(0, 0, 0, 0.1)'
              : '',
        }}
        className='navBar'
      >
        <Container maxWidth='lg'>
          <div style={overlayStyle} onClick={handleToggleMenu}></div>
          <div className='navbarLinks'>
            <img style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('/')} src={logo} alt='logo not found' />
            <div>
              <MenuIcon className='menuIcon' onClick={handleToggleMenu} />
            </div>

            <div className={`menuItems ${menuVisible ? 'visible' : ''}`}>
              <span onClick={() => handleLinkClick('/Plan')}>Plan</span>
              <span onClick={() => handleLinkClick('/Report')}>Report</span>
              <span onClick={() => handleLinkClick('/Contractor')}>Contractor</span>
              <span>About</span>
              <span onClick={() => {
                handleLinkClick('/Contact')
              }}>Contact</span>
            </div>

            <div className={`menuItems ${menuVisible ? 'visible' : ''}`}>
              <button className='getStartBtn'>Make Plan</button>
              <button className='SignIn'>Receive Report</button>
            </div>
          </div>
        </Container>




        <div style={sidebarStyle}>
          <div className='sideBar'>
            <Link to='/' className='logo'>
              <img style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('/')} src={logo} alt='logo not found' />
            </Link>
            <CloseIcon onClick={handleToggleMenu} style={{ fontSize: '30px' }} />
          </div>

          <div className='menuSidebar'>
            <h3 onClick={() => {
              handleLinkClick('/Plan')
              setIsOpen(false)
            }}>Plan</h3>
            <h3 onClick={() => {
              handleLinkClick('/Report')
              setIsOpen(false)
            }}>Report</h3>
            <h3 onClick={() => {
              handleLinkClick('/Contractor')
              setIsOpen(false)
            }}>Contractor</h3>
            <h3>About</h3>
            <h3 onClick={() => {
              handleLinkClick('/Contact')
              setIsOpen(false)
            }}>Contact</h3>
            <button className='getStartBtn'>Make Plan</button>
            <button className='SignIn'>Receive Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
