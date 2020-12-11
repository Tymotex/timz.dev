import React from 'react';
import Window from '../Window.js';

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
            {/* Using Netlify's built-in form handling. See https://docs.netlify.com/forms/setup/#html-forms */}
            <form method="post" data-netlify="true">
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="4"></textarea>
                </div>
                <div className="field">
                    <div data-netlify-recaptcha="true"></div>
                </div>
                <ul className="actions">
                    <li>
                        <input className="transparent-button special" type="submit" value="Send" />
                    </li>
                </ul>
            </form>
        </Window>
    )
}

export default ResumeWindow;