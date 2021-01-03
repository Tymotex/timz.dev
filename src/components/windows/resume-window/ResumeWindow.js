import React from 'react';
import Window from '../Window.js';
import ContactForm from './ContactForm';

const ResumeWindow = (props) => {
    return (
        <Window {...props}>
            <p>
                Resume available <a target="_blank" rel="noreferrer" href="https://tymotex.github.io/timz.dev/public/resume/resume.pdf">
                    <strong>here</strong>
                </a>. Transcript available <a target="_blank" rel="noreferrer" href="https://tymotex.github.io/timz.dev/public/resume/transcript.pdf">
                    <strong>here</strong>
                </a>.
            </p>
            <h2 className="major">CONTACT</h2>
            <ContactForm />
        </Window>
    )
}

export default ResumeWindow;