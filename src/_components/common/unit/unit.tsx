'use client'

import { FC } from 'react'
import classnames from 'classnames'
import { IUnitProps } from './types'
import styles from './styles.module.scss'

export const Unit: FC<IUnitProps> = ({ unit, currentUnit, setUnit, children }) => {
  return (
    <div
      onClick={() => setUnit(unit)}
      className={classnames(styles.unit, {
        [styles.active]: currentUnit === unit,
      })}
      role='button'
    >
      {children}
    </div>
  )
}
