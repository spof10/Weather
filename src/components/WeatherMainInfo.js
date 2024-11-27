import React from 'react'
import styles from '../styles/weatherMainInfo.module.css'

export const WeatherMainInfo = ({weather}) => {
  return (
    <div className={styles.mainInfo}>
       <div className={styles.city}>{weather?.location?.name}</div>
      <div className={styles.country}>{weather?.location?.country}</div>
      <div className={styles.row}>
        <div>
          <img src={`http:${weather?.current?.condition?.icon}`} width="128" />
        </div>
        <div className={styles.weatherConditions}>
          <div className={styles.condition}>
            {weather?.current?.condition.text}
          </div>
          <div className={styles.current}>{weather?.current?.temp_c}º</div>
        </div>
      </div>
        
        <iframe 
        src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13288.5280549397!2d${weather?.location.lon}!3d${weather?.location.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1732570612368!5m2!1ses-419!2scl&zoom=0`} 
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        zoom="0"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
