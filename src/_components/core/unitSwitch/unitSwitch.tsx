'use client'

import { FC } from 'react'
import { Unit } from '@/_components/common/unit'
import { Units } from '@/_types/units'
import { IUnitSwitchProps } from './types'
import styles from './styles.module.scss'

export const UnitSwitch: FC<IUnitSwitchProps> = ({ setUnit, unit }) => {
  return (
    <div className={styles.switch}>
      <Unit unit={Units.IMPERIAL} currentUnit={unit} setUnit={setUnit}>
        °F
      </Unit>
      <span className={styles.divider}>|</span>
      <Unit unit={Units.METRIC} currentUnit={unit} setUnit={setUnit}>
        °C
      </Unit>
    </div>
  )
}
