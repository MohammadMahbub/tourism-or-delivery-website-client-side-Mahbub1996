import React from 'react';
import banner from '../../../images/destination/destination-details/thailand.jpg'

const ContactBanner = () => {
    return (
        <div>
             <div className="destination-details-img">
                <img className="w-100" src={banner} alt="" />
                <h3 className="text-light"> Contact </h3>
            </div>
        </div>
    );
};

export default ContactBanner;