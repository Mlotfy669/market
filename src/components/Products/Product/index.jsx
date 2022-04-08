import React from 'react'
import {FavoriteBorderOutlined , SearchOutlined , ShoppingCartOutlined} from '@mui/icons-material'
import styles from './index.module.scss'
const Product = ({item}) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Circle}></div>
      <img src={item.img} alt="" />
      <div className={styles.info}>
        <div className={styles.Icon}>
          <FavoriteBorderOutlined />
        </div>
        <div className={styles.Icon}>
          <SearchOutlined />
        </div>
        <div className={styles.Icon}>
          <ShoppingCartOutlined />
        </div>
      </div>
    </div>
  )
}

export default Product