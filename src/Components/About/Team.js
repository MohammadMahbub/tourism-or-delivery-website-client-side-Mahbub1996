import React from 'react';
import team1 from '../../images/team/staff-2.jpg';
import team2 from '../../images/team/staff-1.jpg';
import team3 from '../../images/team/staff-3.jpg';
import team4 from '../../images/team/staff-4.jpg';

const Team = () => {

    const teamMembers = [
        { name: "Riyaz Hossain", designation: "Owner", description: "Ownership is the state or fact of exclusive rights and control over property, which may be any asset, including an object, land or real estate, intellectual property, or until the nineteenth century, human beings", image: team1 },
        { name: "Jane Mcallister", designation: "Founder", description: "Ownership is the state or fact of exclusive rights and control over property, which may be any asset, including an object, land or real estate, intellectual property, or until the nineteenth century, human beings", image: team2 },
        { name: "Elly Spitch", designation: "Co-Founder", description: "Ownership is the state or fact of exclusive rights and control over property, which may be any asset, including an object, land or real estate, intellectual property, or until the nineteenth century, human beings", image: team3 },
        { name: "Hanna Zafron", designation: "CEO", description: "Ownership is the state or fact of exclusive rights and control over property, which may be any asset, including an object, land or real estate, intellectual property, or until the nineteenth century, human beings", image: team4 },
    ];

    return (
        <div className="containers">
            <div className="text-center my-3">
                <h5>Who we are</h5>
                <h5>Our Team</h5>
            </div>
            <div className="row">
                {
                    teamMembers.map((data, index) => <div className="col-md-3">
                        <div class="card" >
                            <img src={data.image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{data.name} </h5>
                                <h6> {data.designation} </h6>
                                <p class="card-text"> {data.description.slice(0,95)} </p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Team;