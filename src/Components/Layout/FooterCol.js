import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className='col-md-3 col-sm-6 col-12'>
            <h6 className="">
                {
                    props.menuTitle ? props.menuTitle : "."
                }
            </h6>
            <ul className="list-unstyled">
                {
                    props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-secondary"> {item.name} </Link> </li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;