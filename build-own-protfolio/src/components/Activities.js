import React, { useState } from "react";
import styles from './Activities.module.css'
import { activities } from '../content/activities'

export const Activities = () => {
    const [activeSlide, setActiveSlide] = useState(0)

    return (
        <section className={styles.wrapper}>
            <button
                className={styles.button}
                onClick={() => {
                    activeSlide
                        ? setActiveSlide(activeSlide - 1)
                        : setActiveSlide(activities.length - 1)
                }}>
                <img src="/assets/actions/left-arrow.png" alt="left" className={styles.icon} />
            </button>
            <div className={styles.content}>
                <div>
                    <h2 className={styles.title}>{activities[activeSlide].title}</h2>
                    <p className={styles.text}>{activities[activeSlide].text}</p>
                </div>
            </div>
            <button
                className={styles.button}
                onClick={() => {
                    activeSlide + 1 < activities.length
                        ? setActiveSlide(activeSlide + 1)
                        : setActiveSlide(0)
                }}>
                <img src="/assets/actions/right-arrow.png" alt="right" className={styles.icon} />
            </button>
        </section>
    )
}