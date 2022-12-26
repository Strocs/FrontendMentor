import { useLoaderData, useParams } from 'react-router-dom'
import {
  BorderCountriesTag,
  CountryInformation,
  FlagImage,
  ReturnButton
} from '../components'
import {
  formatNumber,
  stringListFromObjects,
  stringListsFromArrays
} from '../utils'

import styles from '../styles/DetailPage.module.css'

export const DetailPage = () => {
  const { id } = useParams()
  const { data } = useLoaderData()
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    flags,
    borders
  } = data.find(
    ({ name }) => name.common.toLowerCase() === id.replaceAll('-', ' ')
  )

  const native = Object.keys(name.nativeName).at(-1)

  return (
    <main className={styles.main__detail}>
      <div className={styles.detail__back}>
        <ReturnButton />
      </div>
      <div className={styles.detail__info}>
        <div className={styles.info__flag}>
          <FlagImage flag={flags.svg} name={name.common} />
        </div>
        <section className={styles.info__data}>
          <h2>{name.common}</h2>
          <div className={styles.data}>
            <div>
              <CountryInformation
                section='Native Name'
                data={name.nativeName[native].official}
              />
              <CountryInformation
                section='Population'
                data={formatNumber(population)}
              />
              <CountryInformation section='Region' data={region} />
              <CountryInformation section='Sub Region' data={subregion} />
              <CountryInformation
                section='Capital'
                data={stringListsFromArrays(capital)}
              />
            </div>
            <div>
              <CountryInformation
                section='Top Level Domain'
                data={stringListsFromArrays(tld)}
              />
              <CountryInformation
                section='Currencies'
                data={stringListFromObjects(currencies, true)}
              />

              <CountryInformation
                section='Languages'
                data={stringListFromObjects(languages)}
              />
            </div>
          </div>
          {!!borders && (
            <div className={styles.borders}>
              <p>Border Countries:</p>
              <ul>
                {borders.map(border => (
                  <BorderCountriesTag
                    key={border}
                    name={data.find(({ cca3 }) => cca3 === border).name.common}
                  />
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
