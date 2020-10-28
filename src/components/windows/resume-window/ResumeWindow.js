import React from 'react';
import Window from '../Window.js';

const ResumeWindow = (props) => {
    return (
        <Window {...props}>
            <p>
                My Resume! Lorem
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
                        <input type="submit" value="Send Message" className="special" />
                    </li>
                    <li>
                        <input type="reset" value="Reset" />
                    </li>
                </ul>
            </form>
        </Window>
    )
}

export default ResumeWindow;