import React from 'react'

const ContactForm = () => {
    // Using Netlify's built-in form handling. See https://docs.netlify.com/forms/setup/#html-forms
    return (
        <form name="Contact Form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div className="field half first">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
                <label htmlFor="email">Your Email</label>
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
    )
};

export default ContactForm;
