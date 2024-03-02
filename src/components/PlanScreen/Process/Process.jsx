import React from 'react';
import './Process.css';
import { Container } from '@mui/material';

const Process = () => {
    const cardsData = [
        {
            id: 1,
            backgroundImage: 'https://americanbusinessesforcleanenergy.org/wp-content/uploads/2021/03/windmill-energy-turbine.jpg',
            topText: '1- Consultation & Assessment',
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
            backgroundImage: 'https://americanbusinessesforcleanenergy.org/wp-content/uploads/2021/03/windmill-energy-turbine.jpg',
            topText: '2- Customized Solutions',
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
            backgroundImage: 'https://americanbusinessesforcleanenergy.org/wp-content/uploads/2021/03/windmill-energy-turbine.jpg',
            topText: '3- Planning & Installation',
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
            backgroundImage: 'https://americanbusinessesforcleanenergy.org/wp-content/uploads/2021/03/windmill-energy-turbine.jpg',
            topText: '4-Quality Assurance & Support',
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


    const Card = ({ backgroundImage, topText, bottomText }) => (
        <>
          <div className="card-content">
            <div className="top-text">{topText}</div>
            <div className="bottom-text">{bottomText}</div>
          </div>
        </>
      );
      
    return (
        <div className='Process'>
            <Container maxWidth="lg">
                <div className='titleTailored'>
                    <h1>Our Process</h1>
                    <h3 style={{ color: '#000', fontSize: '25px ', fontWeight: '400' }}>At Energy Sabal, We Believe In Transparency And Clarity Throughout The Electrification
                        Process. Here’s An Overview Of Our Approach
                    </h3>
                </div>

                <div className="cards-container">
                    {cardsData.map((card) => (
                        <Card
                            key={card.id}
                            backgroundImage={card.backgroundImage}
                            topText={card.topText}
                            bottomText={card.bottomText}
                        />
                    ))}
                </div>
            </Container>

        </div>
    );
};

export default Process;
