'use client'

import { FC } from 'react'
import { Icon } from '@/_components/common/icon'
import { IConditionProps } from './types'
import styles from './styles.module.scss'

export const Condition: FC<IConditionProps> = ({ metric, label, icon }) => {
  return (
    <div className={styles.conditionsItem}>
      <div className={styles.conditionsIcon}>
        <Icon name={icon} />
      </div>
      <div className={styles.conditionsDetails}>
        <span className={styles.conditionsValue}>{metric}</span>
        <span className={styles.conditionsLabel}>{label}</span>
      </div>
    </div>
  )
}
