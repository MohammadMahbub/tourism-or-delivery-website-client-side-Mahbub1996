import React from 'react';
import AboutAgency from './AboutAgency';
import AboutBanner from './AboutBanner';
import './About.css'
import Team from './Team';

const About = () => {
    return (
        <div>
            <AboutBanner />
            <div className="container-fluid">
                <AboutAgency />
                <Team />
            </div>
        </div>
    );
};

export default About;