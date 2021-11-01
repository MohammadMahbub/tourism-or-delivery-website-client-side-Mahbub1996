import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Package = () => {
    const [packageData, setPackageData] = useState([]);

    useEffect(() => {
        fetch('https://infinite-tor-55893.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackageData(data))
    }, [])
    console.log('package :>> ', packageData);
    return (
        <div class="containers">
            <div className="text-center my-3">
                <h1 className="text-success"> Our All Packages</h1>
            </div>
            <div className="row my-3">
                {
                    packageData.map((data, index) => <div key={index} className="col-md-4 mt-4">
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
            </div>
        </div>
    );
};

export default Package;