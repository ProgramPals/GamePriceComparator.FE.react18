import { Link } from 'react-router-dom'
import styles from './homepage.module.scss'
import { Suspense, useEffect } from 'react'
import { useAppSelector } from '@/hooks/redux'
import type { RootState } from '@/app/store'
import { Component as Logout } from '@/app/routes/auth/Logout'

export function HomePage() {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.Auth)

  useEffect(() => {
    if (!isAuthenticated) {
      // Perform any side effects when the user is not authenticated
      console.log('User is not authenticated')
    }
  }, [isAuthenticated])

  return (
    <div className={styles.homepage}>
      <h4>Home Page</h4>
      <div className={styles['user-auth']}>
        {isAuthenticated
          ? (
              <Suspense fallback={<div>Loading...</div>}>
                <Logout />
              </Suspense>
            )
          : (
              <>
                <Link to="login" className={styles.link}>
                  Login
                </Link>
                <Link to="register" className={styles.link}>
                  Register
                </Link>
              </>
            )}
      </div>
    </div>
  )
}

export const Component = HomePage
