import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
const CategoryItem = ({item}) => {
  const navigate = useNavigate()
  return (
    <div className={styles.Container}>
      <img src={item.img} alt="" />
      <div className={styles.info}>
        <h1 className={styles.title}>{item.title}</h1>
        <button onClick={() => navigate('productList')}>SHOP NOW</button>
      </div>
    </div>
  )
}

export default CategoryItem