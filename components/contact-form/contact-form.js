import styles from './contact-form.module.css';
import { useState } from "react";

const ContactForm = () => {
    const [shouldShowEmail, setShouldShowEmail] = useState(false);
    return (
        <div className={styles['contact-form']}>
            <span className={styles['mail-text']}>Contact me</span>
            <div className={styles['social-media']}>
                <a href='https://www.twitter.com/__azt' target='_blank'><img src='images/twitter-icon.svg' alt='twitter logo' /></a>
                <a href='mailto:developer.ajitsingh@gmail.com' onClick={() => setShouldShowEmail(true)} target='_blank'><img src='images/mail-icon.svg' alt='mail logo' /></a>
                <a href='https://www.linkedin.com/in/as-ajitsingh' target='_blank'><img src='images/linkedin-icon.svg' alt='twitter logo' /></a>
            </div>
            {shouldShowEmail && <div className={styles['display-email']}>
                <p>In case default email app didn't open, here is my email: <b>ajitsingh.developer@gmail.com</b></p>
            </div>}
        </div>
    )
}
export default ContactForm;
