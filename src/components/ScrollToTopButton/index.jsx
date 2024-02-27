import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './index.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 500; 
      setIsVisible(scrollY > scrollThreshold);
    };

    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
    <button
      className={`scrollToTopButton ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <ArrowUpwardIcon style={{ fontSize: '23px' }} />
    </button>
  </div>

  );
};

const ScrollToTop = () => {
  return (
    <div className='divScrollToTopButton'>
      <ScrollToTopButton />
    </div>
  );
};

export default ScrollToTop;
