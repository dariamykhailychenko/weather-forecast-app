'use client'

import styles from './styles.module.scss'

export const LayoutWrapper = ({ children }) => {
  return <div className={styles.content}>{children}</div>
}
