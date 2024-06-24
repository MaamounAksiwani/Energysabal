import React, { useState } from 'react';
import { Container } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import img from '../../../until/image/pexels-gustavo-fring-4254157.jpg'
const Choose = () => {
    const [openIndex, setOpenIndex] = useState(null); // Track the currently open collapse box

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the collapse box
    };
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

    const paragraphStyle = {
        color: '#76867e',
        marginBottom: '10px',
        fontSize: '13px',
        fontWeight: 300,
        letterSpacing: '1px',
    };
    return (
        <>
         <div className='Energyheader'>
            <Container maxWidth="lg">
                <div className='Energycontent'>
                    <div className='EnergyContentImage'>
                        <img src={img} alt='not found' />
                    </div>
                    <div>
                        <p style={paragraphStyle}> WHY CHOOSE US?</p>
                        <h1>
                        Energy Sabal Is Dedicated To Delivering Exceptional Service And
                                    Expertise
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
            {/* <div className='Energyheader'>
                <div>
                    <Container maxWidth="lg">
                        <div className='Energycontent'>
                            <div className='EnergyContentImage'>
                                <img src={img} alt='not found' />
                            </div>
                            <div>
                                <p style={paragraphStyle}>
                                WHY CHOOSE US?
                                </p>
                                <h1>
                                    Energy Sabal Is Dedicated To Delivering Exceptional Service And
                                    Expertise
                                </h1>

                                <div className='ContainerCollapse'>
                                    {renderFaqItems(content, (id) => openState === id, handleToggle)}                </div>
                            </div>
                        </div>

                    </Container>
                </div>
            </div> */}
        </>
    )
};

export default Choose;
