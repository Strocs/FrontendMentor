export const dataFetch = async () => {
  const results = await fetch('../../countriesAPI.json')
  if (!results.ok) throw new Error('Something went wrong')
  const data = await results.json()
  return { data }
}
