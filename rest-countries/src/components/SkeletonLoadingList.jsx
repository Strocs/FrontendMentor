import { SkeletonLoadingCard } from './SkeletonLoadingCard'
import styles from '../styles/CountryList.module.css'
export const SkeletonLoadingList = () => {
  return (
    <ul className={styles.list}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map(data => (
        <SkeletonLoadingCard key={data} />
      ))}
    </ul>
  )
}
