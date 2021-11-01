import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const PackageDetailsBanner = () => {
    const {packageName} = useParams()
    const [singlePackageData  , setSinglePackageData] = useState([]);
    useEffect(() =>{
        fetch(`https://haunted-nightmare-25196.herokuapp.com/packages/${packageName}`)
        .then(res => res.json())
        .then(data => setSinglePackageData(data))
    } , [])

    return (
        <div>
            <div>
                <div className="destination-details-img">
                    <img className="w-100" src={singlePackageData.img} alt="" />
                    <h3 className="text-light"> {packageName} </h3>
                </div>    
            </div>
        </div>
    );
};

export default PackageDetailsBanner;