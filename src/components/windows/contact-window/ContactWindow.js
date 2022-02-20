import React from 'react';
import Window from 'src/components/windows/Window';
import ContactForm from './ContactForm';

const ContactWindow = props => {
    return (
        <Window {...props}>
            <ContactForm />
        </Window>
    );
};

export default ContactWindow;
