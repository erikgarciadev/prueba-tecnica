import React from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorImage from '../../assets/error.png'
import Button from '../Button'
import styles from './Error.module.css'

export default function Error() {

    const navigate = useNavigate()
    const refreshPage  = () => {
        navigate(0)
    }
  return (
    <div className={styles.wrapper}>
        <img alt='image_eror' src={ErrorImage}  />
        <p>Oops, something went wrong</p>
        <Button onClick={refreshPage}>
            REFRESH THE PAGE
        </Button>
    </div>
  )
}
