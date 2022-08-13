import React, { ReactNode } from 'react'
import styles from './WrapperGrid.module.css'

export default function WrapperGrid({
    children
}: {
    children: ReactNode | ReactNode[]
}) {
  return (
    <div className={styles.wrapperGrid}>
        {children}
    </div>
  )
}
