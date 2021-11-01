import React from 'react';

import bannerOne from '../../images/banner-4.jpg';
import bannerTwo from '../../images/banner-5.jpg';
import bannerThree from '../../images/banner-3.jpg';
import { Link } from 'react-router-dom';

const BestBeach = () => {
    return (
        <div className="containers">
            <div className="mt-3">
                <div className="row d-md-flex d-sm-flex d-block justify-content-center align-items-center">
                    <div className="col-md-6">
                        <p className="h5">North America </p>
                        <h3>The Best Beach </h3>
                        <p className="lh-lg text-justify">
                            North America is a continent in the Northern Hemisphere and almost entirely within the Western Hemisphere. It can also be described as the northern subcontinent of a single continent, America. It is bordered to the north by the Arctic Ocean, to the east by the Atlantic Ocean, to the southeast by South America and the Caribbean Sea, and to the west and south by the Pacific Ocean. Because it is on the North American Tectonic Plate, Greenland is included as part of North America geographically.

                            North America covers an area of about 24,709,000 square kilometers (9,540,000 square miles), about 16.5% of the Earth's land area and about 4.8% of its total surface. North America is the third-largest continent by area, following Asia and Africa, and the fourth by population after Asia, Africa, and Europe. In 2013, its population was estimated at nearly 579 million people in 23 independent states, or about 7.5% of the world's population.
                        </p>
                        <p className="h2">
                            <del style={{ color: "gray" }}>800</del> 500 $ / <span className="h6"> FOR PERSON</span>
                        </p>
                        <div className="py-3">
                            <Link to="/packages" className="button">Book Now </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div id="carouselExampleIndicators1" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner carousel-items">
                                <div class="carousel-item active">
                                    <img src={bannerOne} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={bannerTwo} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={bannerThree} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestBeach;