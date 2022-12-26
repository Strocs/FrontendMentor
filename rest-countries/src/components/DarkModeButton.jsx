import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeProvider'
import { FaRegMoon } from 'react-icons/fa'
import { BsSun } from 'react-icons/bs'
import styles from '../styles/DarkModeButton.module.css'

export const DarkModeButton = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext)
  return (
    <button
      className={`${styles.button} ${isDarkMode ? styles.dark : ''}`}
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode
        ? (
          <>
            <BsSun />
            <span>Light Mode</span>
          </>
          )
        : (
          <>
            <FaRegMoon />
            <span>Dark Mode</span>
          </>
          )}
    </button>
  )
}
