'use client'

import { FC, useEffect } from 'react'
import { useFetchWeatherForecast, useWeatherForecastContext } from '@/_hooks'
import { Weather } from '../weather'
import { IWeatherForecast } from '@/_types/weather'
import styles from './styles.module.scss'
import { IWeatherForecastProps } from './types'

export const WeatherForecast: FC<IWeatherForecastProps> = ({ selectedCity, unit }) => {
  const { weatherForecast } = useFetchWeatherForecast({ lat: selectedCity?.lat, lon: selectedCity?.lon }, unit)

  return (
    weatherForecast && (
      <div className={styles.forecast}>
        <h2 className={styles.title}>5 day weather forecast</h2>
        <div className={styles.content}>
          {!!weatherForecast.length &&
            weatherForecast.map((weather: IWeatherForecast, index) => <Weather weather={weather} key={index} />)}
        </div>
      </div>
    )
  )
}
