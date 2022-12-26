import { DarkModeButton } from './DarkModeButton'
import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeProvider'
import styles from '../styles/Header.module.css'

export const Header = () => {
  const { isDarkMode } = useContext(DarkModeContext)
  return (
    <header className={`${styles.header} ${isDarkMode ? styles.dark : ''}`}>
      <div>
        <h1>Where in the world?</h1>
        <DarkModeButton />
      </div>
    </header>
  )
}
