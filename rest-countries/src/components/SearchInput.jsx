import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeProvider'
import styles from '../styles/SearchInput.module.css'

export const SearchInput = ({ children, searchData }) => {
  const { isDarkMode } = useContext(DarkModeContext)
  return (
    <form
      className={`${styles.form} ${isDarkMode ? styles.dark : ''}`}
      onSubmit={e => e.preventDefault()}
    >
      {children}
      <input
        type='text'
        placeholder='Search for a country...'
        className={isDarkMode ? styles.inputDark : ''}
        onChange={e => searchData(e.target.value)}
      />
    </form>
  )
}
