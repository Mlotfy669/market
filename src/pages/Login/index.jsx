import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
const Login = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Wrapper}>
                <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
                <form>
                    <input placeholder="username" />
                    <input placeholder="last name" />
                    <button>LOGIN</button>
                    <a href="#">DO NOT YOU REMEMBER THE PASSWORD?</a>
                    <Link to='/register'>CREATE A NEW ACCOUNT</Link>
                </form>
            </div>
        </div>
    )
}

export default Login