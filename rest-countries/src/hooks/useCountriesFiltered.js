import { useEffect, useRef, useState } from 'react'

export const useCountriesFiltered = (data = []) => {
  const [countries, setCountries] = useState(data)
  const countriesRef = useRef(data)

  useEffect(() => {
    setCountries(data)
  }, [data])

  const searchCountries = (query = '') => {
    if (query.trim().length <= 0) {
      setCountries(countriesRef.current)
      return
    }
    setCountries(
      countriesRef.current.filter(d =>
        d.name.common.toLowerCase().includes(query)
      )
    )
  }

  const filterCountriesByContinent = (query = '') => {
    if (query === 'All') {
      countriesRef.current = data
      setCountries(countriesRef.current)
      return
    }
    countriesRef.current = data.filter(d => d.region === query)
    setCountries(countriesRef.current)
  }

  return {
    countries,
    searchCountries,
    filterCountriesByContinent
  }
}
