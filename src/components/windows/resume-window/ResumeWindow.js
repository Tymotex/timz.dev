import React from 'react';
import Window from '../Window.js';
import ContactForm from './ContactForm';

const ResumeWindow = (props) => {
    return (
        <Window {...props}>
            <p>
                View my <a target="_blank" href="https://tymotex.github.io/timz.dev/public/resume/resume.pdf">
                    <strong>resume</strong>
                </a> and <a target="_blank" href="https://tymotex.github.io/timz.dev/public/resume/transcript.pdf">
                    <strong>academic transcript</strong>
                </a>.
            </p>
            <h2 className="major">CONTACT</h2>
            <ContactForm />
        </Window>
    )
}

export default ResumeWindow;