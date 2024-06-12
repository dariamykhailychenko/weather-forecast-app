'use client'

import { FC, useMemo } from 'react'
import { Condition } from '../condition'
import { IConditionsProps } from './types'
import styles from './styles.module.scss'

export const Conditions: FC<IConditionsProps> = ({ conditions }) => {
  const conditionList = useMemo(
    () => [
      {
        icon: 'humidity',
        label: 'Humidity',
        metric: conditions.humidity,
      },
      {
        icon: 'wind',
        label: 'Wind speed',
        metric: conditions.wind,
      },
    ],
    [conditions],
  )

  return (
    <div className={styles.conditions}>
      {conditionList.map(({ icon, label, metric }, index) => (
        <Condition icon={icon} label={label} metric={metric} key={index} />
      ))}
    </div>
  )
}
