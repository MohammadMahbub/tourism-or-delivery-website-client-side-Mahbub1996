import React from 'react';
import './Contact.css';

const ContactForm = () => {
    return (
        <div className="containers">
            <div className="py-5">
                <div className="row d-md-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div style={{ fontSize: "19px", lineHeight: "35px" }}>
                            <h3>Drop as a Line </h3>
                            <p className="text-justify">
                                Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus.
                            </p>
                        </div>

                        <form className="contact-form" >
                            <label htmlFor=""> Name : </label> <br />
                            <input type="text" name="" id="" />
                            <label htmlFor=""> Email : </label> <br />
                            <input type="email" name="" id="" />
                            <label>Message : </label> <br />
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <br />
                            <button className="send-btn">Send</button>

                        </form>


                    </div>
                    <div className="col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14607.605510543724!2d90.38426189999998!3d23.75089605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1635686078765!5m2!1sen!2sbd" width="100%" height="325px" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;