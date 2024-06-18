import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import WOW from 'wowjs';
const NotFound = () => {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        document.title = "Not Found | Energy Sabal";
        return () => {
          document.title = "";
        };
      }, []);
    return (
        <div style={{ padding: '100px 0', height: '15.8vh' }} className='wow fadeInDown' data-wow-duration='1s'>
            <Container maxWidth="lg">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <div>
                        <h2>Page Not Found</h2>
                        <p>Sorry, the requested page could not be found.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default NotFound;