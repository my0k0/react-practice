import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'
import { navbar } from '../content/navbar'

export const Header = () => {
    const [mobileNavigation, setMobileNavigation] = useState(false)
    const [windowDimension, setWindowDimension] = useState(null)

    useEffect(() => {
        setWindowDimension(window.innerWidth)
    }, [])
    
    useEffect(() => {
        function handleSize() {
            setWindowDimension(window.innerWidth)
        }

        window.addEventListener('resize', handleSize)
        return () => window.removeEventListener('resize', handleSize)
    }, [])

    const isMobile = windowDimension <= 700

    return (
        <header className={styles.wrapper}>
            <div className={styles.brand}>
                <img src="/assets/profile.png" alt="profile" className={styles.icon} />
                <h1 className={styles.logo}>Portfolio</h1>
            </div>
            {
                !mobileNavigation && isMobile ? (
                    <img 
                        src="/assets/actions/hamburger.png" 
                        alt="menu" 
                        className={styles.toggle}
                        onClick={() => {
                            setMobileNavigation(true)
                            document.body.style.overflow = 'hidden'
                        }}
                    />
                ) : (
                    <div className={styles.navigation}>
                        {
                            navbar.map((item, index) => {
                                return (
                                    <p 
                                        key={index}
                                        className={styles.item}
                                        onClick={() => {
                                            document
                                                .getElementById(item.title.toLowerCase())  
                                                .scrollIntoView({behavior: 'smooth'})
                                            setMobileNavigation(false)
                                            document.body.style.overflow = 'auto'
                                        }}>
                                        {item.title}
                                    </p>
                                )
                            })
                        }
                    </div>
                )
            }
        </header>
    )
}