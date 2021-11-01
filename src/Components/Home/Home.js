import React from 'react';
import Banner from './Banner';
import BestBeach from './BestBeach';
import Destination from './Destination';
import './Home.css'
import OurPackages from './OurPackages';
import Tour from './Tour';

const Home = () => {
    return (
        <div className="container-fluid">
            <Banner />
            <Destination />
            <BestBeach />
            <Tour />
            <OurPackages />
        </div>
    );
};

export default Home;