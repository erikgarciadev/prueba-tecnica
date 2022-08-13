import React, {  ReactNode } from 'react'
import styles from './Button.module.css'

export default function Button({
    children,
    onClick = () => {},
    style=undefined
}: {
    children: ReactNode | ReactNode[]
    onClick : () => void
    style?: any
}) {
  return (
    <button style={style} onClick={onClick} className={styles.wrapper}>
        {children}
    </button>
  )
}
