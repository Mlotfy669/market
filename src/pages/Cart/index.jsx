import React from 'react'
import Navbar from '../../components/Navbar'
import Announcement from '../../components/announcement'
import Footer from '../../components/Footer'
import styles from './index.module.scss'
import { Add, Remove } from '@mui/icons-material'
const Cart = () => {
    return (
        <div>
            <Navbar  />
            <Announcement />
            <div className={styles.Wrapper}>
                <h1 className={styles.Title}>YOUR BAG</h1>
                <div className={styles.Top}>
                    <button className={styles.TopButton}>CONTINUE SHOPPING</button>
                    <div className={styles.TopTexts}>
                        <span className={styles.TopText}>Shopping Bag(2)</span>
                        <span className={styles.TopText}>Your Wishlist (0)</span>
                    </div>
                    <button className={styles.TopButton} type="filled">CHECKOUT NOW</button>
                </div>
                <div className={styles.Bottom}>
                    <div className={styles.Info}>
                        <div className={styles.Product}>
                            <div className={styles.ProductDetail}>
                                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <div className={styles.Details}>
                                    <span>
                                        <b>Product:</b> JESSIE THUNDER SHOES
                                    </span>
                                    <span>
                                        <b>ID:</b> 93813718293
                                    </span>
                                    <div className={styles.ProductColor} style={{backgroundColor:"black"}} />
                                    <span>
                                        <b>Size:</b> 37.5
                                    </span>
                                </div>
                            </div>
                            <div className={styles.PriceDetail}>
                                <div className={styles.ProductAmountContainer}>
                                    <Add />
                                    <div className={styles.ProductAmount}>2</div>
                                    <Remove />
                                </div>
                                <div className={styles.ProductPrice}>$ 30</div>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.Product}>
                            <div className={styles.ProductDetail}>
                                <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                                <div className={styles.Details}>
                                    <span>
                                        <b>Product:</b> HAKURA T-SHIRT
                                    </span>
                                    <span>
                                        <b>ID:</b> 93813718293
                                    </span>
                                    <div className={styles.ProductColor} style={{backgroundColor:"gray"}} />
                                    <span>
                                        <b>Size:</b> M
                                    </span>
                                </div>
                            </div>
                            <div className={styles.PriceDetail}>
                                <div className={styles.ProductAmountContainer}>
                                    <Add />
                                    <div className={styles.ProductAmount}>1</div>
                                    <Remove />
                                </div>
                                <div className={styles.ProductPrice}>$ 20</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Summary}>
                        <h1 className={styles.SummaryTitle}>ORDER SUMMARY</h1>
                        <div className={styles.SummaryItem}>
                            <span className={styles.SummaryItemText}>Subtotal</span>
                            <span className={styles.SummaryItemPrice}>$ 80</span>
                        </div>
                        <div className={styles.SummaryItem}>
                            <span>Estimated Shipping</span>
                            <span>$ 5.90</span>
                        </div>
                        <div className={styles.SummaryItem}>
                            <span>Shipping Discount</span>
                            <span>$ -5.90</span>
                        </div>
                        <div className={styles.SummaryItem} style={{fontWeight:"bold"}}>
                            <span>Total</span>
                            <span>$ 80</span>
                        </div>
                        <button className={styles.checkout}>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Cart