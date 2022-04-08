import React from 'react'
import { Facebook,LinkedIn,GitHub,MailOutline,Phone } from '@mui/icons-material'
import styles from './index.module.scss'
const Footer = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.left}>
            <h1 className={styles.logo}>M.Lotfy</h1>
            <p className={styles.desc}>There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.</p>
            <div className={styles.socailContainer}>
                <a href='https://www.facebook.com/profile.php?id=100011181729823' target='_blank' className={styles.socailIcon} style={{backgroundColor:"#3B5999"}}>
                    <Facebook />
                </a>
                <a href='https://www.linkedin.com/in/mlotfy669/' target='_blank' className={styles.socailIcon} style={{backgroundColor:"#0077B7"}}>
                    <LinkedIn />
                </a>
                <a href='https://github.com/Mlotfy669' target='_blank' className={styles.socailIcon} style={{backgroundColor:"#000"}}>
                    <GitHub />
                </a>
            </div>
        </div>
        <div className={styles.center}>
            <h3 className={styles.title}>Useful Links</h3>
            <ul className={styles.List}>
                <li className={styles.listItem}>Home</li>
                <li className={styles.listItem}>Cart</li>
                <li className={styles.listItem}>Man Fashion</li>
                <li className={styles.listItem}>Woman Fashion</li>
                <li className={styles.listItem}>Accessories</li>
                <li className={styles.listItem}>My Account</li>
                <li className={styles.listItem}>Order Tracking</li>
                <li className={styles.listItem}>Wishlist</li>
                <li className={styles.listItem}>Wishlist</li>
                <li className={styles.listItem}>Terms</li>
            </ul>
        </div>
        <div className={styles.right}>
            <h3 className={styles.title}>Contact</h3>
            <div className={styles.ContactItem}>
                <Phone style={{marginRight:"10px"}}/> +20 1023272380
            </div>
            <div className={styles.ContactItem}>
                <MailOutline style={{marginRight:"10px"}} /> M.lotfy9966@gmail.com
            </div>
                {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
        </div>
    </div>
  )
}

export default Footer