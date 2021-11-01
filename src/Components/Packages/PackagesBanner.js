import React from 'react';
import Banner from '../../images/banner-3.jpg'

const PackagesBanner = () => {
    return (
        <div>
            <div className="destination-details-img">
                <img className="w-100" src={Banner} alt="" />
                <h3 className="text-light"> About Us </h3>
            </div>
        </div>
    );
};

export default PackagesBanner;