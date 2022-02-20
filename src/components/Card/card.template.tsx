import React from 'react'
import { ProductProps } from './index'
import styles from './styles.module.scss'

export function Card({ thumbnail, productTitle, productName, ...rest}: ProductProps ) {
  return (
    <>
      <div className={`px-3 py-2 ${styles.cardContainer}`} {...rest}>
        <img src={thumbnail} alt="" />
        <div className={`ps-3 ${styles.cardInfo}`}>
          <div className={`p-1 ${styles.productTitle}`}>{productTitle}</div>
          <div className={`pt-1 ${styles.productName}`}>{productName}</div>
        </div>
      </div>
    </>
  )
}
