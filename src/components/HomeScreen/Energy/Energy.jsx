import React, { useState } from 'react';
import { Container } from '@mui/material';
import './Energy.css';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import home from '../../../until/image/shutterstock_529456762.jpg'
const Energy = () => {
    const [openState, setOpenState] = useState(null);
    const handleToggle = (index) => {
        const isOpen = openState === index;
        setOpenState(isOpen ? null : index);
    };
    const FaqItem = ({ item, isOpen, handleToggle }) => (
        
        <div className={`collapse-box ${isOpen ? 'active' : ''}`} key={item.id}>
            <div className={`IconButton ${isOpen ? 'active' : ''}`} onClick={() => handleToggle(item.id)}>
                {isOpen ? <RemoveIcon className='iconStyle' /> : <AddIcon className='iconStyle' />}
                <h3 style={{ color: '#000' }}>{item.title}</h3>
            </div>
            <Collapse in={isOpen} className='Collapse'>
                {item.point && item.point.length > 0 ? (
                    <ul>

                        {item.point.map((ele, index) => (
                            <li key={index}>{`${ele}`}</li>
                        ))}
                    </ul>
                ) : (
                    <p className={` ${isOpen ? 'desBorder' : ''}`} >{item.description}</p>
                )}
            </Collapse>
        </div>
    );

    const renderFaqItems = (items, isOpenFn, toggleFn) => (
        <div className='ContainerCollapseOne'>
            {items.map((item) => (
                <FaqItem key={item.id} item={item} isOpen={isOpenFn(item.id)} handleToggle={toggleFn} />
            ))}
        </div>
    );

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
            point: [
            ],
            description: `Going electric can be a bit tricky,
            especially since every home is different.
            But don’t worry! A contractor can help
            you imagine a cozy, energy-saving home
            that suits you perfectly.`
        },
    ]
    return (
        <>
            <div className='Energyheader'>
                <div>
                    <Container maxWidth="lg">
                        <div className='Energycontent'>
                            <div className='EnergyContentImage'>
                                <img src={home} alt='not found' />
                            </div>
                            <div>
                                <p>WHAT WE OFFER

                                </p>
                                <h1>
                                    Energy Sabal Unlocks the True Cost of Electrification and Maximizes Your Savings
                                </h1>

                                <div className='ContainerCollapse'>
                                    {renderFaqItems(content, (id) => openState === id, handleToggle)}                </div>
                            </div>
                        </div>

                    </Container>
                </div>
            </div>
        </>
    )
};

export default Energy;
