import styles from './contact-form.module.css';
import {useState} from "react";

const ContactForm = () => {
    return (
        <div className={styles['contact-form']}>
            <span className={styles['mail-text']}>Contact me</span>
            <div className={styles['social-media']}>
                <a href='https://www.twitter.com/__azt' target='_blank'><img src='images/twitter-icon.svg' alt='twitter logo'/></a>
                <a href='https://www.linkedin.com/in/as-ajitsingh' target='_blank'><img src='images/linkedin-icon.svg' alt='twitter logo'/></a>
            </div>
        </div>
    )
}
export default ContactForm;
