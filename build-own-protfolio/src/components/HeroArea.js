import React from 'react'
import styles from './HeroArea.module.css'

export const HeroArea = () => {
    return (
        <section className={styles.wrapper}>
            <img src="/assets/profile.png" alt="profile" className={styles.profile} />
            <h1 className="title">Hi, I'm John!</h1>
            <p className="description">
                An aspiring web developer looking for a new role in tech
            </p>
            <div className={styles.buttonBox}>
                <button
                    className={`${styles.button} ${styles.project}`}
                    onClick={() => {
                        document
                            .getElementById('projects')  
                            .scrollIntoView({behavior: 'smooth'})
                    }}
                    >
                    My projects
                </button>
                <button
                    className={`${styles.button} ${styles.hire}`}
                    onClick={() => {
                        document
                            .getElementById('contact')  
                            .scrollIntoView({behavior: 'smooth'})
                    }}
                    >
                    Hire me
                </button>
            </div>
        </section>
    )
}