import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../context/DarkModeProvider'
import styles from '../styles/BorderCountriesTag.module.css'

export const BorderCountriesTag = ({ name = '' }) => {
  const { isDarkMode } = useContext(DarkModeContext)
  return (
    <li>
      <Link
        to={`/${name.replaceAll(' ', '-').toLowerCase()}`}
        className={`${styles.link} ${isDarkMode ? styles.dark : ''}`}
      >
        {name}
      </Link>
    </li>
  )
}
