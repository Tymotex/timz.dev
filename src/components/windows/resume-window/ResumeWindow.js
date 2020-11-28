import React from 'react';
import Window from '../Window.js';

const ResumeWindow = (props) => {
    return (
        <Window {...props}>
            <p>
                Download my a<a download="toucan.png" href="toucan.png">resume</a> and <a href="">academic transcript</a>.
            </p>
            <h2 className="major">Contact</h2>
            <form method="post" action="#">
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