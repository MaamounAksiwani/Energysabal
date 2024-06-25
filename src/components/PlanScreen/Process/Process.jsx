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
            bottomText: `Our contractors will guide you through an initial consultation 
            to discuss your electrification goals. During this process, we'll assess your specific needs and preferences. Our team will show you all the ways
             to save money, like accessing tax credits, refunds, and other funding options.`,
        },
        {
            id: 2,
            backgroundImage: photo2,
            topText: '02.',
            title: "Customized solutions",
            bottomText: `Based on our consultation
            and assessment, we
            develop customized
            electrification solutions
            tailored to your unique
            requirements. We take into
            account factors such as
            your energy needs,
            budget, and environmental
            oonsiderations to provide
            you with  suitable
            options.`,
        },
        {
            id: 3,
            backgroundImage: photo3,
            topText: '03.',
            title: 'Planning & installation',
            bottomText: `Once the customized
            solution Is finalized, our
            team meticulously plans
            every aspect of the
            project to ensure a smooth
            and efficient installation
            process. From scheduling
            to procurement of
            materials, we handle All
            the details to minimize
            disruptions and ensure
            timely completion.
            `,
        },
        {
            id: 4,
            backgroundImage: photo4,
            topText: '04.',
            title: ' Quality Assurance ',
            bottomText: `We conduct thorough quality assurance checks throughout the installation process to ensure
             that everything meets our high standards. We also provide ongoing support and assistance to address
             any questions or concerns you may have. Our goal is to ensure your complete satisfaction.`,
        },
    ];
    const Card = ({ backgroundImage, topText, bottomText, title }) => (
        <>
            <div className="card-content">
                {/* <div className="overlay"></div> */}
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
