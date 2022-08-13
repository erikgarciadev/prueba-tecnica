import React, { ReactNode } from 'react'
import styles from './Badge.module.css'

export default function Badge({
    children,
    backgroundColor='grey'
}: {
    children: ReactNode | ReactNode[],
    backgroundColor?: string
}) {
  return (
   <span style={{
    backgroundColor: backgroundColor
   }} className={styles.wrapper}>
    {children}
   </span>
  )
}
