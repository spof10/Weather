import React, { useEffect, useState } from 'react'
import { WeatherForm } from './WeatherForm';
import { WeatherMainInfo } from './WeatherMainInfo';

import styles from '../styles/weatherApp.module.css';
import { Loading } from './Loading';

export const WeatherApp = () => {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        loadInfo();
    }, []);

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name}`
    }, [weather]);

     async function loadInfo (city = 'london'){
        
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`); 
        

        const json = await request.json();

        setTimeout(() => {

        }, 2000)

        setWeather(json); 
     }

    const handleChangeCity = (city) => {
        setWeather(null);
        loadInfo(city);
    }

  return (
    <div className={styles.weatherContainer}>

         <WeatherForm OnChangeCity={handleChangeCity} />   
         {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
        

    </div>
  )
}
