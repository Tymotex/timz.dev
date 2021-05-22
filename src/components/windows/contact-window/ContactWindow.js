import React from 'react';
import Window from 'src/components/windows/Window.js';
import ContactForm from './ContactForm';
import bio from 'src/portfolio-data/bio';

const ContactWindow = props => {
    return (
        <Window {...props}>
            <p>
                Resume available{' '}
                <a target="_blank" rel="noreferrer" href={bio.resumeURL}>
                    <strong>here</strong>
                </a>
                . Transcript available{' '}
                <a target="_blank" rel="noreferrer" href={bio.transcriptURL}>
                    <strong>here</strong>
                </a>
                .
            </p>
            <h2 className="major">CONTACT</h2>
            <ContactForm />
        </Window>
    );
};

export default ContactWindow;
