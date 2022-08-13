import React, { ChangeEvent } from 'react'
import styles from './Input.module.css'

export default function Input({
    onChange,
    placeholder =''
}: {
    onChange: (e : ChangeEvent<HTMLInputElement>) => void
    placeholder: string
}) {
  return (
    <input className={styles.input} onChange={onChange} placeholder={placeholder} />
  )
}
