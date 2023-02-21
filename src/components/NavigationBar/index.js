import React from 'react'
import styles from "./index.module.css"
import { useDispatch } from 'react-redux';
import { getWeatherFetch } from '../../redux/Actions/actions';
import logo from "../../assests/images/logo.PNG"

const NavigationBar = () => {
  const dispatch = useDispatch();
    return (
        <div className={styles.navigationBar}>
            <img src={logo} height={50} width={200} alt="logo"/>
            <button onClick={() => dispatch(getWeatherFetch())}>Watchweather</button>
        </div>
    )
}

export default NavigationBar
