import React from 'react'
import {categories} from '../../data'
import CategoryItem from './Item'
import styles from './index.module.scss'
const Categories = () => {
  return (
    <div className={styles.Container}>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Categories