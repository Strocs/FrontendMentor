import { useContext, useState } from 'react'
import { DarkModeContext } from '../context/DarkModeProvider'
import { RiArrowDownSLine } from 'react-icons/ri'
import styles from '../styles/FilterDropdown.module.css'

export const FilterDropdown = ({ filterData }) => {
  const regions = ['Americas', 'Asia', 'Europe', 'Oceania', 'All']

  const { isDarkMode } = useContext(DarkModeContext)

  const [selected, setSelected] = useState('Filter by Region')
  const [isOpen, setIsOpen] = useState(false)

  const onSelected = (region = '') => {
    setSelected(region)
    setIsOpen(false)
    filterData(region)
  }

  return (
    <div className={styles.dropdown__container}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.dropdown__wrapper} ${
          isDarkMode ? styles.dark : ''
        }`}
      >
        {selected}
        <RiArrowDownSLine />
      </div>
      {isOpen && (
        <ul
          className={`${styles.dropdown__menu} ${
            isDarkMode ? styles.darkMenu : ''
          }`}
        >
          {regions.map(region => (
            <li onClick={() => onSelected(region)} key={region}>
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
