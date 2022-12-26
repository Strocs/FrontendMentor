import { CountryInformation, FlagImage } from '.'
import { formatNumber } from '../utils/formatNumber'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeProvider'
import styles from '../styles/CountryCard.module.css'

export const CountryCard = ({ name, flag, population, region, capital }) => {
  const { isDarkMode } = useContext(DarkModeContext)
  const populationFormatted = formatNumber(population)
  return (
    <li className={`${styles.card} ${isDarkMode ? styles.dark : ''}`}>
      <Link to={`/${name.replaceAll(' ', '-').toLowerCase()}`}>
        <div className={styles.card__flag}>
          <FlagImage name={name} flag={flag} />
        </div>
        <div className={styles.card__info}>
          <h2>{name}</h2>
          <div>
            <CountryInformation
              section='Population'
              data={populationFormatted}
            />
            <CountryInformation section='Region' data={region} />
            <CountryInformation section='Capital' data={capital} />
          </div>
        </div>
      </Link>
    </li>
  )
}
