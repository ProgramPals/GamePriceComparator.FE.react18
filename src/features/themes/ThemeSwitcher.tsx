import { useTheme } from '@/features/themes/ThemeProvider'
import IconSunFill from '@/assets/icons/sun'
import IconMoonStarsFill from '@/assets/icons/moon'
import styles from './ThemeSwitcher.module.scss'

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <nav className={styles['switcher-wrap']}>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={styles['switch-theme-btn']}
        type="button"
      >
        <IconSunFill
          className={`${styles['switch-icon']} ${theme === 'dark' && styles['hide']}`}
        />
        <IconMoonStarsFill
          className={`${styles['switch-icon']} ${theme === 'light' && styles['hide']}`}
        />
      </button>
      <span className={styles['visually-hidden']}>Toggle theme</span>
    </nav>
  )
}
