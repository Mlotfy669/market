import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Search , ShoppingCartOutlined} from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import styles from  './index.module.scss'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.Container}>
            <div className={styles.Wrapper}>
                <div className={styles.Left}>
                    <span className={styles.Language}>En</span>
                    <div className={styles.SearchContainer}>
                        <input type="text" placeholder='Search ...' className={styles.Input} />
                        <Search className={styles.searchIcon}/>
                    </div>
                </div>
                <div className={styles.Center}><h1 className={styles.Logo}>M.Lotfy</h1></div>
                <div className={styles.Right}>
                        <Link className={styles.MenuItem} to="register">Register</Link>

                        <Link className={styles.MenuItem} to="login">Sigh In</Link>
                    
                    <div className={styles.MenuItem}>
                        <Badge badgeContent={4} color="primary" onClick={() => navigate('cart')}>
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar