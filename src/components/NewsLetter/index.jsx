import React from 'react'
import { Send } from '@mui/icons-material'
import styles from './index.module.scss'
const NewsLetter = () => {
    return (
        <div className={styles.Container}>
            <h1 className={styles.title}>Newsletter</h1>
            <div className={styles.desc}>
            Get timely updates from your favorite products.
            </div>
            <div className={styles.inputContainer}>
                <input type="text" placeholder='Your Name' />
                <button><Send /></button>
            </div>
        </div>
    )
}

export default NewsLetter