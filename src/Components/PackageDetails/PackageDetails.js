import React from 'react';
import { useParams } from 'react-router';
import AboutPackage from './AboutPackage';
import PackageDetailsBanner from './PackageDetailsBanner';

const PackageDetails = () => {

    const { packageName } = useParams()

    return (
        <div>
            <PackageDetailsBanner />
            <div className="container-fluid">
                <AboutPackage />
            </div>
        </div>
    );
};

export default PackageDetails;