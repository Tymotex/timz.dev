import React from 'react';
import Window from 'src/components/windows/Window.js';
import ContactForm from './ContactForm';
import bio from 'src/portfolio-data/bio';

const ContactWindow = props => {
    return (
        <Window {...props}>
            <h2 className="major">CONTACT</h2>
            <ContactForm />
        </Window>
    );
};

export default ContactWindow;
