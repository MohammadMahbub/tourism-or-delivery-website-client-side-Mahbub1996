import { faFacebookF, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import FooterCol from './FooterCol';
import './Layout.css';

const Footer = () => {
    const noNamed = [
        { name: "Platinum", link: "/gold" },
        { name: "Diamond Up", link: "/gold" },
        { name: "Gold", link: "/gold" },
        { name: "Silver", link: "/gold" },
        { name: "Diamond", link: "/gold" },
    ]
    const services = [
        { name: "Platinum", link: "/gold" },
        { name: "Diamond Up", link: "/gold" },
        { name: "Gold", link: "/gold" },
        { name: "Silver", link: "/gold" },
        { name: "Diamond", link: "/gold" },
       
    ]
    const packages = [
        { name: "Platinum", link: "/gold" },
        { name: "Diamond Up", link: "/gold" },
        { name: "Gold", link: "/gold" },
        { name: "Silver", link: "/gold" },
        { name: "Diamond", link: "/gold" },
    ]
    const ourAddress = [
        { name: "Dhaka , Bangladesh", link: "https://www.google.com/maps" },
        { name: "Mirpur", link: "https://www.google.com/maps" },

    ]

    return (
        <footer className="footer-area clear-both">
            <div className="container">
                <div className="row pt-5">
                    <FooterCol key={1} menuItems={noNamed}></FooterCol>
                    <FooterCol key={2} menuTitle={'Services'} menuItems={services}></FooterCol>
                    <FooterCol key={3} menuTitle={"Package"} menuItems={packages}></FooterCol>
                    <FooterCol key={4} menuTitle={'Our Address'} menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item">
                                <a href="//facebook.com">
                                    <FontAwesomeIcon className='icon active-icon' icon={faFacebookF} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="//google.com">
                                    <FontAwesomeIcon className='icon' icon={faGooglePlus} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="//instagram.com">
                                    <FontAwesomeIcon className='icon' icon={faInstagram} />
                                </a>
                            </li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="mb-1">Call Now</h6>
                            <a className="button-style" href="tel:01771225965">+88 01771225965</a>
                        </div>
                    </FooterCol>
                    <div className="copyRight text-center pt-3">
                        <p>&copy; {(new Date()).getFullYear()} All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;