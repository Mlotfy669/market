import React from 'react'
import {popularProducts} from '../../data'
import Product from './Product'
import styles from './index.module.scss'
const Products = () => {
  return (
    <div className={styles.Container}>
        {popularProducts.map(item => (
            <Product item = {item} />
        ))}
    </div>
  )
}

export default Products