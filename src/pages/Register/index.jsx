import React from 'react'
import styles from './index.module.scss'

const Register = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Wrapper}>
                <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
                <form>
                    <input placeholder="name" />
                    <input placeholder="last name" />
                    <input placeholder="username" />
                    <input placeholder="email" />
                    <input placeholder="password" />
                    <input placeholder="confirm password" />
                    <span className={styles.Agreement}>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </span>
                    <button>CREATE</button>
                </form>
            </div>
        </div>
    )
}

export default Register