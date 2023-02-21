import React from 'react'
import styles from "./index.module.css"
import { useSelector } from 'react-redux';

const Main = () => {
  const weather = useSelector(state => state.weatherReducer.weather);
  return (
    <div className={styles.container}>
      <div className={styles.weatherResult}>
        <span>Latitude : {weather?.latitude}</span><br />
        <span>Longitude : {weather?.longitude}</span><br />
        <span>Generationtime_ms: {weather?.generationtime_ms}</span><br />
        <span>Utc_offset_seconds: {weather?.utc_offset_seconds}</span><br />
        <span>Timezone: {weather?.timezone}</span><br />
        <span>Timezone_abbreviation: {weather?.timezone_abbreviation}</span><br />
        <span>elevation: {weather?.elevation}</span><br />
        <span>hourly_units: {weather?.hourly_units?.time}</span><br />
   
      </div>
    </div>
  )
}

export default Main
