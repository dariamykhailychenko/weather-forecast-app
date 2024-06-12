'use client'

import { useEffect } from 'react'
import styles from '@/_styles/pages/error.module.scss'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className={styles.container}>
      <p className={styles.error}>Something went wrong!</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
