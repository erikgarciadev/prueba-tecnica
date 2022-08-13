import React, { ReactNode } from 'react'
import styles from './Button.module.css'

export default function Button({
    children,
    onClick = () => {}
}: {
    children: ReactNode | ReactNode[]
    onClick : () => void
}) {
  return (
    <button onClick={onClick} className={styles.wrapper}>
        {children}
    </button>
  )
}
