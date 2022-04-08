import React from 'react'
import Navbar from '../../components/Navbar'
import Announcement from '../../components/announcement'
import Products from '../../components/Products'
import Newsletter from '../../components/NewsLetter'
import Footer from '../../components/Footer'
import styles from './index.module.scss'

const ProductList = () => {
  return (
    <div className={styles.Container}>
      <Navbar />
      <Announcement />
      <h1 className={styles.title}>Dresses</h1>
      <div className={styles.FilterContainer}>
        <div className={styles.Filter}>
          <span className={styles.FilterText}>Filter Products:</span>
          <select className={styles.Select}>
            <option disabled selected> Color </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className={styles.Select}>
            <option disabled selected> Size </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className={styles.Filter}>
          <span className={styles.FilterText}>Sort Products:</span>
          <select className={styles.Select}>
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default ProductList