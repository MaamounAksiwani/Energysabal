import React, { useState } from 'react';
import "./Energy.css";
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Container } from '@mui/material';
import home from '../../../until/image/shutterstock_529456762.jpg';

const Energy = () => {
    const [openIndex, setOpenIndex] = useState(null); // Track the currently open collapse box

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the collapse box
    };

    const content = [
        {
            id: 0,
            title: 'TIME & COST EFFICIENCY',
            point: [],
            description: `Our Contractors know the best way to
                organize your home electrification
                projects, so your new appliances get
                installed on time and within your budget`
        },
        {
            id: 1,
            title: 'INCENTIVES AND REBATES',
            point: [],
            description: `Our contractors can show you all the
                ways to save money, like getting tax
                credits, refunds, and other funding
                options`
        },
        {
            id: 2,
            title: 'EXPERT GUIDANCE',
            point: [],
            description: `Going electric can be a bit tricky,
                especially since every home is different.
                But don’t worry! A contractor can help
                you imagine a cozy, energy-saving home
                that suits you perfectly.`
        },
    ];

    return (
        <>
        <div className='Energyheader'>
            <Container maxWidth="lg">
                <div className='Energycontent'>
                    <div className='EnergyContentImage'>
                        <img src={home} alt='not found' />
                    </div>
                    <div>
                        <p>WHAT WE OFFER</p>
                        <h1>
                            Energy Sabal Unlocks the True Cost of Electrification and Maximizes Your Savings
                        </h1>
                        <div className='ContainerCollapse'>
                            <div>
                                {content.map((item) => (
                                    <div className='collapse-box' key={item.id}>
                                        <div className={openIndex === item.id ? 'no-border IconButton active' : 'border IconButton'}  onClick={() => handleToggle(item.id)}>
                                            {openIndex === item.id ? <RemoveIcon className='iconStyle' /> : <AddIcon className='iconStyle' />}
                                            <h3 
                                                
                                                onClick={() => handleToggle(item.id)}
                                            >
                                                {item.title}
                                            </h3>
                                        </div>
                                        <Collapse in={openIndex === item.id} className='Collapse'>
                                            {item.point && item.point.length > 0 ? (
                                                <ul>
                                                    {item.point.map((ele, index) => (
                                                        <li key={index}>{`${ele} ${index}`}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className={openIndex === item.id ? 'border' : 'no-border'}>
                                                    {item.description}
                                                </p>
                                            )}
                                        </Collapse>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </>
    );
}

export default Energy;
