import React, { ReactNode } from 'react'
import styles from './Card.module.css'

export default function Card({
    children
}: {
    children: ReactNode | ReactNode[]
}) {
  return (
    <div className={styles.wrapper}>
        {children}
    </div>
  )
}
