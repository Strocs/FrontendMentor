import { useState } from 'react'

export const useFilterTodos = () => {
  const [filter, setFilter] = useState('All')

  return {
    filter,
    setFilter
  }
}
