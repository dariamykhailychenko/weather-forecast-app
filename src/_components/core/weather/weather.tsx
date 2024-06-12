'use client'

import { FC } from 'react'
import { Icon } from '@/_components/common/icon'
import { IWeatherProps } from './types'
import styles from './styles.module.scss'

export const Weather: FC<IWeatherProps> = ({ weather }) => {
  const { day, tempMax, tempMin, icon } = weather

  return (
    <div className={styles.weather}>
      <span className={styles.day}>{day}</span>
      <Icon name={icon} />
      <span className={styles.max}>{tempMax}</span>
      <span className={styles.min}>{tempMin}</span>
    </div>
  )
}
