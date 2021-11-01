import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PackageData from '../../Data/DestinationData';
import packageOne from '../../images/package-1.jpg';
import packageTwo from '../../images/package-2.jpg';
import packageThree from '../../images/package-3.jpg';


const OurPackages = () => {
    const [packagesData, setPackagesData] = useState([]);

    

    // const packagesData = [
    //     { name: "Hong Kong", img: packageOne, continent: "Asia" },
    //     { name: "Berlin", img: packageTwo, continent: "Europe" },
    //     { name: "San Francisco", img: packageThree, continent: "United States" },
    // ];

    useEffect(() => {
        fetch('https://infinite-tor-55893.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackagesData(data))
    })

    const handleInsertData = (e) => {
        fetch('https://infinite-tor-55893.herokuapp.com/packages', {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(PackageData)
        })
        e.preventDefault()
    }

    return (
        <div className="containers">

            <div className="text-center">
                <p>
                    Promotions
                </p>
                <h3 className="my-5 text-primary">Some Of Our packages </h3>
            </div>


            <div className="row">
                {
                    packagesData.slice(0, 3).map((data, index) => <div key={index} className="col-md-4">
                        <div class="card" >
                            <img src={data.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> {data.name} </h5>

                                <div className="d-flex">
                                    <i className="fas fa-map-marker-alt mt-1 me-3"></i>
                                    <h5> {data.continent} </h5>
                                </div>
                                <hr />

                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Link to={`/package/${data.name}`} className="btn btn-primary">Details</Link>
                                    </div>
                                    <div>
                                        <Link to={`/booking/${data.name}`} className="btn btn-success">Booking</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

                {/* <button onClick={handleInsertData}>Insert Data </button> */}
            </div>
        </div>
    );
};

export default OurPackages;