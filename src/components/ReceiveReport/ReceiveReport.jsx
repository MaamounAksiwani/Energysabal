import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import WOW from 'wowjs';
import './index.css'
import PurchaseReport from './PurchaseReport'
import FreeReport from './FreeReport';

const ReceiveReport = () => {
    const [showFreeReport, setShowFreeReport] = useState(true);

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        document.title = "Receive Report | Energy Sabal";
        return () => {
          document.title = "";
        };
    }, []);

    const handleFreeReportClick = () => {
        setShowFreeReport(true);
    };

    const handlePurchaseReportClick = () => {
        setShowFreeReport(false);
    };

    return (
        <div style={{ padding: '100px 0', height: '15.8vh' }} className='wow fadeInDown' data-wow-duration='1s'>
            <Container maxWidth="md">
                <div className='tabs'>
                    <div onClick={handleFreeReportClick}>
                        <h1>Get Free Report</h1>
                      
                    </div>

                    <div onClick={handlePurchaseReportClick}>
                        <h1>Purchase Comprehensive Report</h1>
                      
                    </div>
                </div>


                {showFreeReport && <FreeReport />}
                {!showFreeReport && <PurchaseReport />}
            </Container>
        </div>
    );
}

export default ReceiveReport;
