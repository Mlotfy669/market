import React from 'react'
import Navbar from '../../components/Navbar'
import Announcement from '../../components/announcement'
import Newsletter from '../../components/NewsLetter'
import Footer from '../../components/Footer'
import styles from './index.module.scss'
import { Add, Remove } from '@mui/icons-material'

const Product = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            <div className={styles.Wrapper}>
                <div className={styles.ImgContainer}>
                    <img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </div>
                <div className={styles.InfoContainer}>
                    <h1 className={styles.title}>Denim Jumpsuit</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </p>
                    <span className={styles.Price}>$ 20</span>
                    <div className={styles.FilterContainer}>
                        <div className={styles.Filter}>
                            <span className={styles.FilterTitle}>Color</span>
                            <div className={styles.FilterColor} style={{ backgroundColor: "black" }} ></div>
                            <div className={styles.FilterColor} style={{ backgroundColor: "darkblue" }} ></div>
                            <div className={styles.FilterColor} style={{ backgroundColor: "gray" }} ></div>
                        </div>
                        <div className={styles.Filter}>
                            <span className={styles.FilterTitle}>Size</span>
                            <select className={styles.Select}>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.AddContainer}>
                        <div className={styles.AmountContainer}>
                            <Remove />
                            <span className={styles.Amount}>1</span>
                            <Add />
                        </div>
                        <button className={styles.btn}>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Product