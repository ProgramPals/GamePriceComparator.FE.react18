import { Link } from 'react-router-dom'
import ThemeSwitcher from '@/features/themes/ThemeSwitcher'
import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-wrap']}>
        <div className={styles['navigation-menu']}>
          <Link to="/" className={styles.branding}>
            <span className={styles['branding-title']}>GameCompare</span>
          </Link>
          <nav className={styles.menu}>
            <Link className={styles.link} to="#">
              Test
            </Link>
            <Link className={styles.link} to="#">
              Debug
            </Link>
          </nav>
        </div>
        <div className={styles['navigation-search']}>
          <div className={styles['search-wrapper']}>
            <button className={styles['search-button']}>
              <span className={styles['search-placeholder']}>Search games...</span>
              <span className={styles['search-placeholder-fallback']}>Search...</span>
              <span className={styles['button-keys']}>
                <kbd className={styles['button-key']}>⌘</kbd>
                <kbd className={styles['button-key']}>K</kbd>
              </span>
            </button>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
