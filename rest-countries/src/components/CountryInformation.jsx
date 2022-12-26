import styles from '../styles/CountryInformation.module.css'

export const CountryInformation = ({ section = '', data = '' }) => {
  return (
    <p className={styles.info}>
      <b>{section}:</b> {data}
    </p>
  )
}
