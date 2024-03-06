import React, { useState } from 'react';
import { Container } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import photo from '../../../until/image/shutterstock_1236719398.jpg'
const ChooseEnergy = () => {
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
                    <p className={` ${isOpen ? 'desBorder' : ''}`}>{item.description}</p>
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
            title: 'EXPERT INSIGHTS TAILORED TO YOUR PROJECT',
            point: [],
            description: `Our team of experienced professionals
            provides personalized insights tailored
            specifically to your electrification project.
            We take into account your unique needs,
            preferences, and goals to deliver
            recommendations that are perfectly
            suited to your situation`
        },
        {
            id: 1,
            title: 'COMPREHENSIVE ANALYSIS',
            point: [],
            description: `Our reports offer a thorough and detailed
            analysis of all aspects of your
            electrification project. From cost
            estimations to energy savings potential,
            we provide the information you need to
            make informed decisions about your
            project’s scope, timeline, and budget`
        },
        {
            id: 2,
            title: 'ACCESS TO EXCLUSIVE BENEFITS AND INCENTIVES',
            point: [
            ],
            description: `By choosing Energy Sabal Reports, you
            gain access to exclusive benefits and
            incentives that can help you maximize
            your savings and minimize your
            environmental impact. From tax credits to
            rebates and financing options, we’ll help
            you navigate the available incentives to
            ensure you get the most out of your
            electrification project.`
        }
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
                <div>
                    <Container maxWidth="lg">
                        <div className='Energycontent'>
                            <div className='EnergyContentImage'>
                                <img src={photo} alt='not found' />
                            </div>
                            <div>
                                <p style={paragraphStyle}> WHY CHOOSE ENERGY SABAL REPORTS?

                                </p>
                                <h1>
                                    Make Informed Choices When Embarking On
                                    Electrification Projects
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

export default ChooseEnergy;
