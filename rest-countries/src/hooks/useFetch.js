import { useEffect, useState } from 'react'

export const useFetch = (url = '') => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(url)
      .then(resp => {
        console.log('render1')
        return resp.json()
      })
      .then(data => {
        console.log('render2')
        setLoading(false)
        setData(data)
      })
      .catch(err => {
        setLoading(false)
        setError(err.message)
      })
  }, [])
  return {
    data,
    loading,
    error
  }
}
