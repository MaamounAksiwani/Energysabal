import React, { useState } from 'react';
import { Container } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Choose = () => {
    const [openState, setOpenState] = useState(null);
    const handleToggle = (index) => {
        const isOpen = openState === index;
        setOpenState(isOpen ? null : index);
    };
    const FaqItem = ({ item, isOpen, handleToggle }) => (
        <div className={`collapse-box ${isOpen ? 'active' : ''}`} key={item.id}>
            <div className='IconButton' onClick={() => handleToggle(item.id)}>
                {isOpen ? <RemoveIcon className='iconStyle' /> : <AddIcon className='iconStyle' />}
                <h3 style={{color:'#000'}}>{item.title}</h3>
            </div>
            <Collapse in={isOpen} className='Collapse'>
                {item.point && item.point.length > 0 ? (
                    <ul>

                        {item.point.map((ele, index) => (
                            <li key={index}>{`${ele}`}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{item.description}</p>
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
            title: 'EXPERTISE',
            point: [],
            description: `Our team consists of experienced
            professionals who are knowledgeable in
            the latest electrification technologies and
            solutions.`
        },
        {
            id: 1,
            title: 'QUALITY',
            point: [],
            description: `We only use high-quality products and
            materials in our installations, ensuring
            durability, efficiency, and performance.
            `
        },
        {
            id: 2,
            title: 'CUSTOMER SATISFACTION',
            point: [
            ],
            description: `Your satisfaction is our priority. We strive
            to exceed your expectations with our
            excellent service and support throughout
            the electrification process`
        },
        {
            id: 3,
            title: 'INNOVATION',
            point: [
            ],
            description: `We stay up-to-date with the latest
            advancements in electrification
            technology to offer you cutting-edge
            solutions for your home or business.`
        },
        {
            id: 4,
            title: 'SUSTAINABILITY',
            point: [
            ],
            description: `By choosing Energy Sabal, you’re making
            a commitment to sustainability. Our
            solutions help reduce carbon emissions
            and minimize environmental impact.`
        },
    ]
    return (
        <>
            <div className='Energyheader'>
                <div>
                    <Container maxWidth="lg">
                        <div className='Energycontent'>
                            <div className='EnergyContentImage'>
                                <img src='https://americanbusinessesforcleanenergy.org/wp-content/uploads/2021/03/windmill-energy-turbine.jpg' alt='not found' />
                            </div>
                            <div>
                                <p> Why Choose Us?
                                </p>
                                <h1>
                                    Energy Sabal Is Dedicated To Delivering Exceptional Service And
                                    Expertise To Our Valued Clients
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

export default Choose;
