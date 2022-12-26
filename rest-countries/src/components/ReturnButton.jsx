import { useContext } from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { DarkModeContext } from '../context/DarkModeProvider'
import styles from '../styles/ReturnButton.module.css'

export const ReturnButton = () => {
  const { isDarkMode } = useContext(DarkModeContext)
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate('/')}
      className={`${styles.button} ${isDarkMode ? styles.dark : ''}`}
    >
      <HiOutlineArrowLeft style={{ fontSize: '1.2rem' }} /> Back
    </button>
  )
}
