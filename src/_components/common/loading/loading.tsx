'use client'

import { FC } from 'react'
import { ILoaderProps } from './types'
import styles from './styles.module.scss'

export const Loading: FC<ILoaderProps> = () => {
  return <div className={styles.loader}></div>
}
