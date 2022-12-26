import { CountryList, FilterDropdown, SearchInput } from '../components'
import styles from '../styles/MainPage.module.css'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { useLoaderData } from 'react-router-dom'
import { useCountriesFiltered } from '../hooks/useCountriesFiltered'

export const MainPage = () => {
  const { data } = useLoaderData()

  const {
    countries,
    searchCountries,
    filterCountriesByContinent
  } = useCountriesFiltered(data)

  return (
    <main className={styles.container}>
      <div className={styles.filters__wrapper}>
        <SearchInput searchData={searchCountries}>
          <HiOutlineMagnifyingGlass />
        </SearchInput>
        <FilterDropdown filterData={filterCountriesByContinent} />
      </div>

      <CountryList dataList={countries} />
    </main>
  )
}
