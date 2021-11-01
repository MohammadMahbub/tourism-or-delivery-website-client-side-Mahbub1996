import React from 'react';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div>
            <ContactBanner />
            <div className="container-fluid">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;