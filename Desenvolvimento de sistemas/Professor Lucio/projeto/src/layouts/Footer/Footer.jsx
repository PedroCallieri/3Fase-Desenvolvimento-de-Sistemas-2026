import React from 'react'
import styles from './Footer.module.css'

export const Footer = ({autor}) => {
  return (
    <p className={styles.p}>Esse site foi desenvolvido por {autor}</p>
  )
}
