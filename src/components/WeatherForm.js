import React, { useState } from 'react'
import styles from '../styles/weatherForm.module.css'

export const WeatherForm = ({OnChangeCity}) => {
  
  const [city, setCity] = useState('');

  const onChange = (e) => {
    const value = e.target.value;

    if (value !== '') {
        setCity(value);   
        console.log(city);
    }

    

    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    OnChangeCity(city);
  }

    return (
    <form className={styles.container} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" onKeyUp={onChange} placeholder='Ingrese una ciudad'/>
    </form>
  )
}
