export const dataFetch = async () => {
  const results = await fetch('https://restcountries.com/v3.1/all')
  if (!results.ok) throw new Error('Something went wrong')
  const data = await results.json()
  return { data }
}
