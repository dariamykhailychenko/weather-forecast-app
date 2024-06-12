'use client'

import { FC } from 'react'
import { useFetchCurrentWeather } from '@/_hooks'
import { Icon } from '@/_components/common/icon'
import { UnitSwitch } from '../unitSwitch'
import { Conditions } from '../conditions'
import { ICurrentWeatherProps } from './types'
import styles from './styles.module.scss'

export const CurrentWeather: FC<ICurrentWeatherProps> = ({ unit, setUnit, selectedCity }) => {
  const { currentWeather } = useFetchCurrentWeather(selectedCity?.id, unit)

  return (
    currentWeather && (
      <div className={styles.weather}>
        <div className={styles.weatherDetails}>
          <Icon name={currentWeather.icon} className={styles.icon} />
          <div className={styles.temp}>
            <span className={styles.tempValue}>{currentWeather.currentTemp}</span>
            <span className={styles.tempMeasure}>
              <UnitSwitch setUnit={setUnit} unit={unit} />
            </span>
          </div>
          <span className={styles.range}>{`Max: ${currentWeather.tempMax}, min: ${currentWeather.tempMin}`}</span>
          <h1 className={styles.city}>{currentWeather.city}</h1>
          <span className={styles.state}>{currentWeather.weatherState}</span>
        </div>
        <Conditions conditions={currentWeather.conditions} />
      </div>
    )
  )
}
