import React from "react";
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <h1 className={styles.title}>John Doe</h1>
            <p>123 Street, New York, USA</p>
            <p>+012 345 67890 | info@domain.com</p>
            <div className={styles.socials}>
                <img
                    src="/assets/socials/twitter.png"
                    alt="social-icon"
                    className={styles.icon} />
                <img
                    src="/assets/socials/linkedin.png"
                    alt="social-icon"
                    className={styles.icon} />
                <img
                    src="/assets/socials/github.png"
                    alt="social-icon"
                    className={styles.icon} />
            </div>
        </footer>
    )
}