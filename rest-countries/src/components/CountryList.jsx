import { CountryCard } from '.'
import styles from '../styles/CountryList.module.css'

export const CountryList = ({ dataList = [] }) => {
  return (
    <ul className={styles.list}>
      {dataList.map(data => (
        <CountryCard
          key={data.name.official}
          name={data.name.common}
          flag={data.flags.png}
          population={data.population}
          region={data.region}
          capital={data.capital}
        />
      ))}
    </ul>
  )
}
