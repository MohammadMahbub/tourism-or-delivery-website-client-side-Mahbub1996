import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './DestinationDetails.css'
import tourOne from '../../images/tour-1.png'
import tourTwo from '../../images/tour-2.png'
import tourThree from '../../images/tour-3.png'
import banner from '../../images/banner-1.jpg'
import { Link } from 'react-router-dom';

const DestinationDetails = () => {
    const { name } = useParams()

    const [singleData, setSingleData] = useState([]);

    const tourData = [
        { name: "PACKAGES", img: tourOne, des: `1 Tours in ${name}` },
        { name: name, img: tourTwo, des: "Check the best Tours" },
        { name: "Contact Us", img: tourThree, des: "riyazhossain5965@gmail.com" },
    ];

    useEffect(() => {
        fetch(`https://haunted-nightmare-25196.herokuapp.com/destination/${name}`)
            .then(res => res.json())
            .then(data => setSingleData(data));
    }, [])

    return (
        <div className="">
            <div className="destination-details-img">
                <img className="w-100" src={singleData.desImage} alt="" />
                <h3 className="text-light"> {singleData.name} </h3>
            </div>
            <div className="container-fluid">
                <div className="my-3">
                    <div className="containers">
                        <div className="row">
                            <div className="col-md-8">
                                <p className="h5 lh-lg text-justify">
                                    {singleData.descriptionContent}
                                </p>
                            </div>
                            <div className="col-md-4">
                                <div class="card" >
                                    <div className="p-3">
                                        {
                                            tourData.map((data, index) => <div className="d-flex">
                                                <div className="dest-img mb-3">
                                                    <img className="img-fluid w-75" src={data.img} alt="" />
                                                </div>
                                                <div>
                                                    <h5> {data.name} </h5>
                                                    <p>
                                                        {data.des}
                                                    </p>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h5 className="text-center"> {name} </h5>
                    <h2 className="text-center">Packages </h2>
                </div>
                <div className="container-fluid">
                    <div className="containers">
                        <div className="col-md-4 mb-3">
                            <div class="card" >
                                <img src={banner} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"> Golden </h5>

                                    <div className="d-flex">
                                        <i className="fas fa-map-marker-alt mt-1 me-3"></i>
                                        <h5> {name} </h5>
                                    </div>
                                    <hr />

                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DestinationDetails;