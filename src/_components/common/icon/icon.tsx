'use client'

import { FC, useMemo } from 'react'
import classnames from 'classnames'
import {
  WiDaySunny,
  WiStars,
  WiDayCloudy,
  WiNightAltCloudy,
  WiDayCloudyHigh,
  WiNightAltCloudyHigh,
  WiCloudy,
  WiDayShowers,
  WiNightShowers,
  WiDayRain,
  WiNightAltRain,
  WiThunderstorm,
  WiSnowflakeCold,
  WiFog,
  WiHumidity,
  WiStrongWind,
} from 'react-icons/wi'
import { IIconProps } from './types'
import styles from './styles.module.scss'

export const icons = {
  '01d': <WiDaySunny />,
  '01n': <WiStars />,
  '02d': <WiDayCloudy />,
  '02n': <WiNightAltCloudy />,
  '03d': <WiDayCloudyHigh />,
  '03n': <WiNightAltCloudyHigh />,
  '04d': <WiCloudy />,
  '04n': <WiCloudy />,
  '09d': <WiDayShowers />,
  '09n': <WiNightShowers />,
  '10d': <WiDayRain />,
  '10n': <WiNightAltRain />,
  '11d': <WiThunderstorm />,
  '11n': <WiThunderstorm />,
  '13d': <WiSnowflakeCold />,
  '13n': <WiSnowflakeCold />,
  '50d': <WiFog />,
  '50n': <WiFog />,
  'humidity': <WiHumidity />,
  'wind': <WiStrongWind />,
}

export const Icon: FC<IIconProps> = ({ name, className }) => {
  const selectedIcon = useMemo(() => (name ? icons[name] : null), [name])

  return <span className={classnames(styles.icon, className)}>{selectedIcon}</span>
}
