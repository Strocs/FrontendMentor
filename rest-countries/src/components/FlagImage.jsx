import styles from '../styles/FlagImage.module.css'

export const FlagImage = ({ name, flag }) => {
  return <img className={styles.flag} src={flag} alt={`${name} flag`} />
}
