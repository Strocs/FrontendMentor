import { useState } from 'react'
import { useTodo } from './useTodo'

export const useFilterTodos = () => {
  const [todoFilter, setTodoFilter] = useState('')
  const { tagArray } = useTodo()
  const FilteredComponent = (Component, todo) => {
    console.log(Component, todo)
    if (todoFilter === 'Completed' && todo.completed) {
      return <Component />
    } else if (todoFilter === 'Active' && !todo.completed) {
      return <Component />
    } else if (
      tagArray.includes(todoFilter) &&
      todo.tags.includes(todoFilter)
    ) {
      return <Component />
    } else if (todoFilter === 'All' || todoFilter === '') {
      return <Component />
    }
  }
  return {
    todoFilter,
    setTodoFilter,
    FilteredComponent
  }
}
