import React from "react";
import styles from './Contacts.module.css'

export const Contacts = () => {
    return (
        <form
            action="https://formsubmit.co/your@email.com"
            className={styles.wrapper}
            target="_blank"
            method="POST">
            <div className={styles.inputs}>
                <input
                    type="text"
                    className={styles.input}
                    name="name"
                    placeholder="Your name"
                    required />
                <input
                    type="email"
                    name="email"
                    className={styles.input}
                    placeholder="Your email"
                    required />
            </div>
            <div className={styles.textareas}>
                <textarea
                    type="text"
                    name="message"
                    className={styles.textarea}
                    placeholder="Your message"
                    required />
                <button
                    className={styles.send} type="submit">
                    <img src="/assets/actions/send.png" alt="submit" className={styles.icon} />
                </button>
            </div>
        </form>
    )
}