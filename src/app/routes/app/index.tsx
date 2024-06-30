import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header/Header'
import { useTheme } from '@/features/themes/ThemeProvider'
import styles from './index.module.scss'

export function Component() {
  const { theme } = useTheme() || {}

  React.useEffect(() => {
    if (theme) {
      document.body.className = theme
    }
  }, [theme])

  return (
    <div className={styles['context-wrapper']}>
      <Header />
      <main className={styles.main}>
        <div className={styles['content-wrap']}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

Component.displayName = 'Index'
