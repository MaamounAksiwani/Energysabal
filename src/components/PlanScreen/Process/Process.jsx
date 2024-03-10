import React from 'react';
import './Process.css';
import { Container } from '@mui/material';

import photo1 from '../../../until/image/send/pexels-gustavo-fring-4254163.jpg'

import photo2 from '../../../until/image/send/pexels-kindel-media-9800009.jpg'

import photo3 from '../../../until/image/send/pexels-kindel-media-9875408.jpg'

import photo4 from '../../../until/image/send/shutterstock_1674266917.jpg'

const Process = () => {
    const cardsData = [
        {
            id: 1,
            backgroundImage: photo1,
            topText: '01.',
            title: 'Consultation',
            bottomText: `Our Contractors Will Guide
            You Through An Initial
            Consultation To Discuss
            Your Electrification Goals.
            During This Process, We’ll
            Assess Your Specific Needs
            And Preferences.
            Additionally, Our Team Will
            Show You All The Ways To
            Save Money, Like
            Accessing Tax Credits,
            Refunds, And Other
            Funding Options Through
            Incentives And Rebates.`,
        },
        {
            id: 2,
            backgroundImage: photo2,
            topText: '02.',
            title: "Customized Solutions",
            bottomText: `Based On Our Consultation
            And Assessment, We
            Develop Customized
            Electrification Solutions
            Tailored To Your Unique
            Requirements. We Take Into
            Account Factors Such As
            Your Energy Needs,
            Budget, And Environmental
            Considerations To Provide
            You With The Most Suitable
            Options.`,
        },
        {
            id: 3,
            backgroundImage: photo3,
            topText: '03.',
            title: 'Planning & Installation',
            bottomText: `Once The Customized
            Solution Is Finalized, Our
            Team Meticulously Plans
            Every Aspect Of The
            Project To Ensure A Smooth
            And Efficient Installation
            Process. From Scheduling
            To Procurement Of
            Materials, We Handle All
            The Details To Minimize
            Disruptions And Ensure
            Timely Completion.
            `,
        },
        {
            id: 4,
            backgroundImage: photo4,
            topText: '04.',
            title: ' Quality Assurance ',
            bottomText: `We Conduct Thorough
            Quality Assurance Checks
            Throughout The Installation
            Process To Ensure That
            Everything Meets Our High
            Standards. Additionally, We
            Provide Ongoing Support
            And Assistance To Address
            Any Questions Or Concerns
            You May Have. Our Goal Is
            To Ensure Your Complete
            Satisfaction With Our
            Services And The Final
            Outcome Of Your
            Electrification Project`,
        },
    ];
    const Card = ({ backgroundImage, topText, bottomText, title }) => (
        <>
            <div className="card-content" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="overlay"></div>
                <div className="top-text" style={{ zIndex: 1000 }}>{topText}</div>
                {/* <div className='contact'> */}
                    <h2 style={{ zIndex: 1000 }}>{title}</h2>
                    <div className="bottom-text" style={{ zIndex: 1000 }}>{bottomText}</div>
                {/* </div> */}
            </div>
        </>
    );

    return (
        <div className='Process'>
            <Container maxWidth="lg">
                <div className='titleTailored'>
                    <h1 style={{ color: '#fff' }}>Our Process</h1>
                    <h3 style={{ color: '#C7CCCA', fontSize: '25px ', fontWeight: '400' }}>
                        At Energy Sabal, we believe in transparency and clarity throughout the electrification process. Here’s an overview of our approach
                    </h3>
                </div>

                <div className="cards-container">
                    {cardsData.map((card) => (
                        <Card
                            key={card.id}
                            backgroundImage={card.backgroundImage}
                            topText={card.topText}
                            bottomText={card.bottomText}
                            title={card.title}
                        />
                    ))}
                </div>
            </Container>

        </div>
    );
};

export default Process;
