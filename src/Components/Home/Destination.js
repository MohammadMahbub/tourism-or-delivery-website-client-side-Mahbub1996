import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Destination = () => {

    const [destination, setDestination] = useState([]);
    const [singleData, setSingleData] = useState([]);

    useEffect(() => {
        fetch('https://haunted-nightmare-25196.herokuapp.com/destination')
            .then(res => res.json())
            .then(data => setDestination(data))
    }, [])
    console.log('destination :>> ', destination);



    return (
        <div className="containers">
            <div className="my-3">
                <p className="text-center">OUR PROPOSALS</p>
                <h1 className="text-center">OUR DESTINATIONS</h1>
            </div>
            <div className="row">
                {
                    destination.map((data, index) => <div key={index} className="col-md-4 mt-4">
                        <div className="destination-area">
                            <div className="destination-img">
                                <img className="img-fluid" src={data.img} alt="" />
                                <div className="destination-overlay">
                                    <Link className="view-details" to={`/destination/${data.name}`}> View Destination of {data.name}
                                    </Link>
                                </div>
                                <h5> {data.name} </h5>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Destination;