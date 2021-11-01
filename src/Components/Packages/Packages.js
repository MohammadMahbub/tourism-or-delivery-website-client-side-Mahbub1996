import React, { useEffect, useState } from 'react';
import Package from './Package';
import PackagesBanner from './PackagesBanner';

const Packages = () => {



    return (
        <div>
            <PackagesBanner />
            <div className="container-fluid">
                <Package />
            </div>
        </div>
    );
};

export default Packages;