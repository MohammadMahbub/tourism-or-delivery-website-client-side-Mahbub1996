import React from 'react';
import tourOne from '../../images/tour-1.png';
import tourTwo from '../../images/tour-2.png';
import tourThree from '../../images/tour-3.png';


const Tour = () => {
    const tourData = [
        { img: tourOne, name: "World Tour", description: "A concert tour is a series of concerts by an artist or group of artists in different cities, countries or locations. Often concert tours are named to differentiate different tours by the same artist and to associate a specific tour with a particular album or product" },
        { img: tourTwo, name: "Cruises", description: "Most major cruise lines organise guided tours of the ship for a small group. ... Many expedition ships have an 'open bridge policy', which means you can go and see how the captain and officers control the vessel at almost any time (except when arriving into or departing from a port)" },
        { img: tourThree, name: "Best Tours", description: "It was a long time since we haven’t seen each other, following the Covid Guidelines we are happy to announce that some of our tours are ready to book now! Please note that we don’t accept group more then 12 people in USA and more then 6 people in UK. We can’t wait to see you again and have some fun time together!" },
    ];
    return (
        <div className="containers">
            <div className="row py-5">
                {
                    tourData.map((data, index) => <div key={index} className="col-md-4">
                        <div className="">
                            <div className="d-flex">
                                <img className="img-fluid" src={data.img} alt="" />
                                <h3 className="ms-4"> {data.name} </h3>
                            </div>
                            <div>
                                <p>
                                    {data.description.slice(0, 255).concat(".")}
                                </p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Tour;