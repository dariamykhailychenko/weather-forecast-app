import Link from 'next/link'
import { ROUTES } from '@/_constants/routes'
import styles from '@/_styles/pages/not-found.module.scss'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>404</div>
      <div className={styles.subtitle}>Oops! Page Not Found</div>
      <div className={styles.description}>Page you are looking for isn’t available.</div>
      <Link href={ROUTES.HOME_ROUTE} className={styles.link}>
        Back to Homepage
      </Link>
    </div>
  )
}
