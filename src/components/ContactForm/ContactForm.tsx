import { GETFORM_FORM_ENDPOINT } from "constants/external";
import { Button } from "../Button";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
    return (
        <form
            action={GETFORM_FORM_ENDPOINT}
            method="POST"
            className={styles.contactForm}
        >
            <div className={styles.fieldGroup}>
                <div className={`${styles.field} ${styles.name}`}>
                    <label htmlFor="contactName">Your Name</label>
                    <input
                        id="contactName"
                        type="text"
                        name="name"
                        placeholder="Linus Torvalds"
                    />
                </div>
                <div className={`${styles.field} ${styles.email}`}>
                    <label htmlFor="contactEmail">Your Email</label>
                    <input
                        id="contactEmail"
                        type="email"
                        name="email"
                        placeholder="torvalds@osdl.org"
                    />
                </div>
            </div>

            <div className={styles.fieldGroup}>
                <div className={`${styles.field} ${styles.message}`}>
                    <label htmlFor="contactMessage">Message</label>
                    <textarea
                        id="contactMessage"
                        name="message"
                        placeholder="Hello world."
                    />
                </div>
            </div>

            <div className={styles.submitButton}>
                <Button text="Submit" type="submit" />
            </div>
        </form>
    );
};

export default ContactForm;
