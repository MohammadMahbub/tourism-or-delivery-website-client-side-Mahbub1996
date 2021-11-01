import React from 'react';
import packageDOne from '../../images/package-d-1.png';
import packageDTwo from '../../images/package-d-2.png';
import packageThree from '../../images/package-d-3.png';
import banner from '../../images/banner-3.jpg';
import { Link, useParams } from 'react-router-dom';


const AboutPackage = () => {
    const {packageName} = useParams()

    const packageDetailsData = [
        { name: "TYPOLOGIES", img: packageDOne, pName: "Cultural" },
        { name: "DIFFICULTY", img: packageDTwo, pName: "Medium" },
        { name: "MIN. AGE", img: packageThree, pName: "3 Years" },
    ];

    return (
        <div className="containers">
            <div className="row d-md-flex justify-content-center align-items-center">
                <div className="col-md-7">
                    <div className="row">
                        {
                            packageDetailsData.map((data, index) => <div className="col-md-4 py-5">
                                <div className="d-flex justify-content-center align-items-center">
                                    <div>
                                        <img src={data.img} className="img-fluid w-50" alt="" />
                                    </div>
                                    <div>
                                        <h5> {data.name} </h5>
                                        <p className="text-secondary"> {data.pName} </p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    <div style={{fontSize:"19px" , lineHeight:"45px"}}>
                        <h3> Amazing Experience  </h3>
                        <p className="text-justify">
                            Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city's also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963
                        </p>
                    </div>
                </div>
                <div className="col-md-5">
                    <div>
                        <img className="img-fluid" src={banner} alt="" />
                    </div>
                    <Link to={`/booking/${packageName}`} className="button mt-3">Booking {packageName} </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutPackage;